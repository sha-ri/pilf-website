/* ============================================================
   Route table + link generation for the static build.
   Single source of truth for how a `page` value (the same
   'home' / 'claim:roof' shaped strings the old SPA used as
   #/ hash routes) maps to an output directory and a real URL.
   ============================================================ */
'use strict';

// Served from the root of the custom domain (www.propertyinsurance.law via
// GitHub Pages + docs/CNAME), so the path prefix is just '/', not a project subpath.
var BASE_PATH = process.env.BASE_PATH != null ? process.env.BASE_PATH : '/';
var SITE_URL = process.env.SITE_URL != null ? process.env.SITE_URL : 'https://www.propertyinsurance.law';

// kind:slug -> output dir prefix
var KIND_DIRS = { claim: 'claims', practice: 'practice', process: 'process', location: 'locations', bio: 'attorneys', post: 'post' };

// flat page -> output dir (relative to docs/); 'home' is handled separately (outputs to docs/index.html)
var FLAT_PAGE_DIRS = {
  home: '',
  'claims-hub': 'claims-hub',
  'practice-hub': 'practice-hub',
  about: 'about-property-insurance-law',
  attorneys: 'our-attorneys',
  staff: 'staff',
  faq: 'faq',
  blog: 'blog',
  policies: 'privacy-policy-and-terms',
  contact: 'contact-us'
};

// Pages that already rank on the live Wix site keep their exact old URL
// (flat, no kind-prefix) instead of the new /kind/slug/ pattern, so the
// migration doesn't need redirects for anything Google already indexed.
// Cross-checked against the real Wix sitemap (pages-sitemap.xml) on 2026-08-29.
// Claim types and locations with no prior indexed URL (mold, frozen-pipe,
// lightning, tornado, theft, sinkhole, winter-park) are genuinely new and
// use the normal /kind/slug/ pattern below instead.
var LEGACY_FLAT_DIRS = {
  'claim:denied': 'denied-homeowners-insurance-claims',
  'claim:underpaid': 'underpaid-insurance-claims',
  'claim:delayed': 'delayed-insurance-claims-florida',
  'claim:hurricane': 'hurricane-property-damage-lawyer',
  'claim:wind-hail': 'wind-and-hail-damage-insurance-claims',
  'claim:roof': 'roof-damage-insurance-claims',
  'claim:water': 'water-damage-insurance-claims',
  'claim:fire': 'fire-damage-insurance-claims',
  'claim:commercial': 'commercial-property-insurance-claims',
  'location:chicago': 'illinois'
};

function href(p) {
  if (p === 'home') return BASE_PATH;
  if (LEGACY_FLAT_DIRS[p]) return BASE_PATH + LEGACY_FLAT_DIRS[p] + '/';
  var parts = p.indexOf(':') >= 0 ? p.split(':') : [p, null];
  var kind = parts[0], slug = parts[1];
  var dir = KIND_DIRS[kind];
  if (dir && slug) return BASE_PATH + dir + '/' + slug + '/';
  var flatDir = Object.prototype.hasOwnProperty.call(FLAT_PAGE_DIRS, p) ? FLAT_PAGE_DIRS[p] : p;
  return BASE_PATH + flatDir + '/';
}

// Derived straight from href() so outDir can never drift from the real URL.
function outDirFor(page) {
  return href(page).slice(BASE_PATH.length).replace(/\/$/, '');
}

// Enumerates every route straight off content.js's own keys, so adding
// a new claim/practice/process/location/attorney later needs no build-script edits.
// Any content entry with `draft: true` is skipped entirely — not written to
// docs/, not in the sitemap, not linked anywhere — for content that's ready
// but shouldn't go live until explicitly flipped (e.g. a hurricane-readiness
// page prepared ahead of storm season).
function enumerateRoutes(C) {
  var routes = [];
  Object.keys(FLAT_PAGE_DIRS).forEach(function (p) {
    routes.push({ page: p, outDir: outDirFor(p) });
  });
  Object.keys(C.claims || {}).forEach(function (k) { if (!C.claims[k].draft) routes.push({ page: 'claim:' + k, outDir: outDirFor('claim:' + k) }); });
  Object.keys(C.practices || {}).forEach(function (k) { if (!C.practices[k].draft) routes.push({ page: 'practice:' + k, outDir: outDirFor('practice:' + k) }); });
  Object.keys(C.process || {}).forEach(function (k) { if (!C.process[k].draft) routes.push({ page: 'process:' + k, outDir: outDirFor('process:' + k) }); });
  Object.keys(C.locations || {}).forEach(function (k) { if (!C.locations[k].draft) routes.push({ page: 'location:' + k, outDir: outDirFor('location:' + k) }); });
  (C.attorneys || []).forEach(function (a) { if (!a.draft) routes.push({ page: 'bio:' + a.slug, outDir: outDirFor('bio:' + a.slug) }); });
  ((C.blog && C.blog.posts) || []).forEach(function (p) { if (!p.draft) routes.push({ page: 'post:' + p.slug, outDir: outDirFor('post:' + p.slug) }); });
  return routes;
}

module.exports = { BASE_PATH: BASE_PATH, SITE_URL: SITE_URL, KIND_DIRS: KIND_DIRS, FLAT_PAGE_DIRS: FLAT_PAGE_DIRS, LEGACY_FLAT_DIRS: LEGACY_FLAT_DIRS, href: href, enumerateRoutes: enumerateRoutes };
