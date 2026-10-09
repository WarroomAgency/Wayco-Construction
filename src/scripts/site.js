// Site behaviours + tracking. No dependencies. Everything fires into dataLayer; GTM decides what to do with it (GA4, Ads, Meta…).
(function () {
  var dl = (window.dataLayer = window.dataLayer || []);
  var push = function (o) { dl.push(o); };
  var KEY = 'wayco_consent_v1';

  /* ---------- Consent UI ---------- */
  var banner = document.getElementById('consent-banner');
  var prefs = document.getElementById('consent-prefs');
  function getSaved() { try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { return null; } }
  function save(a, m) {
    var gpc = window.__waycoGPC; m = m && !gpc;
    try { localStorage.setItem(KEY, JSON.stringify({ v: 1, analytics: !!a, marketing: !!m, ts: Date.now() })); } catch (e) {}
    window.gtag('consent', 'update', { analytics_storage: a ? 'granted' : 'denied', ad_storage: m ? 'granted' : 'denied', ad_user_data: m ? 'granted' : 'denied', ad_personalization: m ? 'granted' : 'denied' });
    push({ event: 'consent_update', consent_analytics: !!a, consent_marketing: !!m });
    if (banner) banner.hidden = true; if (prefs) prefs.hidden = true;
  }
  if (banner && !getSaved()) setTimeout(function () { banner.hidden = false; }, 900);
  window.waycoConsent = { open: function () { if (!prefs) return; var s = getSaved() || {}; prefs.querySelector('[name=analytics]').checked = !!s.analytics; prefs.querySelector('[name=marketing]').checked = !!s.marketing && !window.__waycoGPC; prefs.hidden = false; if (banner) banner.hidden = true; var f = prefs.querySelector('button,input'); f && f.focus(); } };
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-consent]'); if (!t) return;
    var a = t.getAttribute('data-consent');
    if (a === 'accept') save(true, true);
    else if (a === 'reject') save(false, false);
    else if (a === 'open') window.waycoConsent.open();
    else if (a === 'save') save(prefs.querySelector('[name=analytics]').checked, prefs.querySelector('[name=marketing]').checked);
    else if (a === 'close') { prefs.hidden = true; }
  });

  /* ---------- Attribution capture (sessionStorage only) ---------- */
  var p = new URLSearchParams(location.search), keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'gbraid', 'wbraid', 'fbclid', 'msclkid'];
  try {
    var attr = JSON.parse(sessionStorage.getItem('wayco_attr') || '{}'), hit = false;
    keys.forEach(function (k) { if (p.get(k)) { attr[k] = p.get(k); hit = true; } });
    if (!attr.landing) { attr.landing = location.pathname; attr.referrer = document.referrer || ''; hit = true; }
    if (hit) sessionStorage.setItem('wayco_attr', JSON.stringify(attr));
  } catch (e) {}
  function fillForm(f) {
    var attr = {}; try { attr = JSON.parse(sessionStorage.getItem('wayco_attr') || '{}'); } catch (e) {}
    var all = Object.assign({ page_url: location.href }, attr);
    Object.keys(all).forEach(function (k) { var i = f.querySelector('[name="' + k + '"]'); if (i) i.value = all[k]; });
  }

  /* ---------- Click tracking via data-track / link type ---------- */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a,button'); if (!a) return;
    var href = a.getAttribute('href') || '', tr = a.getAttribute('data-track');
    var loc = a.getAttribute('data-loc') || (a.closest('[data-section]') && a.closest('[data-section]').getAttribute('data-section')) || '';
    if (href.indexOf('tel:') === 0) push({ event: 'phone_click', phone_number: href.replace('tel:', ''), click_location: loc });
    else if (href.indexOf('mailto:') === 0) push({ event: 'email_click', click_location: loc });
    else if (tr === 'cta') push({ event: 'cta_click', cta_text: (a.textContent || '').trim().slice(0, 60), cta_url: href, click_location: loc });
    else if (tr === 'social') push({ event: 'social_click', network: a.getAttribute('data-network') });
    else if (tr === 'google-review') push({ event: 'review_link_click', destination: a.getAttribute('data-dest') || 'google' });
    else if (tr === 'directions') push({ event: 'directions_click' });
    else if (/^https?:/.test(href) && href.indexOf(location.host) < 0) push({ event: 'outbound_click', link_url: href });
  }, { passive: true });

  /* ---------- Forms ---------- */
  document.querySelectorAll('form[data-netlify]').forEach(function (f) {
    var started = false;
    f.addEventListener('focusin', function () { if (!started) { started = true; fillForm(f); push({ event: 'form_start', form_name: f.getAttribute('name') }); } });
    f.addEventListener('submit', function (e) {
      fillForm(f);
      if (!f.checkValidity()) return;
      e.preventDefault();
      var btn = f.querySelector('[type=submit]'); if (btn) { btn.disabled = true; btn.setAttribute('data-label', btn.textContent); btn.textContent = 'Sending…'; }
      var body = new URLSearchParams(new FormData(f)).toString();
      fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body })
        .then(function (r) { if (!r.ok) throw new Error(r.status); push({ event: 'generate_lead', form_name: f.getAttribute('name'), service: (f.querySelector('[name=service]') || {}).value || '' }); try { sessionStorage.setItem('wayco_lead', '1'); } catch (x) {} location.href = '/thank-you'; })
        .catch(function () { var er = f.querySelector('[data-error]'); if (er) er.hidden = false; if (btn) { btn.disabled = false; btn.textContent = btn.getAttribute('data-label'); } push({ event: 'form_error', form_name: f.getAttribute('name') }); });
    });
  });

  /* ---------- Scroll depth ---------- */
  var marks = [25, 50, 75, 90], fired = {};
  function onScroll() {
    var h = document.documentElement, pct = Math.round((h.scrollTop + window.innerHeight) / h.scrollHeight * 100);
    marks.forEach(function (m) { if (pct >= m && !fired[m]) { fired[m] = 1; push({ event: 'scroll_depth', percent: m }); } });
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Reveal on scroll ---------- */
  document.documentElement.classList.remove('no-js');
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else els.forEach(function (el) { el.classList.add('in'); });

  /* ---------- Mobile nav ---------- */
  var nav = document.getElementById('mobile-nav'), burger = document.getElementById('nav-toggle');
  if (nav && burger) {
    var setNav = function (open) { nav.hidden = !open; burger.setAttribute('aria-expanded', open); burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); document.body.style.overflow = open ? 'hidden' : ''; };
    burger.addEventListener('click', function () { setNav(nav.hidden); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setNav(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setNav(false); });
  }

  /* ---------- Desktop mega-menu (hover + keyboard) ---------- */
  document.querySelectorAll('[data-menu]').forEach(function (m) {
    var btn = m.querySelector('[data-menu-btn]'), panel = m.querySelector('[data-menu-panel]'), t;
    function open() { clearTimeout(t); panel.hidden = false; btn.setAttribute('aria-expanded', 'true'); }
    function close() { t = setTimeout(function () { panel.hidden = true; btn.setAttribute('aria-expanded', 'false'); }, 120); }
    m.addEventListener('mouseenter', open); m.addEventListener('mouseleave', close);
    btn.addEventListener('click', function () { panel.hidden ? open() : (panel.hidden = true, btn.setAttribute('aria-expanded', 'false')); });
    m.addEventListener('focusout', function (e) { if (!m.contains(e.relatedTarget)) { panel.hidden = true; btn.setAttribute('aria-expanded', 'false'); } });
    m.addEventListener('keydown', function (e) { if (e.key === 'Escape') { panel.hidden = true; btn.setAttribute('aria-expanded', 'false'); btn.focus(); } });
  });

  /* ---------- Lightbox ---------- */
  var lb = document.getElementById('lightbox');
  if (lb) {
    var img = lb.querySelector('img'), cap = lb.querySelector('[data-cap]'), list = [], idx = 0;
    var show = function (i) { idx = (i + list.length) % list.length; var a = list[idx]; img.src = a.getAttribute('data-full'); img.alt = a.getAttribute('data-alt') || ''; cap.textContent = (a.getAttribute('data-alt') || '') + '  ·  ' + (idx + 1) + ' / ' + list.length; };
    var closeLb = function () { lb.hidden = true; document.body.style.overflow = ''; };
    document.addEventListener('click', function (e) {
      var a = e.target.closest('[data-lightbox]'); 
      if (a) { e.preventDefault(); var grp = a.getAttribute('data-lightbox'); list = [].slice.call(document.querySelectorAll('[data-lightbox="' + grp + '"]')); idx = list.indexOf(a); lb.hidden = false; document.body.style.overflow = 'hidden'; show(idx); lb.querySelector('[data-lb-close]').focus(); return; }
      if (e.target.closest('[data-lb-close]') || e.target === lb) closeLb();
      else if (e.target.closest('[data-lb-next]')) show(idx + 1);
      else if (e.target.closest('[data-lb-prev]')) show(idx - 1);
    });
    document.addEventListener('keydown', function (e) { if (lb.hidden) return; if (e.key === 'Escape') closeLb(); if (e.key === 'ArrowRight') show(idx + 1); if (e.key === 'ArrowLeft') show(idx - 1); });
  }

  /* ---------- Click-to-load map (no Google cookies until the visitor asks) ---------- */
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-load-map]'); if (!b) return;
    var box = b.parentElement, f = document.createElement('iframe');
    f.src = b.getAttribute('data-src'); f.title = 'Map to Wayco Construction, El Cajon'; f.loading = 'lazy'; f.referrerPolicy = 'no-referrer-when-downgrade'; f.className = 'absolute inset-0 h-full w-full border-0';
    box.appendChild(f); b.remove(); push({ event: 'map_loaded' });
  });

  /* ---------- Tabs / filters (data-filter) ---------- */
  document.querySelectorAll('[data-filter-group]').forEach(function (g) {
    var btns = g.querySelectorAll('[data-filter]'), items = document.querySelectorAll(g.getAttribute('data-filter-group'));
    btns.forEach(function (b) { b.addEventListener('click', function () {
      var f = b.getAttribute('data-filter');
      btns.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      items.forEach(function (it) { var cats = (it.getAttribute('data-cats') || '').split(' '); it.hidden = !(f === 'all' || cats.indexOf(f) > -1); });
      push({ event: 'filter_projects', filter: f });
    }); });
  });
})();
