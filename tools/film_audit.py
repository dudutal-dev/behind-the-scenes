#!/usr/bin/env python3
"""ביקורת הגייה לסרטונים (videos/*.mp4). מבוסס על כלי הביקורת של MOVA (Fitness-studio/tools/voice_audit.py).
מוציא את פס הקול מכל סרטון, מתמלל אותו ב-ElevenLabs Scribe עם חותמת זמן וציון ביטחון לכל מילה, ומסמן:
  wrong        — מילה שנשמעה אחרת מהתסריט (רק כשיש תסריט: videos/_src/<שם>.txt)
  sounds-like  — נשמע דומה לתסריט אבל נכתב אחרת
  unsure       — המתמלל לא היה בטוח במילה: בדרך כלל הגייה מעוותת, או מוזיקה שמכסה על הדיבור
  inconsistent — מילה שברורה ברוב הסרטונים, ובסרטון הזה הרבה פחות
בלי תסריט הכלי עובד "על עיוור": מסמן רק unsure / inconsistent, ושומר את התמלול ב-videos/_src/<שם>.heard.txt
כדי שאפשר יהיה לעבור עליו ולהפוך אותו לתסריט (<שם>.txt) — ומאז הביקורת של אותו סרטון מלאה, מילה-מילה.
התמלולים נשמרים במטמון לפי תוכן הקובץ: הרצה חוזרת מתמללת רק סרטונים שהשתנו.
שימוש: python3 tools/film_audit.py [שם ...] [--out report.json]      מפתח: משתנה סביבה XI_API_KEY
"""
import hashlib, json, os, re, statistics, subprocess, sys, tempfile, time, uuid, urllib.request, difflib
from concurrent.futures import ThreadPoolExecutor

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
SRC = os.path.join(ROOT, "videos", "_src")
CACHE_F = os.path.join(SRC, "audit_cache.json")
LOW = -0.5         # מתחת לזה המתמלל לא היה בטוח במילה
OUTLIER = -0.35    # מילה שבדרך כלל ברורה (חציון מעל -0.03) ובקליפ הזה מתחת לסף הזה
DIG = ["", "אחת", "שתיים", "שלוש", "ארבע", "חמש", "שש", "שבע", "שמונה", "תשע", "עשר", "אחת עשרה", "שתים עשרה", "שלוש עשרה", "ארבע עשרה", "חמש עשרה",
       "שש עשרה", "שבע עשרה", "שמונה עשרה", "תשע עשרה", "עשרים"]
TENS = {30: "שלושים", 40: "ארבעים", 45: "ארבעים וחמש", 50: "חמישים", 60: "שישים", 90: "תשעים", 9090: "תשעים תשעים"}
FINAL = str.maketrans("ךםןףץ", "כמנפצ")
SOUND = str.maketrans("עטקחש", "אתככס")   # אותיות שנשמעות אותו דבר (ש שמאלית = ס; המתמלל לא מבחין)
# המתמלל כותב לפעמים מונחים לועזיים באותיות לטיניות ("go", "front lever", "L"): תעתיק גס לעברית, להשוואת צליל בלבד
LAT = {"a": "א", "b": "ב", "c": "ק", "d": "ד", "e": "", "f": "פ", "g": "ג", "h": "ה", "i": "י", "j": "ג", "k": "ק", "l": "ל", "m": "מ", "n": "נ", "o": "ו", "p": "פ", "q": "ק", "r": "ר", "s": "ס", "t": "ט", "u": "ו", "v": "ו", "w": "ו", "x": "קס", "y": "י", "z": "ז"}
LETTER = {"l": "אל", "v": "וי", "t": "טי", "x": "אקס", "i": "אני", "me": "מי"}
def heb(w): return w if not re.search(r"[a-z]", w) else LETTER.get(w, "".join(LAT.get(ch, ch) for ch in w))

def words(t):
    t = re.sub(r"\[[^\]]*\]|\([^)]*\)", " ", t)
    t = re.sub(r"[֑-ׇ]", "", t)                       # ניקוד וטעמים
    t = t.replace("ק״ג", "קילו").replace('ק"ג', "קילו").replace("ק״מ", "קילומטר")
    t = t.replace("'", "").replace("׳", "").replace("’", "")
    t = t.replace("״", "").replace('"', "")          # ראשי תיבות (מכ״ם) נשארים מילה אחת
    t = t.replace("־", " ").replace("-", " ")   # מקף מחבר: שתי מילים
    t = re.sub(r"\d+", lambda m: f" {DIG[int(m.group())] if int(m.group()) < len(DIG) else TENS.get(int(m.group()), m.group())} ", t)
    t = re.sub(r"[^א-תa-zA-Z0-9\s]", " ", t).translate(FINAL).lower()
    return t.split()

def spell(w):   # כתיב מלא / חסר: בלי אימות קריאה באמצע המילה, ובלי אותיות כפולות
    core = w[0] + re.sub(r"[וי]", "", w[1:]) if len(w) > 2 else w
    return re.sub(r"(.)\1+", r"\1", core)
sound = lambda w: re.sub(r"(.)\1+", r"\1", re.sub(r"[אהוי]", "", spell(heb(w)).translate(SOUND)))
same = lambda a, b: a == b or spell(a) == spell(b)

def stt(path):
    b = "----" + uuid.uuid4().hex
    parts = [f'--{b}\r\nContent-Disposition: form-data; name="{k}"\r\n\r\n{v}\r\n'.encode()
             for k, v in (("model_id", "scribe_v2"), ("language_code", "he"), ("tag_audio_events", "false"), ("timestamps_granularity", "word"))]
    parts.append(f'--{b}\r\nContent-Disposition: form-data; name="file"; filename="a.mp3"\r\nContent-Type: audio/mpeg\r\n\r\n'.encode() + open(path, "rb").read() + b"\r\n")
    parts.append(f"--{b}--\r\n".encode())
    h = {"Content-Type": f"multipart/form-data; boundary={b}"}
    if os.environ.get("XI_API_KEY"): h["xi-api-key"] = os.environ["XI_API_KEY"]
    for attempt in range(4):
        try:
            req = urllib.request.Request("https://api.elevenlabs.io/v1/speech-to-text", data=b"".join(parts), headers=h, method="POST")
            with urllib.request.urlopen(req, timeout=120) as r:
                d = json.loads(r.read())
            return {"text": d["text"], "words": [[w["text"], round(w["start"], 2), round(w["end"], 2), round(w.get("logprob", 0), 3)] for w in d.get("words", []) if w.get("type") == "word"]}
        except Exception as e:
            err = str(e); time.sleep(2 + attempt * 3)
    return {"err": err}

def judge(text, heard):
    """משווה את המילים שהיו אמורות להיאמר למילים שנשמעו. מחזיר (מצב, רשימת בעיות)."""
    exp = words(text)
    got = [(words(w[0]), w) for w in heard["words"]]
    got = [(x[0], w) for x, w in got if x]            # מילה אחת לכל פריט (סימני פיסוק נפלו)
    g = [x[0] for x in got]
    issues, state = [], "ok"
    sm = difflib.SequenceMatcher(None, [spell(w) for w in exp], [spell(w) for w in g], autojunk=False)
    for tag, i1, i2, j1, j2 in sm.get_opcodes():
        if tag == "equal":
            for i, j in zip(range(i1, i2), range(j1, j2)):
                lp = got[j][1][3]
                if lp < LOW: issues.append({"kind": "unsure", "want": exp[i], "heard": g[j], "t": got[j][1][1], "lp": lp})
            continue
        want, hrd = exp[i1:i2], g[j1:j2]
        t = got[j1][1][1] if j1 < len(got) else (got[-1][1][2] if got else 0)
        # נשמע אותו דבר? (אותיות הומופוניות, או חלוקה אחרת למילים)
        close = difflib.SequenceMatcher(None, "".join(sound(w) for w in want), "".join(sound(w) for w in hrd)).ratio() if want and hrd else 0
        sw, sh = "".join(sound(w) for w in want), "".join(sound(w) for w in hrd)
        if sw == sh: continue   # אותו צליל בדיוק, רק כתיב אחר ("במוט"/"במות", "גו"/"go")
        issues.append({"kind": "sounds-like" if close >= 0.8 else "wrong", "want": " ".join(want), "heard": " ".join(hrd), "t": t})
    if any(x["kind"] == "wrong" for x in issues): state = "bad"
    elif issues: state = "suspect"
    return state, issues


def audio(mp4):   # פס הקול בלבד, מונו 64kbps — מספיק לתמלול וקטן להעלאה
    out = os.path.join(tempfile.gettempdir(), "film_audit_" + os.path.basename(mp4) + ".mp3")
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", mp4, "-vn", "-ac", "1", "-b:a", "64k", out], check=True)
    return out

def blind(heard):   # בלי תסריט: רק מילים שהמתמלל לא היה בטוח בהן
    return [{"kind": "unsure", "want": "", "heard": w[0], "t": w[1], "lp": w[3]} for w in heard["words"] if w[3] < LOW and words(w[0])]

def main():
    args = sys.argv[1:]
    out_f = args[args.index("--out") + 1] if "--out" in args else os.path.join(SRC, "audit.json")
    names = [a for i, a in enumerate(args) if not a.startswith("--") and (i == 0 or args[i - 1] != "--out")]
    vdir = os.path.join(ROOT, "videos")
    keys = names or sorted(f[:-4] for f in os.listdir(vdir) if f.endswith(".mp4"))
    os.makedirs(SRC, exist_ok=True)
    cache = json.load(open(CACHE_F)) if os.path.exists(CACHE_F) else {}
    def one(k):
        p = os.path.join(vdir, k + ".mp4")
        if not os.path.exists(p): return k, None, {"err": "missing file"}
        h = hashlib.md5(open(p, "rb").read()).hexdigest()
        if cache.get(k, {}).get("h") == h and "err" not in cache[k]["r"]: return k, h, cache[k]["r"]
        a = audio(p)
        try: return k, h, stt(a)
        finally: os.remove(a)
    res = {}
    with ThreadPoolExecutor(4) as ex:
        for n, (k, h, r) in enumerate(ex.map(one, keys), 1):
            if h: cache[k] = {"h": h, "r": r}
            res[k] = r
            if n % 20 == 0: print(f"  {n}/{len(keys)}", flush=True); json.dump(cache, open(CACHE_F, "w"), ensure_ascii=False)
    json.dump(cache, open(CACHE_F, "w"), ensure_ascii=False)
    report, by_word = {}, {}
    for k, r in res.items():
        if "err" in r: report[k] = {"state": "bad", "script": False, "heard": r["err"], "issues": [{"kind": "error", "want": "", "heard": r["err"], "t": 0}]}; continue
        sf = os.path.join(SRC, k + ".txt")
        if os.path.exists(sf): state, issues = judge(open(sf, encoding="utf8").read(), r)
        else:
            issues = blind(r); state = "suspect" if issues else "ok"
            open(os.path.join(SRC, k + ".heard.txt"), "w", encoding="utf8").write(r["text"] + "\n")
        report[k] = {"state": state, "script": os.path.exists(sf), "heard": r["text"], "issues": issues}
        for w in r["words"]:
            for x in words(w[0]): by_word.setdefault(spell(x), []).append((w[3], k, w[1], w[0]))
    # עקביות: מילה שברורה ברוב הסרטונים — ובסרטון מסוים הרבה פחות
    for w, xs in by_word.items():
        if len(xs) < 3: continue
        med = statistics.median(x[0] for x in xs)
        if med < -0.03: continue
        for lp, k, t, raw in xs:
            if lp < OUTLIER and not any(i.get("t") == t for i in report[k]["issues"]):
                report[k]["issues"].append({"kind": "inconsistent", "want": w, "heard": raw, "t": t, "lp": lp, "usual": round(med, 3)})
                if report[k]["state"] == "ok": report[k]["state"] = "suspect"
    for v in report.values(): v["issues"].sort(key=lambda i: i["t"])
    json.dump(report, open(out_f, "w", encoding="utf8"), ensure_ascii=False, indent=1)
    cnt = {s: sum(1 for v in report.values() if v["state"] == s) for s in ("ok", "suspect", "bad")}
    print(f"checked {len(report)}: ok {cnt['ok']}, suspect {cnt['suspect']}, bad {cnt['bad']} · with script {sum(v['script'] for v in report.values())}")
    for k, v in sorted(report.items(), key=lambda kv: -len(kv[1]["issues"])):
        if not v["issues"]: continue
        print(f"  {k} [{v['state']}]: " + " · ".join(f"{int(i['t'] // 60)}:{int(i['t'] % 60):02d} {i['kind']} {i['heard']}" + (f" (צ״ל {i['want']})" if i["kind"] in ("wrong", "sounds-like") else "") for i in v["issues"][:12]))

if __name__ == "__main__":
    main()
