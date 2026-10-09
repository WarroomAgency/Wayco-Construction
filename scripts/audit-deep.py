#!/usr/bin/env python3
"""Deep content/SEO audit over dist/: word counts, heading structure, JSON-LD graph sanity, orphan pages, risky claims, near-duplicate paragraphs, sitemap coverage."""
import os, re, json, html, collections, sys, itertools
D = sys.argv[1] if len(sys.argv) > 1 else "dist"
pages = {}
for root, _, fs in os.walk(D):
    if "/pagefind" in root or "/_astro" in root: continue
    for f in fs:
        if f.endswith(".html"):
            p = os.path.join(root, f); u = "/" + os.path.relpath(p, D)[:-5]; pages[("/" if u == "/index" else u)] = open(p, encoding="utf8").read()
def main_text(h):
    m = re.search(r"<main.*?</main>", h, re.S); t = m.group(0) if m else h
    t = re.sub(r"<(script|style|noscript)[\s\S]*?</\1>", " ", t); return html.unescape(re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", t))).strip()
print("== WORD COUNTS (main) ==")
wc = {u: len(main_text(h).split()) for u, h in pages.items()}
for u, n in sorted(wc.items(), key=lambda x: x[1])[:14]: print(f"{n:5d} {u}")
print("\n== HEADINGS: pages with <3 h2, or skipped levels ==")
for u, h in sorted(pages.items()):
    hs = [int(x) for x in re.findall(r"<h([1-6])[\s>]", re.search(r"<main.*?</main>", h, re.S).group(0) if "<main" in h else h)]
    skips = [(a, b) for a, b in zip(hs, hs[1:]) if b - a > 1]
    if hs.count(2) < 2 and u not in ("/thank-you", "/404", "/search"): print("few h2:", u, hs.count(2))
    if skips: print("skip:", u, skips[:3])
print("\n== JSON-LD ==")
types = collections.Counter(); bad = []
for u, h in pages.items():
    for m in re.finditer(r'<script type="application/ld\+json">(.*?)</script>', h, re.S):
        g = json.loads(m.group(1)).get("@graph", [])
        ids = [n.get("@id") for n in g if n.get("@id")]
        if len(ids) != len(set(ids)): bad.append((u, "dup @id"))
        for n in g:
            t = n["@type"] if isinstance(n["@type"], str) else "+".join(n["@type"]); types[t] += 1
            if t == "Service" and not n.get("provider"): bad.append((u, "service no provider"))
            if t == "Article" and not (n.get("headline") and n.get("datePublished")): bad.append((u, "article incomplete"))
            if t == "FAQPage" and len(n["mainEntity"]) < 2: bad.append((u, "thin faq"))
print(dict(types)); print("problems:", bad or "none")
print("\n== ORPHANS / INBOUND LINKS (min 3 expected) ==")
inb = collections.Counter()
for u, h in pages.items():
    body = re.search(r"<main.*?</main>", h, re.S); body = body.group(0) if body else ""
    for l in set(re.findall(r'href="(/[^"#?]*)"', body)): inb[l.rstrip("/") or "/"] += 1
for u in sorted(pages):
    if u not in ("/404", "/thank-you", "/search") and inb[u] < 3: print("low main-content inbound:", u, inb[u])
print("\n== RISKY CLAIMS / HYPE in rendered text ==")
pat = re.compile(r"\b(licensed|insured|bonded|award[- ]winning|best|#1|number one|unparalleled|world[- ]class|premier|top[- ]rated|guarantee[d]?|since 20\d\d|\d{2,4}\+ (projects|homes|clients)|seamless|elevate|dream)\b", re.I)
hits = collections.defaultdict(set)
for u, h in pages.items():
    if u.startswith(("/privacy", "/terms", "/cookie", "/access")): continue
    t = main_text(h)
    for m in pat.finditer(t): hits[m.group(0).lower()].add((u, t[max(0, m.start()-50):m.end()+40]))
for k, v in sorted(hits.items()):
    print(f"[{k}] x{len(v)}"); [print("   ", u, "…", s) for u, s in list(v)[:3]]
print("\n== NEAR-DUPLICATE PARAGRAPHS across pages ==")
paras = collections.defaultdict(set)
for u, h in pages.items():
    m = re.search(r"<main.*?</main>", h, re.S)
    for p in re.findall(r"<p[^>]*>(.*?)</p>", m.group(0) if m else "", re.S):
        t = re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", "", p))).strip()
        if len(t) > 90: paras[t].add(u)
dups = [(t, us) for t, us in paras.items() if len(us) > 3]
print(len(dups), "paragraphs on >3 pages"); [print("  ", len(us), t[:110]) for t, us in sorted(dups, key=lambda x: -len(x[1]))[:6]]
print("\n== SITEMAP COVERAGE ==")
sm = "".join(open(os.path.join(D, f), encoding="utf8").read() for f in os.listdir(D) if f.startswith("sitemap-") and f.endswith(".xml") and f != "sitemap-index.xml")
locs = set(re.findall(r"<loc>https?://[^/]+(/[^<]*)</loc>", sm)); locs = {l.rstrip("/") or "/" for l in locs}
print("missing from sitemap:", sorted(u for u in pages if u not in locs and u not in ("/404", "/thank-you", "/search")) or "none")
print("in sitemap but noindex:", sorted(l for l in locs if l in ("/404", "/thank-you", "/search")) or "none")
