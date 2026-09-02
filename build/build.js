/* ============================================================
   Static site generator entry point.
   Loads content.js + icons.js unmodified (both only ever assign
   window.X, so a minimal { window: {} } sandbox is enough — no
   edits needed to either file), builds every route from
   build/config.js, and writes real HTML files into docs/.
   ============================================================ */
'use strict';
var fs = require('fs');
var path = require('path');
var vm = require('vm'); // Node's vm module — unrelated to the app's own "vm" (view-model) naming
var config = require('./config');
var templatesFactory = require('./templates');

var ROOT = path.join(__dirname, '..');
var DOCS = path.join(ROOT, 'docs');
var TSHUFFLE_SEED = 1; // fixed at build time — no client-side testimonial reshuffle
var WSHUFFLE_SEED = 1; // fixed at build time — which 2 of the 10 hero case results get baked in

// CNAME_DOMAIN: set empty to skip writing docs/CNAME (e.g. a temporary GitHub Pages
// preview under the default *.github.io URL, before the custom domain is approved/pointed).
var CNAME_DOMAIN = process.env.CNAME_DOMAIN != null ? process.env.CNAME_DOMAIN : 'www.propertyinsurance.law';
// NOINDEX: set '1' to mark every page noindex and Disallow all in robots.txt — for
// preview deploys that shouldn't get crawled/indexed under a non-final URL.
var NOINDEX_ALL = process.env.NOINDEX === '1';

// Old Wix URLs with no equivalent page on the new site (everything else that
// used to rank keeps its exact old URL via config.js's LEGACY_FLAT_DIRS instead
// of needing a redirect at all). These get a static meta-refresh + canonical
// stub — GitHub Pages can't serve a real server-side 301, and Google's own
// guidance treats an instant meta-refresh as equivalent to one for ranking
// purposes. Verified against the real Wix sitemap on 2026-08-29.
var LEGACY_REDIRECTS = [
  { from: 'blog/categories/property-damage-law', to: 'blog' },
  { from: 'blog/categories/insurance-dispute-advice', to: 'blog' }
];

function loadWindowScript(relPath) {
  var sandbox = { window: {} };
  vm.createContext(sandbox);
  var src = fs.readFileSync(path.join(ROOT, relPath), 'utf8');
  vm.runInContext(src, sandbox, { filename: relPath });
  return sandbox.window;
}

function rmrf(p) {
  if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
}

function writeFile(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
}

function copyFile(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

function copyDir(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  fs.readdirSync(srcDir, { withFileTypes: true }).forEach(function (entry) {
    var src = path.join(srcDir, entry.name);
    var dest = path.join(destDir, entry.name);
    if (entry.isDirectory()) copyDir(src, dest);
    else copyFile(src, dest);
  });
}

var FAVICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='63 57 250 281'%3E%3Cpath fill='%231e1920' d='M187.5 58.5 220.5 90.75 312.375 183v57l-7-5.25L188.25 118.125 74.25 231.375 63.375 241.875V183l25-25z'/%3E%3Cpath fill='%235270fd' d='M187.875 154.5 312.375 278.625v58.5l-124.5-123.75z'/%3E%3C/svg%3E";
var DESCRIPTION = 'Attorneys for denied, delayed, and underpaid property insurance claims. No Recovery, No Fees. Serving Florida and Illinois. Call (407) 502-8068.';

function escAttr(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// opts: { title, description, canonical, ogType, ogImage, jsonLd, noindex, lang, alternates }
function wrapDocument(bodyHtml, opts) {
  var title = opts.title;
  var description = opts.description || DESCRIPTION;
  var canonical = opts.canonical;
  var ogType = opts.ogType || 'website';
  var ogImage = opts.ogImage;
  var alternates = opts.alternates || [];
  return '<!DOCTYPE html>\n<html lang="' + (opts.lang || 'en') + '">\n<head>\n' +
    '<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    '<title>' + escAttr(title) + '</title>\n' +
    '<meta name="description" content="' + escAttr(description) + '">\n' +
    (opts.noindex ? '<meta name="robots" content="noindex">\n' : '') +
    (canonical ? '<link rel="canonical" href="' + escAttr(canonical) + '">\n' : '') +
    alternates.map(function (a) { return '<link rel="alternate" hreflang="' + escAttr(a.hreflang) + '" href="' + escAttr(a.href) + '">\n'; }).join('') +
    '<link rel="icon" href="' + FAVICON + '">\n' +
    '<link rel="stylesheet" href="' + config.BASE_PATH + 'styles.css">\n' +
    '<meta property="og:site_name" content="propertyinsurance.law">\n' +
    '<meta property="og:type" content="' + escAttr(ogType) + '">\n' +
    '<meta property="og:title" content="' + escAttr(title) + '">\n' +
    '<meta property="og:description" content="' + escAttr(description) + '">\n' +
    (canonical ? '<meta property="og:url" content="' + escAttr(canonical) + '">\n' : '') +
    (ogImage ? '<meta property="og:image" content="' + escAttr(ogImage) + '">\n' : '') +
    '<meta name="twitter:card" content="' + (ogImage ? 'summary_large_image' : 'summary') + '">\n' +
    '<meta name="twitter:title" content="' + escAttr(title) + '">\n' +
    '<meta name="twitter:description" content="' + escAttr(description) + '">\n' +
    (ogImage ? '<meta name="twitter:image" content="' + escAttr(ogImage) + '">\n' : '') +
    (opts.jsonLd || '') +
    '</head>\n<body>\n' + bodyHtml + '\n<script src="' + config.BASE_PATH + 'client.js"></script>\n</body>\n</html>\n';
}

// llms.txt — a plain-text guide for AI/LLM crawlers, per the emerging
// llmstxt.org convention. Not consumed by browsers or search engines;
// generated straight from content.js so it stays in sync automatically.
function buildLlmsTxt(C) {
  var lines = [];
  lines.push('# propertyinsurance.law');
  lines.push('');
  lines.push('> Property Insurance Law PLLC represents policyholders in Florida and Illinois whose property insurance claims have been denied, delayed, or underpaid. No recovery, no fee.');
  lines.push('');

  lines.push('## Firm');
  var firmLabels = { about: 'About the Firm', attorneys: 'Our Attorneys', staff: 'Our Staff', faq: 'FAQ', policies: 'Law Firm Policies', contact: 'Contact / Free Claim Review' };
  Object.keys(firmLabels).forEach(function (p) {
    lines.push('- [' + firmLabels[p] + '](' + config.SITE_URL + config.href(p) + ')');
  });
  lines.push('');

  lines.push('## Property Claims We Handle');
  Object.keys(C.claims || {}).forEach(function (k) {
    var c = C.claims[k];
    lines.push('- [' + c.nav + '](' + config.SITE_URL + config.href('claim:' + k) + '): ' + (c.tagline || ''));
  });
  lines.push('');

  lines.push('## Other Practice Areas');
  Object.keys(C.practices || {}).forEach(function (k) {
    var p = C.practices[k];
    lines.push('- [' + p.nav + '](' + config.SITE_URL + config.href('practice:' + k) + '): ' + (p.tagline || ''));
  });
  lines.push('');

  lines.push('## Attorneys');
  (C.attorneys || []).forEach(function (a) {
    lines.push('- [' + a.name + '](' + config.SITE_URL + config.href('bio:' + a.slug) + '): ' + (a.role || ''));
  });
  lines.push('');

  lines.push('## Locations');
  Object.keys(C.locations || {}).forEach(function (k) {
    var l = C.locations[k];
    lines.push('- [' + (l.nav || k) + '](' + config.SITE_URL + config.href('location:' + k) + ')');
  });
  lines.push('');

  lines.push('## Blog');
  ((C.blog && C.blog.posts) || []).slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; }).forEach(function (p) {
    lines.push('- [' + p.title + '](' + config.SITE_URL + config.href('post:' + p.slug) + '): ' + (p.metaDescription || ''));
  });
  lines.push('');

  return lines.join('\n') + '\n';
}

function writeRedirectStub(fromDir, toPage) {
  var target = config.href(toPage);
  var absTarget = config.SITE_URL + target;
  var html = '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n' +
    '<meta http-equiv="refresh" content="0; url=' + escAttr(target) + '">\n' +
    '<link rel="canonical" href="' + escAttr(absTarget) + '">\n' +
    (NOINDEX_ALL ? '<meta name="robots" content="noindex">\n' : '') +
    '<title>Redirecting…</title>\n</head>\n<body>\n' +
    '<p>This page has moved. <a href="' + escAttr(target) + '">Continue to the new page</a>.</p>\n' +
    '</body>\n</html>\n';
  writeFile(path.join(DOCS, fromDir, 'index.html'), html);
}

function assemblePage(T, vmObj) {
  return T.header(vmObj) + T.mobileMenu(vmObj) +
    '<main style="display:block">' + T.renderPage(vmObj) + (vmObj.showClosingCta ? T.closingCta() : '') + '</main>' +
    T.footer(vmObj) + T.mobileCall();
}

function build() {
  var iconsWindow = loadWindowScript('icons.js');
  var contentWindow = loadWindowScript('content.js');
  var ICON = iconsWindow.ICON;
  var PIL_CONTENT = contentWindow.PIL_CONTENT;

  var T = templatesFactory(PIL_CONTENT, ICON, { basePath: config.BASE_PATH, href: config.href, siteUrl: config.SITE_URL });
  var routes = config.enumerateRoutes(PIL_CONTENT);

  rmrf(DOCS);
  fs.mkdirSync(DOCS, { recursive: true });

  var sitemapEntries = [];

  // Homepage <-> /es reciprocal hreflang (the only pair of pages with a translated counterpart).
  var homeUrl = config.SITE_URL + config.href('home');
  var esUrl = config.SITE_URL + config.href('es');

  routes.forEach(function (r) {
    var state = { page: r.page, tShuffleKey: TSHUFFLE_SEED, winShuffleKey: WSHUFFLE_SEED };
    var vmObj = T.buildVM(state);
    var canonical = config.SITE_URL + config.href(r.page);
    var alternates = [];
    if (r.page === 'home') alternates = [{ hreflang: 'es', href: esUrl }, { hreflang: 'x-default', href: homeUrl }];
    else if (r.page === 'es') alternates = [{ hreflang: 'en', href: homeUrl }, { hreflang: 'es', href: esUrl }];
    var html = wrapDocument(assemblePage(T, vmObj), {
      title: T.pageTitle(vmObj),
      description: T.pageDescription(vmObj),
      canonical: canonical,
      ogType: vmObj.isPost ? 'article' : 'website',
      ogImage: T.pageOgImage(vmObj),
      jsonLd: T.pageJsonLd(vmObj),
      noindex: NOINDEX_ALL,
      lang: vmObj.isEs ? 'es' : 'en',
      alternates: alternates
    });
    writeFile(path.join(DOCS, r.outDir, 'index.html'), html);
    sitemapEntries.push(canonical);
  });

  // 404 — a real page now that real URLs exist, instead of the old SPA's silent fallback to home
  var state404 = { page: 'home', tShuffleKey: TSHUFFLE_SEED, winShuffleKey: WSHUFFLE_SEED };
  var vm404 = T.buildVM(state404);
  var body404 = T.header(vm404) + T.mobileMenu(vm404) +
    '<main style="display:block"><div style="max-width:640px;margin:0 auto;padding:clamp(80px,12vw,140px) 24px;text-align:center">' +
    '<h1 style="font-family:var(--font-display);font-weight:600;font-size:clamp(32px,5vw,52px);color:var(--color-ink);margin:0 0 14px">Page not found</h1>' +
    '<p style="font-family:var(--font-sans);font-size:18px;line-height:1.6;color:var(--color-muted);margin:0 0 26px">The page you’re looking for doesn’t exist or may have moved.</p>' +
    '<a href="' + config.href('home') + '" class="pil-btn pil-btn--accent pil-btn--lg">Back to Home</a>' +
    '</div></main>' + T.footer(vm404) + T.mobileCall();
  writeFile(path.join(DOCS, '404.html'), wrapDocument(body404, { title: 'Page Not Found | propertyinsurance.law', noindex: true }));

  LEGACY_REDIRECTS.forEach(function (r) { writeRedirectStub(r.from, r.to); });

  copyFile(path.join(ROOT, 'styles.css'), path.join(DOCS, 'styles.css'));
  copyFile(path.join(__dirname, 'client.js'), path.join(DOCS, 'client.js'));
  copyDir(path.join(ROOT, 'assets'), path.join(DOCS, 'assets'));

  // CNAME — only meaningful once GitHub Pages is actually pointed at the custom domain.
  if (CNAME_DOMAIN) writeFile(path.join(DOCS, 'CNAME'), CNAME_DOMAIN + '\n');

  // Tells GitHub Pages to serve files as-is instead of running them through Jekyll.
  writeFile(path.join(DOCS, '.nojekyll'), '');

  writeFile(path.join(DOCS, 'robots.txt'),
    NOINDEX_ALL
      ? 'User-agent: *\nDisallow: /\n'
      : 'User-agent: *\nAllow: /\n\nSitemap: ' + config.SITE_URL + '/sitemap.xml\n');

  var today = new Date().toISOString().slice(0, 10);
  var sitemapXml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    sitemapEntries.map(function (u) {
      return '  <url>\n    <loc>' + u + '</loc>\n    <lastmod>' + today + '</lastmod>\n  </url>';
    }).join('\n') + '\n</urlset>\n';
  writeFile(path.join(DOCS, 'sitemap.xml'), sitemapXml);

  writeFile(path.join(DOCS, 'llms.txt'), buildLlmsTxt(PIL_CONTENT));

  console.log('Built ' + routes.length + ' pages + 404.html into docs/ (BASE_PATH=' + (config.BASE_PATH || '/') + ', SITE_URL=' + config.SITE_URL + ')');
}

build();
