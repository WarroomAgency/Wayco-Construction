// Runs first in <head>. Sets Google Consent Mode v2 defaults (everything denied until the visitor chooses), restores saved choice, honors Global Privacy Control.
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
window.gtag = window.gtag || gtag;
(function () {
  var KEY = 'wayco_consent_v1';
  var gpc = !!(navigator.globalPrivacyControl);
  var saved = null;
  try { saved = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) {}
  var denied = { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied', functionality_storage: 'granted', security_storage: 'granted', personalization_storage: 'denied' };
  gtag('consent', 'default', Object.assign({ wait_for_update: 500 }, denied));
  gtag('set', 'url_passthrough', true);
  gtag('set', 'ads_data_redaction', true);
  if (saved && saved.v === 1) {
    var s = saved.analytics ? 'granted' : 'denied';
    var m = saved.marketing && !gpc ? 'granted' : 'denied';
    gtag('consent', 'update', { analytics_storage: s, ad_storage: m, ad_user_data: m, ad_personalization: m });
  }
  window.__waycoGPC = gpc;
})();
