/* ============================================================
   Route table + link generation for the static build.
   Single source of truth for how a `page` value (the same
   'home' / 'claim:roof' shaped strings the old SPA used as
   #/ hash routes) maps to an output directory and a real URL.
   ============================================================ */
'use strict';

// Served from the root of the custom domain (propertyinsurance.law via
// GitHub Pages + docs/CNAME), so the path prefix is just '/', not a project subpath.
var BASE_PATH = process.env.BASE_PATH != null ? process.env.BASE_PATH : '/';
var SITE_URL = process.env.SITE_URL != null ? process.env.SITE_URL : 'https://propertyinsurance.law';

// kind:slug -> output dir prefix
var KIND_DIRS = { claim: 'claims', practice: 'practice', process: 'process', location: 'locations', bio: 'attorneys', post: 'blog' };

// flat page -> output dir (relative to docs/); 'home' is handled separately (outputs to docs/index.html)
var FLAT_PAGE_DIRS = {
  home: '',
  'claims-hub': 'claims-hub',
  'practice-hub': 'practice-hub',
  about: 'about',
  attorneys: 'attorneys',
  staff: 'staff',
  faq: 'faq',
  blog: 'blog',
  policies: 'policies',
  contact: 'contact'
};

function href(p) {
  if (p === 'home') return BASE_PATH;
  var parts = p.indexOf(':') >= 0 ? p.split(':') : [p, null];
  var kind = parts[0], slug = parts[1];
  var dir = KIND_DIRS[kind];
  if (dir && slug) return BASE_PATH + dir + '/' + slug + '/';
  var flatDir = Object.prototype.hasOwnProperty.call(FLAT_PAGE_DIRS, p) ? FLAT_PAGE_DIRS[p] : p;
  return BASE_PATH + flatDir + '/';
}

// Enumerates every route straight off content.js's own keys, so adding
// a new claim/practice/process/location/attorney later needs no build-script edits.
function enumerateRoutes(C) {
  var routes = [];
  Object.keys(FLAT_PAGE_DIRS).forEach(function (p) {
    routes.push({ page: p, outDir: FLAT_PAGE_DIRS[p] });
  });
  Object.keys(C.claims || {}).forEach(function (k) { routes.push({ page: 'claim:' + k, outDir: 'claims/' + k }); });
  Object.keys(C.practices || {}).forEach(function (k) { routes.push({ page: 'practice:' + k, outDir: 'practice/' + k }); });
  Object.keys(C.process || {}).forEach(function (k) { routes.push({ page: 'process:' + k, outDir: 'process/' + k }); });
  Object.keys(C.locations || {}).forEach(function (k) { routes.push({ page: 'location:' + k, outDir: 'locations/' + k }); });
  (C.attorneys || []).forEach(function (a) { routes.push({ page: 'bio:' + a.slug, outDir: 'attorneys/' + a.slug }); });
  ((C.blog && C.blog.posts) || []).forEach(function (p) { routes.push({ page: 'post:' + p.slug, outDir: 'blog/' + p.slug }); });
  return routes;
}

module.exports = { BASE_PATH: BASE_PATH, SITE_URL: SITE_URL, KIND_DIRS: KIND_DIRS, FLAT_PAGE_DIRS: FLAT_PAGE_DIRS, href: href, enumerateRoutes: enumerateRoutes };
