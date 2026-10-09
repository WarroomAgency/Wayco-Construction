#!/usr/bin/env python3
"""Post-build SEO audit: titles, descriptions, canonicals, H1s, alt text, JSON-LD validity, broken internal links, duplicates. Run after `npm run build`."""
import os, re, json, sys, html, collections
D = sys.argv[1] if len(sys.argv) > 1 else "dist"
pages = {}
for root, _, fs in os.walk(D):
    if "/pagefind" in root or "/_astro" in root: continue
    for f in fs:
        if f.endswith(".html"):
            p = os.path.join(root, f); url = "/" + os.path.relpath(p, D)[:-5]; url = "/" if url == "/index" else url
            pages[url] = open(p, encoding="utf8").read()
known = set(pages) | {"/" + f for f in ["sitemap-index.xml","rss.xml","llms.txt","robots.txt","favicon.ico","site.webmanifest","search"]}
issues = collections.defaultdict(list); titles = collections.defaultdict(list); descs = collections.defaultdict(list)
for url, h in pages.items():
    t = re.search(r"<title>(.*?)</title>", h, re.S); t = html.unescape(t.group(1)) if t else ""
    d = re.search(r'<meta name="description" content="(.*?)"', h); d = html.unescape(d.group(1)) if d else ""
    titles[t].append(url); descs[d].append(url)
    if not t: issues[url].append("no title")
    elif len(t) > 65: issues[url].append(f"title {len(t)}c")
    if len(d) < 70 or len(d) > 165: issues[url].append(f"desc {len(d)}c")
    if not re.search(r'<link rel="canonical"', h): issues[url].append("no canonical")
    h1 = re.findall(r"<h1[\s>]", h)
    if len(h1) != 1: issues[url].append(f"{len(h1)} h1")
    for m in re.finditer(r"<img\b[^>]*>", h):
        if not re.search(r"\balt\b", m.group(0)): issues[url].append("img no alt"); break
    for m in re.finditer(r'<script type="application/ld\+json">(.*?)</script>', h, re.S):
        try: json.loads(m.group(1))
        except Exception as e: issues[url].append("bad JSON-LD")
    for href in set(re.findall(r'href="(/[^"#?]*)', h)):
        hh = href.rstrip("/") or "/"
        if hh not in known and not re.search(r"\.(xml|txt|ico|png|jpg|webp|mp4|css|js)$", hh) and not hh.startswith(("/_astro", "/pagefind", "/images", "/video")):
            issues[url].append(f"broken link {hh}")
for t, us in titles.items():
    if len(us) > 1: issues[us[0]].append(f"dup title with {len(us)-1} pages")
for d, us in descs.items():
    if len(us) > 1 and d: issues[us[0]].append(f"dup desc with {len(us)-1} pages")
print(len(pages), "pages audited")
for u, i in sorted(issues.items()): print(u, "→", "; ".join(sorted(set(i))))
if not issues: print("No issues")
