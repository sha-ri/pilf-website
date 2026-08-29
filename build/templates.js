/* ============================================================
   propertyinsurance.law — static site templates
   Node-portable port of app.js's pure (pre-render()) half.
   Content comes from content.js (PIL_CONTENT), icons from
   icons.js (ICON). Routing/link generation is injected via
   `opts` so build.js can choose a BASE_PATH at build time.
   ============================================================ */
module.exports = function (PIL_CONTENT, ICON, opts) {
  'use strict';
  opts = opts || {};
  var basePath = opts.basePath || '';
  var href = opts.href || function (p) { return '/' + p; };
  var siteUrl = opts.siteUrl || '';
  var absUrl = function (p) { return siteUrl + href(p); };

  var PHONE = '(407) 502-8068';
  var TEL = 'tel:14075028068';

  // Intake template used on every general/free-consultation mailto: to info@.
  var CONSULT_SUBJECT = 'Request for Initial Consultation';
  var CONSULT_BODY = 'We look forward to learning more about your matter and how we may be able to assist.\r\n\r\n' +
    'Please provide the following information to the best of your ability. If you do not know an answer, simply leave it blank.\r\n\r\n' +
    'Name: \r\n\r\nPhone Number: \r\n\r\nEmail Address: \r\n\r\nAddress: \r\n\r\nType of Matter: \r\n\r\nDate of Incident, Loss, or Dispute: \r\n\r\n' +
    'Location of Incident, Loss, or Dispute: \r\n\r\nBrief Description of What Happened: \r\n\r\nAdditional Information You Would Like Us to Know: \r\n\r\n' +
    'Thank you for contacting propertyinsurance.law. A member of our team will respond within one business day.\r\n\r\n' +
    'Please note that contacting our firm, submitting this information, or communicating with our office does not create an attorney-client relationship. An attorney-client relationship is established only after a representation agreement has been fully executed by both you and the firm.\r\n\r\n' +
    'Thank you for reaching out. We look forward to speaking with you soon.';
  var CONSULT_MAILTO = 'mailto:info@propertyinsurance.law?subject=' + encodeURIComponent(CONSULT_SUBJECT) + '&body=' + encodeURIComponent(CONSULT_BODY);

  // Conceptual paths used in blog-post SEO notes -> real site routes.
  var SEO_LINK_MAP = {
    '/water-damage-insurance-claims': 'claim:water',
    '/denied-homeowners-insurance-claims': 'claim:denied',
    '/underpaid-insurance-claims': 'claim:underpaid',
    '/delayed-insurance-claims-florida': 'claim:delayed',
    '/hurricane-property-damage-lawyer': 'claim:hurricane',
    '/wind-and-hail-damage-insurance-claims': 'claim:wind-hail',
    '/commercial-property-insurance-claims': 'claim:commercial'
  };

  // -------- available extracted photos --------
  var IMAGES = {
    'pil-hero': 'assets/pil-about.png', 'pil-why': 'assets/pil-why.jpg', 'pil-about': 'assets/pil-about.png',
    'pil-att-isabel-freeman': 'assets/pil-bio-isabel-freeman.png', 'pil-bio-isabel-freeman': 'assets/pil-bio-isabel-freeman.png',
    'pil-att-stefan-jose-garcia': 'assets/pil-bio-stefan-jose-garcia.png', 'pil-bio-stefan-jose-garcia': 'assets/pil-bio-stefan-jose-garcia.png',
    'pil-staff-HP': 'assets/pil-staff-hilda-pinto.png', 'pil-staff-JC': 'assets/pil-staff-julian-calvo.png',
    'pil-staff-EG': 'assets/pil-staff-erik-granillo.png', 'pil-staff-MM': 'assets/pil-staff-mary-mahairas.png',
    florida: 'assets/florida.png', illinois: 'assets/illinois.png'
  };
  var BIO_AVAIL = { 'shari-freeman': 1, 'zaf-goss': 1, 'james-wilson': 1, 'alex-couture': 1 };
  var BLOG_IMAGE_AVAIL = { 'can-insurance-company-drop-me-after-claim-florida': 'png', 'can-my-insurance-company-replace-only-half-my-roof-in-florida': 'png', 'common-reasons-florida-hurricane-claims-denied': 'png', 'contractor-estimate-higher-than-insurance-florida': 'png', 'do-i-have-to-use-insurance-preferred-contractor-florida': 'png', 'examination-under-oath-florida-property-claim': 'png', 'flood-insurance-claims-in-florida-what-every-homeowner-needs-to-know': 'jpg', 'florida-homeowners-insurance-faqs': 'png', 'florida-insurance-claim-underpaid': 'png', 'florida-roof-matching-law-shingles': 'png', 'how-florida-insurance-companies-calculate-roof-depreciation': 'png', 'how-hurricane-deductibles-work-florida': 'png', 'how-insurance-companies-evaluate-roof-storm-damage-florida': 'png', 'how-long-florida-property-insurance-lawsuit': 'png', 'how-much-should-my-florida-roof-claim-really-pay': 'png', 'insurance-company-denied-my-roof-claim-in-florida-now-what': 'png', 'interior-water-damage-after-storm-florida': 'png', 'is-it-worth-hiring-attorney-florida-insurance-claim': 'png', 'late-notice-denial-florida-insurance-claim': 'png', 'ordinance-and-law-coverage-florida-property-insurance': 'png', 'pre-existing-damage-denial-florida': 'png', 'rcv-vs-acv': 'png', 'recorded-statement-florida-insurance-claim': 'png', 'recoverable-depreciation-florida-property-claim': 'png', 'reopen-closed-florida-insurance-claim': 'png', 'repairs-fail-after-insurance-claim-florida': 'png', 'second-roof-claim-florida': 'png', 'wear-and-tear-roof-claim-denial-florida': 'png', 'what-to-do-after-hurricane-damage-florida': 'png', 'why-is-my-florida-insurance-claim-taking-too-long': 'png', 'wind-vs-flood-damage-florida-claim': 'png' };

  // ---------------- helpers ----------------
  function I(name, size, sw) { return ICON(name, size, sw); }
  function escAttr(s) { return String(s == null ? '' : s).replace(/"/g, '&quot;'); }

  function imgUrl(id) {
    if (IMAGES[id]) return basePath + IMAGES[id];
    var m = id.match(/^pil-(?:att|bio)-(.+)$/);
    if (m && BIO_AVAIL[m[1]]) return basePath + 'assets/pil-bio-' + m[1] + '.webp';
    var mb = id.match(/^pil-blog-(.+)$/);
    if (mb && BLOG_IMAGE_AVAIL[mb[1]]) return basePath + 'assets/blog/' + mb[1] + '.' + BLOG_IMAGE_AVAIL[mb[1]];
    return null;
  }

  var PH_ICON = '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>';

  // imageSlot(id, {style, position, ph, mono:{initials,size}})
  function imageSlot(id, o) {
    o = o || {};
    var style = o.style || '';
    var url = imgUrl(id);
    if (url) {
      return '<div class="pil-imgslot" style="' + style + '"><img src="' + url + '" alt="' + escAttr(o.ph || '') +
        '" style="object-fit:' + (o.fit || 'cover') + ';object-position:' + (o.position || '50% 50%') + '"></div>';
    }
    if (o.mono) {
      return '<div class="pil-imgslot" style="' + style + '"><div class="pil-monogram" style="font-size:' +
        (o.mono.size || '3rem') + '">' + o.mono.initials + '</div></div>';
    }
    return '<div class="pil-imgslot pil-imgslot--ph" style="' + style + '"><span class="pil-imgslot__cap">' +
      PH_ICON + '<span>' + (o.ph || '') + '</span></span></div>';
  }

  // Logo (DS recreation)
  var EMBLEM_H = { sm: 26, md: 34, lg: 48 };
  function logo(size, o) {
    o = o || {};
    var h = EMBLEM_H[size] || EMBLEM_H.md;
    var w = Math.round(h * 250 / 281);
    var light = o.ondark || o.onbrand;
    var chevron = light ? '#ffffff' : '#1e1920';
    var accent = o.onbrand ? '#ffffff' : '#5270fd';
    var cls = ['pil-logo', 'pil-logo--' + size, o.ondark ? 'pil-logo--ondark' : '', o.onbrand ? 'pil-logo--onbrand' : ''].filter(Boolean).join(' ');
    var emblem = '<svg class="pil-logo__emblem" width="' + w + '" height="' + h + '" viewBox="63 57 250 281" fill="none" aria-hidden="true">' +
      '<path fill="' + chevron + '" d="M 187.5 58.5 L 189 59.25 L 220.5 90.75 L 220.5 91.5 L 222 92.25 L 224.625 95.25 L 312.375 183 L 312.375 240 L 312 241.5 L 310.5 240.75 L 305.25 235.5 L 305.25 234.75 L 303.75 234 L 295.5 225.75 L 293.625 223.5 L 290.625 220.875 L 287.625 217.875 L 285 214.875 L 282 212.25 L 280.125 210.375 L 275.625 205.5 L 188.25 118.125 L 186.75 118.875 L 74.25 231.375 L 71.625 234.375 L 70.875 234.375 L 70.5 235.5 L 67.5 238.125 L 64.875 240.75 L 64.125 241.875 L 63.375 241.875 L 63.375 183 L 82.125 164.25 L 84.75 161.25 L 87.375 158.625 L 88.125 158.625 L 88.875 157.125 Z"/>' +
      '<path fill="' + accent + '" d="M 187.875 154.5 L 189.375 155.25 L 293.25 259.125 L 293.25 259.875 L 294 259.875 L 294 260.625 L 294.75 260.625 L 294.75 261.375 L 295.875 261.75 L 298.125 264.375 L 299.25 265.125 L 299.25 265.875 L 300.375 266.25 L 303 269.25 L 312.375 278.625 L 312.375 337.125 L 310.875 336.375 L 187.875 213.375 Z"/></svg>';
    var text = '<span class="pil-logo__text"><span class="pil-logo__word">propertyinsurance<span class="tld">.law</span></span>' +
      (o.tagline ? '<span class="pil-logo__tag">Your Property Damage Attorneys</span>' : '') + '</span>';
    return '<span class="' + cls + '">' + emblem + text + '</span>';
  }

  // Button (DS recreation). opts: {variant,size,block,label,href,action,leftIconName}
  function btn(o) {
    var cls = ['pil-btn', 'pil-btn--' + (o.variant || 'primary'), 'pil-btn--' + (o.size || 'md'), o.block ? 'pil-btn--block' : ''].filter(Boolean).join(' ');
    var inner = (o.leftIconName ? '<span class="pil-btn__icon">' + I(o.leftIconName, o.iconSize || 18) + '</span>' : '') + '<span>' + o.label + '</span>';
    if (o.href) return '<a href="' + o.href + '" class="' + cls + '">' + inner + '</a>';
    return '<button type="button" class="' + cls + '" data-action="' + (o.action || '') + '">' + inner + '</button>';
  }

  function callBtn(size, block) {
    var cls = 'pil-btn pil-btn--secondary pil-btn--' + (size || 'md') + (block ? ' pil-btn--block' : '');
    return '<a href="' + TEL + '" class="' + cls + '"><span style="display:flex">' + I('phone', 17) + '</span><span>Call ' + PHONE + '</span></a>';
  }

  function badge(variant, label) { return '<span class="pil-badge pil-badge--' + variant + '">' + label + '</span>'; }

  function statBlock(s) {
    var attrs = 'data-statroll="1"' +
      (s.end != null ? ' data-end="' + s.end + '"' : '') +
      (s.start != null ? ' data-start="' + s.start + '"' : '') +
      (s.prefix ? ' data-prefix="' + escAttr(s.prefix) + '"' : '') +
      (s.suffix ? ' data-suffix="' + escAttr(s.suffix) + '"' : '') +
      (s.comma ? ' data-comma="1"' : '');
    var initial = s.end != null ? formatStat(s.end, s) : s.value;
    return '<div class="pil-stat pil-stat--ondark pil-stat--center">' +
      '<span class="pil-stat__value" ' + attrs + '>' + initial + '</span>' +
      '<span class="pil-stat__label">' + s.label + '</span></div>';
  }

  function formatStat(n, s) {
    n = Math.round(n);
    var txt = s.comma ? n.toLocaleString('en-US') : String(n);
    return (s.prefix || '') + txt + (s.suffix || '');
  }

  function checkList(items) {
    var mark = '<span class="pil-checklist__mark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>';
    return '<ul class="pil-checklist pil-checklist--default">' +
      items.map(function (it) { return '<li>' + mark + '<span>' + it + '</span></li>'; }).join('') + '</ul>';
  }

  function eyebrow(txt) {
    return '<span style="display:inline-flex;align-items:center;gap:9px;font-family:var(--font-sans);font-size:13px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--color-primary)">' + txt + '</span>';
  }
  function eyebrowPlain(txt) {
    return '<span style="font-family:var(--font-sans);font-size:13px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--color-primary)">' + txt + '</span>';
  }

  // ---------------- view model (port of renderVals) ----------------
  function buildVM(state) {
    var C = PIL_CONTENT || {};
    var claims = C.claims || {}, practices = C.practices || {}, process = C.process || {}, locations = C.locations || {};
    var attorneys = C.attorneys || [];
    var page = state.page;

    var parts = page.indexOf(':') >= 0 ? page.split(':') : [page, null];
    var kind = parts[0], slug = parts[1];
    var article = null;
    if (kind === 'claim') article = claims[slug];
    else if (kind === 'practice') article = practices[slug];
    else if (kind === 'process') article = process[slug];
    else if (kind === 'location') article = locations[slug];

    var vm = {
      C: C, claims: claims, practices: practices, locations: locations, attorneys: attorneys,
      page: page, kind: kind, slug: slug,
      isArticle: !!article, article: article,
      isHome: page === 'home', isClaimsHub: page === 'claims-hub', isPracticeHub: page === 'practice-hub',
      isAbout: page === 'about', isAttorneys: page === 'attorneys', isStaff: page === 'staff',
      isFaq: page === 'faq', isBlog: page === 'blog',
      isPolicies: page === 'policies', isContact: page === 'contact', isBioPage: kind === 'bio'
    };

    // article view
    if (article) {
      vm.av = {
        eyebrow: article.eyebrow, h1: article.h1, tagline: article.tagline, intro: article.intro || [],
        sections: (article.sections || []).map(function (s) {
          return { heading: s.heading, isNamed: s.type === 'named', isPara: s.type === 'para', named: s.type === 'named' ? s.body : [], paras: s.type === 'para' ? s.body : [] };
        }),
        steps: (article.steps || []).map(function (t, i) { return { n: i + 1, text: t }; }),
        hasSteps: !!(article.steps && article.steps.length),
        stepsHeading: article.stepsHeading || 'What To Do Right Now',
        ctaTitle: article.ctaTitle || 'Send us the letter.',
        ctaBody: article.ctaBody || 'A free review by an attorney, and a plain answer on where your claim stands.',
        disclaimer: article.disclaimer || 'Property insurance laws vary by state. We represent policyholders throughout Florida and Illinois. During your consultation, we’ll explain the rules and deadlines that may apply to your claim.',
        faqs: article.faqs || [], hasFaqs: !!(article.faqs && article.faqs.length),
        related: (article.related || []).map(function (r) { return { label: r.label, page: r.page }; }),
        hasRelated: !!(article.related && article.related.length)
      };
    }

    // bio view
    if (kind === 'bio') {
      var a = attorneys.filter(function (x) { return x.slug === slug; })[0];
      if (a) {
        var posts = (C.blog && C.blog.posts) || [];
        var arts = posts.filter(function (p) { return p.author === a.name; });
        vm.bio = Object.assign({}, a, { first: a.name.split(' ')[0].replace('.', '') || a.name, articles: arts, hasArticles: arts.length > 0 });
      }
    }
    vm.isBio = kind === 'bio' && !!vm.bio;

    // nav groups
    function navItems(obj, kd) { return Object.keys(obj).map(function (k) { return { label: obj[k].nav, icon: obj[k].icon, page: kd + ':' + k }; }); }
    vm.navGroups = [
      { label: 'Home', hasChildren: false, page: 'home' },
      { label: 'Property Claims', hasChildren: true, page: 'claims-hub', items: navItems(claims, 'claim'), panelWidth: '640px', panelCols: 'repeat(2, minmax(0,1fr))' },
      { label: 'Other Practice Areas', hasChildren: true, page: 'practice-hub', items: navItems(practices, 'practice'), panelWidth: '300px', panelCols: 'repeat(1, minmax(0,1fr))' },
      { label: 'About Us', hasChildren: true, page: 'about', items: [
        { label: 'About the Firm', icon: 'shield-check', page: 'about' },
        { label: 'Our Attorneys', icon: 'scale', page: 'attorneys' },
        { label: 'Our Staff', icon: 'users', page: 'staff' }
      ], panelWidth: '260px', panelCols: 'repeat(1, minmax(0,1fr))' },
      { label: 'Our Locations', hasChildren: true, page: 'location:winter-park', items: navItems(locations, 'location'), panelWidth: '240px', panelCols: 'repeat(1, minmax(0,1fr))' },
      { label: 'Resources', hasChildren: true, page: 'faq', items: [
        { label: 'FAQ', icon: 'file-text', page: 'faq' },
        { label: 'Blog', icon: 'quote', page: 'blog' },
        { label: 'Law Firm Policies', icon: 'scale', page: 'policies' }
      ], panelWidth: '260px', panelCols: 'repeat(1, minmax(0,1fr))' }
    ];

    // home data
    var order = ['delayed', 'denied', 'underpaid'].concat(C.damageOrder || []);
    vm.damageTiles = order.filter(function (k) { return claims[k]; }).map(function (k) { return { label: claims[k].nav, icon: claims[k].icon, page: 'claim:' + k }; })
      .concat([{ label: 'Construction Defect', icon: 'hammer', page: 'practice:construction-defect' }]);
    vm.problems = (C.problems || []).map(function (p) {
      var sl = p.key.indexOf(':') >= 0 ? p.key.split(':')[1] : p.key;
      return { kicker: p.kicker, desc: p.desc, cta: p.cta, icon: (claims[sl] || {}).icon || 'shield-check', page: p.key };
    });
    vm.practiceTiles = Object.keys(practices).map(function (k) { return { label: practices[k].nav, icon: practices[k].icon, tagline: practices[k].tagline, page: 'practice:' + k }; });
    vm.attorneyCards = attorneys.map(function (a) { return { slug: a.slug, name: a.name, role: a.role, positioning: a.positioning, initials: a.initials, imgPosition: a.imgPosition }; });

    var allPosts = (C.blog && C.blog.posts) || [];
    var postBySlug = {}; allPosts.forEach(function (p) { postBySlug[p.slug] = p; });
    var attorneyByName = {}; attorneys.forEach(function (a) { attorneyByName[a.name] = a; });

    function fmtPostDate(iso) {
      if (!iso) return '';
      var parts = iso.split('-'); var d = new Date(Date.UTC(+parts[0], +parts[1] - 1, +parts[2]));
      return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
    }
    function readTimeFor(post) {
      var words = (post.body || []).reduce(function (n, b) { return n + String(b.text || '').split(/\s+/).length; }, 0);
      return Math.max(1, Math.round(words / 200)) + ' min read';
    }
    function resolveLink(raw) {
      if (SEO_LINK_MAP[raw]) return SEO_LINK_MAP[raw];
      if (raw.indexOf('/post/') === 0) {
        var slug = raw.slice('/post/'.length);
        return postBySlug[slug] ? 'post:' + slug : null;
      }
      return null;
    }
    function labelForPage(pg) {
      var parts = pg.split(':'); var kd = parts[0], sl = parts[1];
      if (kd === 'claim') return claims[sl] ? claims[sl].nav : sl;
      if (kd === 'post') return postBySlug[sl] ? postBySlug[sl].title : sl;
      return pg;
    }
    function enrichPost(p) {
      var author = attorneyByName[p.author];
      var related = (p.links || []).map(resolveLink).filter(Boolean)
        .filter(function (pg, i, arr) { return arr.indexOf(pg) === i; })
        .map(function (pg) { return { title: labelForPage(pg), page: pg }; });
      return Object.assign({}, p, {
        dateDisplay: fmtPostDate(p.date), readTime: readTimeFor(p), dek: p.metaDescription,
        authorSlug: author ? author.slug : null, authorRole: author ? author.role : '', authorInitials: author ? author.initials : (p.author || '').split(' ').map(function (w) { return w[0]; }).join(''),
        blocks: (p.body || []).map(function (b) { return { isHeading: b.type === 'heading', text: b.text }; }),
        related: related
      });
    }

    var sortedPosts = allPosts.slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; });
    var blog = C.blog ? Object.assign({}, C.blog, { posts: sortedPosts.map(enrichPost) }) : { posts: [] };
    vm.blogData = blog;

    if (kind === 'post' && postBySlug[slug]) {
      vm.post = enrichPost(postBySlug[slug]);
    }
    vm.isPost = kind === 'post' && !!vm.post;

    // testimonials (seeded shuffle — fixed seed at build time, no client-side reshuffle)
    var testimonials = C.testimonials || [];
    var tKey = state.tShuffleKey || 0;
    var tOrder = (function (n, seed) {
      var arr = []; for (var i = 0; i < n; i++) arr.push(i);
      var s = (seed >>> 0) || 1;
      for (var k = n - 1; k > 0; k--) { s = (s * 1664525 + 1013904223) >>> 0; var j = s % (k + 1); var t = arr[k]; arr[k] = arr[j]; arr[j] = t; }
      return arr;
    })(testimonials.length, tKey + 1);
    vm.homeTestimonials = tOrder.slice(0, 3).map(function (idx) { return testimonials[idx]; });

    // hero "recent recovery" boxes (seeded pick of 2 from the pool of 10)
    var caseResults = C.caseResults || [];
    var wKey = state.winShuffleKey || 0;
    var wOrder = (function (n, seed) {
      var arr = []; for (var i = 0; i < n; i++) arr.push(i);
      var s = (seed >>> 0) || 1;
      for (var k = n - 1; k > 0; k--) { s = (s * 1664525 + 1013904223) >>> 0; var j = s % (k + 1); var t = arr[k]; arr[k] = arr[j]; arr[j] = t; }
      return arr;
    })(caseResults.length, wKey + 1);
    vm.heroWins = wOrder.slice(0, 2).map(function (idx) { return caseResults[idx]; });

    // footer
    var footerClaimKeys = ['denied', 'underpaid', 'delayed', 'hurricane', 'roof', 'water', 'fire', 'wind-hail', 'commercial'];
    vm.footerClaims = footerClaimKeys.filter(function (k) { return claims[k]; }).map(function (k) { return { label: claims[k].nav, page: 'claim:' + k }; });
    vm.footerFirm = [
      { label: 'About the Firm', page: 'about' }, { label: 'Our Attorneys', page: 'attorneys' }, { label: 'Our Staff', page: 'staff' },
      { label: 'FAQ', page: 'faq' }, { label: 'Blog', page: 'blog' }, { label: 'Law Firm Policies', page: 'policies' }, { label: 'Contact', page: 'contact' }
    ];

    vm.whyPoints = [
      'We examine how the carrier evaluated your claim and identify what may have been missed.',
      'We turn technical reports and damage findings into clear evidence.',
      'Then we handle the claim from start to finish, with straightforward answers along the way.'
    ];
    vm.stats = C.stats || [];
    vm.staff = C.staff || [];
    vm.faqData = C.faq || { groups: [] };
    vm.policiesData = C.policies || { sections: [] };
    vm.aboutValues = [
      { icon: 'shield-check', title: 'Directly', desc: 'You work with attorneys and a dedicated team who know your case. Our litigation, presuit, intake, and accounting staff help keep files organized, deadlines on track, and clients informed throughout the process.' },
      { icon: 'scale', title: 'Technically', desc: 'Property claims often depend on more than legal arguments. We review estimates, inspection reports, engineering opinions, photographs, repair scopes, and the policy itself.' },
      { icon: 'file-text', title: 'Transparently', desc: 'We explain the representation, fee arrangement, and what to expect before you sign anything. In property insurance matters, there are no attorney’s fees unless we recover for you.' },
      { icon: 'quote', title: 'In Two Languages', desc: 'Se habla español. Clients who prefer to communicate in Spanish can work directly with members of our bilingual team throughout their case.' }
    ];
    vm.trustRow = [
      { icon: 'star', label: '5.0 on Google from our clients' },
      { icon: 'shield-check', label: 'Se habla español' }
    ];
    vm.offices = C.offices || [];
    vm.showClosingCta = !vm.isContact;
    return vm;
  }

  // ---------------- chrome ----------------
  function header(vm) {
    var nav = vm.navGroups.map(function (g) {
      var chev = g.hasChildren ? '<span style="display:flex;opacity:0.55">' + I('chevron-right', 13, 2.5) + '</span>' : '';
      var panel = '';
      if (g.hasChildren && g.items && g.items.length) {
        var items = g.items.map(function (it) {
          return '<a href="' + href(it.page) + '" class="pil-panitem" style="display:flex;align-items:center;gap:10px;padding:9px 11px;border-radius:10px;font-family:var(--font-sans);font-size:14px;font-weight:500;color:var(--color-body);text-decoration:none">' +
            '<span style="display:flex;color:var(--color-primary);flex:none">' + I(it.icon, 17) + '</span>' + it.label + '</a>';
        }).join('');
        panel = '<div class="pil-navpanel" style="position:absolute;top:calc(100% + 8px);left:50%;transform-origin:top;margin-left:-160px;background:#fff;border:1px solid var(--color-hairline);border-radius:16px;box-shadow:var(--shadow-lg);padding:12px;z-index:70;width:' + g.panelWidth + '">' +
          '<div style="display:grid;grid-template-columns:' + g.panelCols + ';gap:2px">' + items + '</div></div>';
      }
      return '<div class="pil-navgroup" style="position:relative">' +
        '<a href="' + href(g.page) + '" class="pil-navlink" style="display:inline-flex;align-items:center;gap:4px;font-family:var(--font-sans);font-size:14px;font-weight:600;color:var(--color-ink);text-decoration:none;padding:8px 9px;border-radius:10px;white-space:nowrap">' + g.label + chev + '</a>' +
        panel + '</div>';
    }).join('');

    return '<header style="position:sticky;top:0;z-index:60;background:rgba(255,255,255,0.9);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom:1px solid var(--color-hairline-soft)">' +
      '<div style="max-width:1240px;margin:0 auto;padding:12px 20px;display:flex;align-items:center;justify-content:space-between;gap:12px">' +
      '<a href="' + href('home') + '" style="display:flex;align-items:center;text-decoration:none;flex:none">' + logo('sm') + '</a>' +
      '<nav class="pil-desknav" style="display:flex;align-items:center;gap:2px;flex:1;justify-content:center">' + nav + '</nav>' +
      '<div style="display:flex;align-items:center;gap:10px;flex:none">' +
      '<a href="' + TEL + '" class="pil-headcta" style="display:flex;align-items:center;gap:7px;font-family:var(--font-mono);font-size:13.5px;font-weight:500;color:var(--color-ink);text-decoration:none;white-space:nowrap"><span style="display:flex;color:var(--color-primary)">' + I('phone', 16) + '</span>' + PHONE + '</a>' +
      '<div class="pil-headcta" style="display:flex;align-items:center;gap:9px">' + btn({ variant: 'accent', size: 'sm', href: href('contact'), label: 'Retain Our Firm' }) + '</div>' +
      '<button class="pil-hamb" data-action="toggleMobile" aria-label="Menu" style="align-items:center;justify-content:center;width:42px;height:42px;border:1px solid var(--color-hairline);background:#fff;border-radius:11px;cursor:pointer;color:var(--color-ink)">' + I('menu', 22) + '</button>' +
      '</div></div></header>';
  }

  function mobileMenu(vm) {
    var groups = vm.navGroups.map(function (g) {
      var sub = '';
      if (g.hasChildren && g.items && g.items.length) {
        sub = '<div style="display:flex;flex-direction:column;gap:1px;padding:4px 0 10px">' +
          g.items.map(function (it) {
            return '<a href="' + href(it.page) + '" style="display:flex;align-items:center;gap:9px;padding:8px 10px;font-family:var(--font-sans);font-size:14.5px;font-weight:500;color:var(--color-body);text-decoration:none"><span style="display:flex;color:var(--color-primary)">' + I(it.icon, 16) + '</span>' + it.label + '</a>';
          }).join('') + '</div>';
      }
      return '<a href="' + href(g.page) + '" style="padding:11px 8px;font-family:var(--font-sans);font-size:16px;font-weight:700;color:var(--color-ink);text-decoration:none;border-bottom:1px solid var(--color-hairline-soft)">' + g.label + '</a>' + sub;
    }).join('');

    // hidden by default (display:none) — client.js toggles this on data-action="toggleMobile"/"closeMobile" clicks
    return '<div class="pil-mobnav" data-action="closeMobile" style="position:fixed;inset:0;z-index:80;background:rgba(21,18,26,0.5);display:none">' +
      '<div data-action="stop" style="position:absolute;top:0;right:0;bottom:0;width:min(380px,86vw);background:#fff;box-shadow:var(--shadow-xl);overflow-y:auto;padding:20px 20px 120px">' +
      '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">' + logo('sm') +
      '<button data-action="closeMobile" aria-label="Close" style="width:40px;height:40px;border:1px solid var(--color-hairline);background:#fff;border-radius:10px;cursor:pointer;font-size:20px;color:var(--color-ink)">×</button></div>' +
      '<div style="display:flex;flex-direction:column;gap:4px">' + groups + '</div>' +
      '<div style="display:flex;flex-direction:column;gap:10px;margin-top:20px">' +
      btn({ variant: 'accent', block: true, href: href('contact'), label: 'Retain Our Firm Now' }) + callBtn('md', true) +
      '</div></div></div>';
  }

  function closingCta() {
    return '<section style="background:var(--color-ink)"><div style="max-width:1240px;margin:0 auto;padding:clamp(48px,6vw,76px) 24px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:32px">' +
      '<div style="max-width:640px"><h2 style="font-family:var(--font-display);font-weight:600;font-size:clamp(26px,3.6vw,40px);line-height:1.15;letter-spacing:-0.02em;color:#fff;margin:0">Your policy is a promise. We make carriers keep it.</h2>' +
      '<p style="font-family:var(--font-sans);font-size:18px;line-height:1.6;color:rgba(255,255,255,0.72);margin:14px 0 0">Send us the denial letter, the estimate, or just the story so far. A <b>propertyinsurance<span style="color:var(--color-primary)">.law</span></b> attorney will review your claim for free and tell you plainly where it stands. No fees or costs unless we recover for you.</p>' +
      '<p style="font-family:var(--font-sans);font-size:12.5px;color:rgba(255,255,255,0.45);margin:16px 0 0">Attorney advertising. Prior results do not guarantee a similar outcome.</p></div>' +
      '<div style="display:flex;flex-direction:column;align-items:stretch;gap:12px;min-width:240px">' +
      btn({ variant: 'accent', size: 'lg', block: true, href: href('contact'), label: 'Retain Our Firm Now' }) + callBtn('lg', true) +
      '</div></div></section>';
  }

  function footer(vm) {
    function col(title, links) {
      return '<div><div style="font-family:var(--font-sans);font-size:13px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#fff;margin-bottom:16px">' + title + '</div><div style="display:flex;flex-direction:column;gap:10px">' +
        links.map(function (it) { return '<a href="' + href(it.page) + '" class="pil-navsimple" style="font-family:var(--font-sans);font-size:14.5px;color:rgba(255,255,255,0.7);text-decoration:none">' + it.label + '</a>'; }).join('') + '</div></div>';
    }
    return '<footer style="background:var(--color-ink);color:rgba(255,255,255,0.7)">' +
      '<div style="max-width:1240px;margin:0 auto;padding:clamp(44px,5vw,64px) 24px 32px;display:grid;grid-template-columns:1.5fr 1fr 1fr 1.2fr;gap:40px">' +
      '<div>' + logo('md', { ondark: true, tagline: true }) +
      '<p style="font-family:var(--font-sans);font-size:15px;line-height:1.6;color:rgba(255,255,255,0.6);margin:18px 0 0;max-width:320px">Attorneys for denied, delayed, and underpaid property insurance claims. Serving Florida and Illinois.</p>' +
      '<p style="font-family:var(--font-sans);font-size:14px;font-weight:600;color:rgba(255,255,255,0.8);margin:14px 0 0">Se habla español.</p></div>' +
      col('Property Claims', vm.footerClaims) + col('Firm', vm.footerFirm) +
      '<div><div style="font-family:var(--font-sans);font-size:13px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#fff;margin-bottom:16px">Contact</div>' +
      '<div style="display:flex;flex-direction:column;gap:12px;font-family:var(--font-sans);font-size:14.5px;color:rgba(255,255,255,0.7)">' +
      '<a href="' + TEL + '" style="display:flex;align-items:center;gap:9px;text-decoration:none;color:inherit">' + I('phone', 16) + PHONE + '</a>' +
      '<a href="' + CONSULT_MAILTO + '" style="display:flex;align-items:center;gap:9px;text-decoration:none;color:inherit">' + I('mail', 16) + 'info@<b>propertyinsurance<span style="color:var(--color-primary)">.law</span></b></a>' +
      '<div style="display:flex;align-items:flex-start;gap:9px"><span style="margin-top:2px;display:flex;flex:none">' + I('map-pin', 16) + '</span>' +
      '<div style="display:flex;flex-direction:column;gap:10px">' + (vm.offices || []).map(function (o) {
        return '<div><div style="font-weight:700;color:#fff;font-size:12.5px;letter-spacing:0.04em;text-transform:uppercase;margin-bottom:2px">' + o.state + ' Office</div>' + o.addressLines.join('<br>') + '</div>';
      }).join('') + '</div></div>' +
      '<div style="display:flex;align-items:center;gap:9px"><span style="display:flex">' + I('clock', 16) + '</span>Mon–Fri, 9:00 AM – 5:00 PM EST</div>' +
      '<div style="font-family:var(--font-sans);font-size:13.5px;color:rgba(255,255,255,0.55);margin-top:-6px;padding-left:25px">By Appointment Only</div>' +
      '</div></div></div>' +
      '<div style="max-width:1240px;margin:0 auto;padding:18px 24px 0;border-top:1px solid rgba(255,255,255,0.1)"><span style="font-family:var(--font-sans);font-size:12.5px;line-height:1.6;color:rgba(255,255,255,0.45)">© 2026 Property Insurance Law PLLC, d/b/a <b>propertyinsurance<span style="color:var(--color-primary)">.law</span></b>. All rights reserved. Attorney advertising. Prior results do not guarantee a similar outcome.</span></div>' +
      '</footer>';
  }

  function mobileCall() {
    return '<div class="pil-mobcall" style="position:fixed;left:0;right:0;bottom:0;z-index:55;background:#fff;border-top:1px solid var(--color-hairline);box-shadow:0 -6px 20px rgba(30,25,32,0.08);padding:10px 14px;gap:10px;align-items:center">' +
      '<a href="' + TEL + '" style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px;height:46px;border-radius:999px;background:var(--color-primary-soft);color:var(--color-primary-active);font-family:var(--font-sans);font-size:15px;font-weight:700;text-decoration:none">' + I('phone', 18) + 'Call</a>' +
      '<a href="' + href('contact') + '" style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px;height:46px;border-radius:999px;background:var(--color-accent);color:var(--color-on-accent);font-family:var(--font-sans);font-size:15px;font-weight:700;text-decoration:none">Retain Now</a></div>';
  }

  // ---------------- pages ----------------
  function pageHome(vm) {
    var trust = vm.trustRow.map(function (t) {
      return '<div style="display:flex;align-items:center;gap:8px;font-family:var(--font-sans);font-size:14.5px;font-weight:600;color:var(--color-body)"><span style="color:var(--color-primary);display:flex">' + I(t.icon, 18) + '</span>' + t.label + '</div>';
    }).join('');

    var winCard = function (tone, amt, cap, pos) {
      return '<div class="' + tone + '" style="position:absolute;z-index:3;' + pos + ';background:#fff;border:1px solid var(--color-hairline);border-radius:16px;box-shadow:var(--shadow-xl);padding:15px 20px;display:flex;align-items:center;gap:14px">' +
        '<div style="width:44px;height:44px;border-radius:12px;flex:none;background:var(--color-success-soft);color:var(--color-success);display:flex;align-items:center;justify-content:center">' + I('check', 23) + '</div>' +
        '<div><div style="font-family:var(--font-sans);font-size:10.5px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--color-success)">RECENT RECOVERY</div>' +
        '<div data-role="amt" style="font-family:var(--font-mono);font-size:23px;font-weight:600;color:var(--color-ink);line-height:1.15">' + amt + '</div>' +
        '<div data-role="cap" style="font-family:var(--font-sans);font-size:13px;color:var(--color-muted)">' + cap + '</div></div></div>';
    };

    var hero = '<section class="pil-hero" style="position:relative;overflow:hidden;background:radial-gradient(640px 480px at 6% 8%, rgba(255,204,82,0.13), transparent 55%), radial-gradient(520px 440px at 4% 100%, rgba(82,112,255,0.06), transparent 60%), #fff">' +
      '<div class="pil-hero-inner" style="position:relative;z-index:2;max-width:1240px;margin:0 auto;padding:clamp(48px,6vw,84px) 24px;min-height:min(84vh,680px);display:flex;align-items:center">' +
      '<div class="pil-hero-copy" style="max-width:512px">' + badge('accent', 'No Fee Unless We Win') +
      '<h1 style="font-family:var(--font-display);font-weight:600;font-size:clamp(44px,5.2vw,68px);line-height:1.02;letter-spacing:-0.025em;color:var(--color-ink);margin:22px 0 0">Your Property Damage Attorneys.</h1>' +
      '<p style="font-family:var(--font-sans);font-size:20px;line-height:1.6;color:var(--color-muted);margin:22px 0 0">At <b style="color:var(--color-body);font-weight:600">propertyinsurance<span style="color:var(--color-primary)">.law</span></b>, we stand up for policyholders when insurance companies <b>don’t</b>.&nbsp;</p>' +
      '<div style="display:flex;flex-direction:column;align-items:flex-start;gap:12px;margin-top:32px">' +
      '<a href="' + href('contact') + '" class="pil-btn pil-btn--accent pil-btn--lg">Retain Our Firm Now</a>' + callBtn('lg', false) + '</div>' +
      '<div style="display:flex;flex-wrap:wrap;gap:10px 22px;margin-top:28px;padding-top:26px;border-top:1px solid var(--color-hairline-soft)">' + trust + '</div>' +
      '</div></div>' +
      '<div class="pil-hero-media" style="position:absolute;top:0;right:0;bottom:0;width:53%;z-index:1">' +
      imageSlot('pil-hero', { style: 'position:absolute;inset:0;width:100%;height:100%', position: '50% 50%', fit: 'contain', ph: 'The attorneys' }) +
      '<div class="pil-hero-fade" style="position:absolute;inset:0;z-index:2;pointer-events:none;background:linear-gradient(to right, #fff 0%, rgba(255,255,255,0) 6%, rgba(255,255,255,0) 94%, #fff 100%)"></div>' +
      winCard('pil-hero-win', vm.heroWins[0].amt, vm.heroWins[0].cap, 'left:-30px;bottom:44px') +
      winCard('pil-hero-win2', vm.heroWins[1].amt, vm.heroWins[1].cap, 'right:24px;bottom:44px') +
      '</div></section>';

    var statsBand = '<section style="background:var(--color-primary)"><div style="max-width:1240px;margin:0 auto;padding:clamp(40px,5vw,60px) 24px;display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:32px">' +
      vm.stats.map(statBlock).join('') + '</div></section>';

    var problems = '<section style="background:var(--color-surface-soft);padding:clamp(32px,3.6vw,52px) 0"><div style="max-width:1240px;margin:0 auto;padding:0 24px">' +
      '<div style="max-width:640px;margin:0 auto clamp(36px,4vw,52px);text-align:center">' + eyebrow('Has the insurance company made a decision?') +
      '<h2 style="font-family:var(--font-display);font-weight:600;font-size:clamp(30px,4vw,42px);line-height:1.12;letter-spacing:-0.02em;color:var(--color-ink);margin:14px 0 0">Tell us what the insurance company said.</h2>' +
      '<p style="font-family:var(--font-sans);font-size:18px;line-height:1.6;color:var(--color-muted);margin:14px 0 0">If you’ve already put in a claim, let us know how the insurance company responded. Whether your claim was denied, underpaid, or delayed, we will examine how the carrier built its file, identify where the claim went wrong, and fight for a fair outcome.</p></div>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:22px">' +
      vm.problems.map(function (p) {
        return '<a href="' + href(p.page) + '" class="pil-lift" style="display:flex;flex-direction:column;background:#fff;border:1px solid var(--color-hairline);border-radius:18px;padding:32px 30px;box-shadow:var(--shadow-sm);text-decoration:none">' +
          '<div style="width:52px;height:52px;border-radius:14px;background:var(--color-primary-soft);color:var(--color-primary);display:flex;align-items:center;justify-content:center;margin-bottom:20px">' + I(p.icon, 26) + '</div>' +
          '<h3 style="font-family:var(--font-display);font-size:23px;font-weight:600;letter-spacing:-0.01em;color:var(--color-ink);margin:0 0 10px">' + p.kicker + '</h3>' +
          '<p style="font-family:var(--font-sans);font-size:15.5px;line-height:1.62;color:var(--color-muted);margin:0 0 22px;flex:1">' + p.desc + '</p>' +
          '<span style="display:inline-flex;align-items:center;gap:7px;font-family:var(--font-sans);font-size:14.5px;font-weight:700;color:var(--color-primary)">' + p.cta + I('arrow-right', 16) + '</span></a>';
      }).join('') + '</div>' +
      '<p style="font-family:var(--font-sans);font-size:16px;line-height:1.6;color:var(--color-muted);margin:26px 0 0;text-align:center">Haven’t put in a claim yet? <a href="' + href('contact') + '" style="color:var(--color-primary);font-weight:600;text-decoration:underline;text-underline-offset:3px">Give our office a call</a> and we can guide you through the process from first notice to final payment.</p>' +
      '</div></section>';

    var why = '<section style="padding:clamp(32px,3.6vw,52px) 0"><div class="pil-collapse" style="max-width:1180px;margin:0 auto;padding:0 24px;display:grid;grid-template-columns:0.92fr 1.08fr;gap:clamp(36px,5vw,64px);align-items:center">' +
      imageSlot('pil-why', { style: 'width:100%;height:clamp(360px,42vw,480px);border-radius:20px;box-shadow:var(--shadow-md)', position: '50% 42%', ph: 'Attorneys reviewing a claim' }) +
      '<div>' + eyebrow('Why policyholders hire us') +
      '<h2 style="font-family:var(--font-display);font-weight:600;font-size:clamp(30px,4vw,44px);line-height:1.1;letter-spacing:-0.02em;color:var(--color-ink);margin:14px 0 0">The carrier has a playbook. So do we.</h2>' +
      '<p style="font-family:var(--font-sans);font-size:18px;line-height:1.68;color:var(--color-muted);margin:18px 0 0">Strong property claims are built on careful attention to detail. We review the estimates, reports, photographs, and policy language to identify what may have been missed, overlooked, or applied incorrectly. From there, we build a clear, well-supported claim designed to give your loss the attention it deserves.</p>' +
      '<div style="margin-top:24px">' + checkList(vm.whyPoints) + '</div>' +
      '<a href="' + href('process:how-we-handle') + '" class="pil-arrowlink" style="display:inline-flex;align-items:center;gap:8px;margin-top:26px;font-family:var(--font-sans);font-size:15px;font-weight:700;color:var(--color-primary);text-decoration:none">How we handle your claim' + I('arrow-right', 17) + '</a>' +
      '</div></div></section>';

    var losses = '<section style="background:var(--color-surface-soft);padding:clamp(32px,3.6vw,52px) 0"><div style="max-width:1240px;margin:0 auto;padding:0 24px">' +
      '<div style="display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:20px;margin-bottom:clamp(28px,3vw,40px)">' +
      '<div style="max-width:620px">' + eyebrow('Every kind of property loss') +
      '<h2 style="font-family:var(--font-display);font-weight:600;font-size:clamp(30px,4vw,42px);line-height:1.12;letter-spacing:-0.02em;color:var(--color-ink);margin:14px 0 0">Start with your loss</h2></div>' +
      btn({ variant: 'secondary', href: href('claims-hub'), label: 'All property claims' }) + '</div>' +
      '<div class="pil-grid4">' + vm.damageTiles.map(damageTile).join('') + '</div>' +
      '<p style="font-family:var(--font-sans);font-size:16px;line-height:1.6;color:var(--color-muted);margin:26px 0 0;text-align:center">We also represent injured clients in serious <a href="' + href('practice:personal-injury') + '" style="color:var(--color-primary);font-weight:600;text-decoration:underline;text-underline-offset:3px">personal injury matters</a>, such as <a href="' + href('practice:slip-fall') + '" style="color:var(--color-primary);font-weight:600;text-decoration:underline;text-underline-offset:3px">slip and fall</a> or <a href="' + href('practice:auto-accident') + '" style="color:var(--color-primary);font-weight:600;text-decoration:underline;text-underline-offset:3px">automobile accidents</a>.</p>' +
      '</div></section>';

    var stars = starRow(18);
    var testi = '<section style="padding:clamp(32px,3.6vw,52px) 0"><div style="max-width:1240px;margin:0 auto;padding:0 24px">' +
      '<div style="max-width:680px;margin:0 auto clamp(36px,4vw,52px);text-align:center">' + eyebrow('Client Testimonials') +
      '<h2 style="font-family:var(--font-display);font-weight:600;font-size:clamp(30px,4vw,42px);line-height:1.12;letter-spacing:-0.02em;color:var(--color-ink);margin:14px 0 0">Policyholders we’ve stood up for</h2>' +
      '<div style="display:inline-flex;align-items:center;gap:10px;margin-top:18px"><span style="display:flex;gap:2px;color:var(--color-accent)">' + stars + '</span>' +
      '<span style="font-family:var(--font-sans);font-size:14.5px;font-weight:600;color:var(--color-body)">5.0 from clients on Google</span></div>' +
      '</div>' +
      '<div id="pil-testi-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:22px;animation:pilFade .4s var(--ease-out) both">' +
      vm.homeTestimonials.map(function (t) {
        return '<div style="position:relative;background:#fff;border:1px solid var(--color-hairline);border-radius:18px;padding:30px;box-shadow:var(--shadow-sm);display:flex;flex-direction:column;gap:16px;overflow:hidden">' +
          '<span style="position:absolute;top:20px;right:22px;color:var(--color-primary-soft);display:flex">' + I('quote', 40) + '</span>' +
          '<div style="display:flex;gap:3px;color:var(--color-accent);position:relative;z-index:1">' + starRow(17) + '</div>' +
          '<p data-role="quote" style="font-family:var(--font-display);font-size:19px;line-height:1.5;letter-spacing:-0.01em;color:var(--color-ink);margin:0;flex:1;position:relative;z-index:1">' + t.quote + '</p>' +
          '<div style="display:flex;align-items:center;justify-content:space-between;gap:12px;border-top:1px solid var(--color-hairline-soft);padding-top:16px">' +
          '<div data-role="name" style="font-family:var(--font-sans);font-size:15px;font-weight:700;color:var(--color-ink)">' + t.name + '</div>' +
          '<span data-role="claim" style="font-family:var(--font-sans);font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:var(--color-primary);background:var(--color-primary-soft);padding:5px 11px;border-radius:999px;white-space:nowrap' + (t.claim ? '' : ';display:none') + '">' + (t.claim || '') + '</span>' +
          '</div></div>';
      }).join('') + '</div></div></section>';

    var shuffleData = '<script type="application/json" id="pil-shuffle-data">' + JSON.stringify({
      testimonials: (PIL_CONTENT.testimonials || []).map(function (t) { return { quote: t.quote, name: t.name, claim: t.claim || '' }; }),
      caseResults: PIL_CONTENT.caseResults || []
    }).replace(/</g, '\\u003c') + '<\/script>';

    return '<div style="animation:pilFade .4s var(--ease-out) both">' + hero + statsBand + problems + why + losses + testi + '</div>' + shuffleData;
  }

  function damageTile(d) {
    return '<a href="' + href(d.page) + '" class="pil-lift-sm" style="display:flex;align-items:center;gap:14px;background:#fff;border:1px solid var(--color-hairline);border-radius:14px;padding:18px 20px;box-shadow:var(--shadow-sm);text-decoration:none">' +
      '<span style="width:44px;height:44px;flex:none;border-radius:12px;background:var(--color-primary-soft);color:var(--color-primary);display:flex;align-items:center;justify-content:center">' + I(d.icon, 22) + '</span>' +
      '<span style="font-family:var(--font-sans);font-size:15.5px;font-weight:600;color:var(--color-ink)">' + d.label + '</span></a>';
  }

  function starRow(size) { var o = ''; for (var i = 0; i < 5; i++) o += '<span style="display:flex">' + I('star', size) + '</span>'; return o; }

  function pageArticle(vm) {
    var av = vm.av;
    var intro = av.intro.map(function (p) { return '<p style="font-family:var(--font-sans);font-size:18px;line-height:1.7;color:var(--color-body);margin:0 0 18px">' + p + '</p>'; }).join('');
    var sections = av.sections.map(function (sec) {
      var body = '';
      if (sec.isNamed) {
        body = '<div style="display:flex;flex-direction:column;gap:14px;margin-top:18px">' + sec.named.map(function (row) {
          return '<p style="font-family:var(--font-sans);font-size:16px;line-height:1.65;color:var(--color-muted);margin:0"><strong style="color:var(--color-ink);font-weight:700">' + row.term + '</strong> ' + row.desc + '</p>';
        }).join('') + '</div>';
      } else if (sec.isPara) {
        body = '<div style="margin-top:16px">' + sec.paras.map(function (p) { return '<p style="font-family:var(--font-sans);font-size:17px;line-height:1.7;color:var(--color-body);margin:0 0 16px">' + p + '</p>'; }).join('') + '</div>';
      }
      return '<div style="margin-top:34px"><h2 style="font-family:var(--font-display);font-weight:600;font-size:clamp(23px,3vw,30px);line-height:1.2;letter-spacing:-0.01em;color:var(--color-ink);margin:0">' + sec.heading + '</h2>' + body + '</div>';
    }).join('');

    var steps = '';
    if (av.hasSteps) {
      steps = '<div style="margin-top:38px;background:var(--color-surface-soft);border:1px solid var(--color-hairline);border-radius:18px;padding:clamp(24px,3vw,34px)"><h2 style="font-family:var(--font-display);font-weight:600;font-size:clamp(22px,3vw,28px);line-height:1.2;color:var(--color-ink);margin:0 0 20px">' + av.stepsHeading + '</h2><div style="display:flex;flex-direction:column;gap:16px">' +
        av.steps.map(function (st) {
          return '<div style="display:flex;align-items:flex-start;gap:14px"><span style="flex:none;width:30px;height:30px;border-radius:9px;background:var(--color-primary);color:#fff;display:flex;align-items:center;justify-content:center;font-family:var(--font-mono);font-size:14px;font-weight:600">' + st.n + '</span><span style="font-family:var(--font-sans);font-size:16px;line-height:1.6;color:var(--color-body);padding-top:3px">' + st.text + '</span></div>';
        }).join('') + '</div></div>';
    }

    var faqs = '';
    if (av.hasFaqs) {
      faqs = '<div style="margin-top:40px"><h2 style="font-family:var(--font-display);font-weight:600;font-size:clamp(23px,3vw,30px);line-height:1.2;color:var(--color-ink);margin:0 0 18px">Frequently Asked Questions</h2><div style="display:flex;flex-direction:column;gap:12px">' +
        av.faqs.map(faqItem).join('') + '</div></div>';
    }

    var related = '';
    if (av.hasRelated) {
      related = '<div style="background:#fff;border:1px solid var(--color-hairline);border-radius:16px;padding:22px;box-shadow:var(--shadow-sm)"><div style="font-family:var(--font-sans);font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--color-muted);margin-bottom:12px">Related reading</div><div style="display:flex;flex-direction:column;gap:2px">' +
        av.related.map(function (r) {
          return '<a href="' + href(r.page) + '" class="pil-underline" style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding:9px 0;font-family:var(--font-sans);font-size:15px;font-weight:600;color:var(--color-ink);text-decoration:none;border-bottom:1px solid var(--color-hairline-soft)">' + r.label + '<span style="color:var(--color-primary);display:flex">' + I('arrow-right', 16) + '</span></a>';
        }).join('') + '</div></div>';
    }

    return '<div style="animation:pilFade .4s var(--ease-out) both">' +
      '<section style="background:var(--color-surface-soft);border-bottom:1px solid var(--color-hairline-soft)"><div style="max-width:1100px;margin:0 auto;padding:clamp(40px,5vw,68px) 24px">' +
      '<div style="display:flex;align-items:center;gap:8px;font-family:var(--font-sans);font-size:13px;color:var(--color-muted);margin-bottom:16px"><a href="' + href('home') + '" class="pil-underline" style="color:var(--color-muted);text-decoration:none">Home</a>' + I('chevron-right', 13) + '<span style="color:var(--color-ink);font-weight:600">' + av.eyebrow + '</span></div>' +
      eyebrowPlain(av.eyebrow) +
      '<h1 style="font-family:var(--font-display);font-weight:600;font-size:clamp(32px,4.6vw,52px);line-height:1.08;letter-spacing:-0.02em;color:var(--color-ink);margin:12px 0 0;max-width:820px">' + av.h1 + '</h1>' +
      '<p style="font-family:var(--font-sans);font-size:20px;line-height:1.5;color:var(--color-muted);margin:16px 0 0;max-width:720px">' + av.tagline + '</p>' +
      '<div style="display:flex;flex-wrap:wrap;gap:12px;margin-top:26px">' + btn({ variant: 'accent', href: href('contact'), label: 'Retain Our Firm Now' }) + btn({ variant: 'secondary', href: href('contact'), label: 'Get a Free Claim Review' }) + '</div>' +
      '</div></section>' +
      '<section style="padding:clamp(48px,6vw,80px) 0"><div class="pil-collapse" style="max-width:1100px;margin:0 auto;padding:0 24px;display:grid;grid-template-columns:minmax(0,1fr) 320px;gap:52px;align-items:start">' +
      '<article>' + intro + sections + steps + faqs +
      '<div style="margin-top:36px;padding:18px 22px;background:#fff;border:1px solid var(--color-hairline);border-left:3px solid var(--color-primary);border-radius:12px;font-family:var(--font-sans);font-size:14px;line-height:1.6;color:var(--color-muted)">' + av.disclaimer + '</div></article>' +
      '<aside style="position:sticky;top:96px;display:flex;flex-direction:column;gap:18px">' + sidebarCta(av.ctaTitle, av.ctaBody) + related + '</aside>' +
      '</div></section></div>';
  }

  function faqItem(f) {
    return '<details class="pil-faq" style="border:1px solid var(--color-hairline);border-radius:14px;background:#fff;box-shadow:var(--shadow-sm);overflow:hidden">' +
      '<summary style="cursor:pointer;list-style:none;padding:18px 22px;font-family:var(--font-sans);font-size:16.5px;font-weight:700;color:var(--color-ink);display:flex;align-items:center;justify-content:space-between;gap:16px">' + f.q +
      '<span class="pil-faqchev" style="color:var(--color-primary);display:flex;flex:none;transition:transform .2s var(--ease-out)">' + I('chevron-right', 20) + '</span></summary>' +
      '<div style="padding:0 22px 20px;font-family:var(--font-sans);font-size:16px;line-height:1.65;color:var(--color-muted)">' + f.a + '</div></details>';
  }

  function sidebarCta(title, body) {
    return '<div style="background:var(--color-ink);border-radius:18px;padding:26px;color:#fff"><h3 style="font-family:var(--font-display);font-size:22px;font-weight:600;line-height:1.2;color:#fff;margin:0 0 8px">' + (title || 'Send us the letter.') + '</h3>' +
      '<p style="font-family:var(--font-sans);font-size:14.5px;line-height:1.6;color:rgba(255,255,255,0.72);margin:0 0 18px">' + (body || 'A free review by an attorney, and a plain answer on where your claim stands.') + '</p>' +
      '<div style="display:flex;flex-direction:column;gap:10px">' + btn({ variant: 'accent', block: true, href: href('contact'), label: 'Retain Our Firm Now' }) + btn({ variant: 'secondary', block: true, href: href('contact'), label: 'Free Claim Review' }) + '</div>' +
      '<a href="' + TEL + '" style="display:flex;align-items:center;justify-content:center;gap:8px;margin-top:14px;font-family:var(--font-mono);font-size:15px;font-weight:500;color:#fff;text-decoration:none">' + I('phone', 17) + PHONE + '</a></div>';
  }

  function hubHead(eyeb, h1, tag, narrow) {
    return '<section style="background:var(--color-surface-soft);border-bottom:1px solid var(--color-hairline-soft)"><div style="max-width:1240px;margin:0 auto;padding:clamp(44px,5vw,72px) 24px;text-align:center">' +
      eyebrowPlain(eyeb) +
      '<h1 style="font-family:var(--font-display);font-weight:600;font-size:clamp(32px,4.6vw,52px);line-height:1.08;letter-spacing:-0.02em;color:var(--color-ink);margin:12px 0 0">' + h1 + '</h1>' +
      '<p style="font-family:var(--font-sans);font-size:19px;line-height:1.6;color:var(--color-muted);margin:16px auto 0;max-width:' + (narrow || 660) + 'px">' + tag + '</p></div></section>';
  }

  function pageClaimsHub(vm) {
    var problems = vm.problems.map(function (p) {
      return '<a href="' + href(p.page) + '" class="pil-lift-sm" style="display:flex;flex-direction:column;background:#fff;border:1px solid var(--color-hairline);border-top:3px solid var(--color-accent);border-radius:16px;padding:26px;box-shadow:var(--shadow-sm);text-decoration:none">' +
        '<h3 style="font-family:var(--font-sans);font-size:19px;font-weight:700;color:var(--color-ink);margin:0 0 8px">' + p.cta + '</h3>' +
        '<p style="font-family:var(--font-sans);font-size:15px;line-height:1.6;color:var(--color-muted);margin:0">' + p.desc + '</p></a>';
    }).join('');
    return '<div style="animation:pilFade .4s var(--ease-out) both">' +
      hubHead('Property Claims', 'Property insurance claims we handle', 'Start with your problem or your loss. Either way, you end up with an attorney who knows how the carrier built its file.') +
      '<section style="padding:clamp(48px,6vw,84px) 0"><div style="max-width:1240px;margin:0 auto;padding:0 24px">' +
      '<div style="font-family:var(--font-sans);font-size:13px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--color-muted);margin-bottom:18px">By problem</div>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:18px;margin-bottom:44px">' + problems + '</div>' +
      '<div style="font-family:var(--font-sans);font-size:13px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--color-muted);margin-bottom:18px">By type of loss</div>' +
      '<div class="pil-grid4">' + vm.damageTiles.map(damageTile).join('') + '</div>' +
      '</div></section></div>';
  }

  function pagePracticeHub(vm) {
    var tiles = vm.practiceTiles.map(function (p) {
      return '<a href="' + href(p.page) + '" class="pil-lift-sm" style="display:flex;flex-direction:column;background:#fff;border:1px solid var(--color-hairline);border-radius:16px;padding:28px;box-shadow:var(--shadow-sm);text-decoration:none">' +
        '<span style="width:50px;height:50px;border-radius:12px;background:var(--color-primary-soft);color:var(--color-primary);display:flex;align-items:center;justify-content:center;margin-bottom:16px">' + I(p.icon, 25) + '</span>' +
        '<h3 style="font-family:var(--font-sans);font-size:19px;font-weight:700;color:var(--color-ink);margin:0 0 8px">' + p.label + '</h3>' +
        '<p style="font-family:var(--font-sans);font-size:15px;line-height:1.6;color:var(--color-muted);margin:0 0 16px;flex:1">' + p.tagline + '</p>' +
        '<span style="display:inline-flex;align-items:center;gap:7px;font-family:var(--font-sans);font-size:14px;font-weight:700;color:var(--color-primary)">Learn more' + I('arrow-right', 16) + '</span></a>';
    }).join('');
    return '<div style="animation:pilFade .4s var(--ease-out) both">' +
      hubHead('Other Practice Areas', 'Beyond property insurance', 'The same policyholder-first approach, applied to the injuries and disputes our clients bring us.', 640) +
      '<section style="padding:clamp(48px,6vw,84px) 0"><div style="max-width:1240px;margin:0 auto;padding:0 24px;display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px">' + tiles + '</div></section></div>';
  }

  function pageAbout(vm) {
    var values = vm.aboutValues.map(function (v) {
      return '<div style="background:#fff;border:1px solid var(--color-hairline);border-radius:16px;padding:28px;box-shadow:var(--shadow-sm)">' +
        '<div style="width:48px;height:48px;border-radius:12px;background:var(--color-accent-soft);color:#8a6d12;display:flex;align-items:center;justify-content:center;margin-bottom:16px">' + I(v.icon, 24) + '</div>' +
        '<h3 style="font-family:var(--font-sans);font-size:18px;font-weight:700;color:var(--color-ink);margin:0 0 8px">' + v.title + '</h3>' +
        '<p style="font-family:var(--font-sans);font-size:15px;line-height:1.6;color:var(--color-muted);margin:0">' + v.desc + '</p></div>';
    }).join('');
    return '<div style="animation:pilFade .4s var(--ease-out) both">' +
      '<section style="background:var(--color-surface-soft);border-bottom:1px solid var(--color-hairline-soft)"><div style="max-width:1240px;margin:0 auto;padding:clamp(44px,5vw,76px) 24px">' +
      '<div>' + eyebrowPlain('About the Firm') +
      '<h1 style="font-family:var(--font-display);font-weight:600;font-size:clamp(32px,4.6vw,52px);line-height:1.08;letter-spacing:-0.02em;color:var(--color-ink);margin:12px 0 0">Built for Policyholders</h1>' +
      '<p style="font-family:var(--font-sans);font-size:19px;line-height:1.65;color:var(--color-muted);margin:18px 0 0"><b>propertyinsurance<span style="color:var(--color-primary)">.law</span></b> was built around representing policyholders.</p>' +
      '<p style="font-family:var(--font-sans);font-size:17px;line-height:1.65;color:var(--color-muted);margin:16px 0 0">We represent homeowners, condominium owners, associations, landlords, and business owners when property insurance claims are denied, delayed, or underpaid. In property insurance matters, our clients do not pay attorney’s fees unless we recover for them.</p>' +
      '<p style="font-family:var(--font-sans);font-size:17px;line-height:1.65;color:var(--color-muted);margin:16px 0 0">Property insurance cases are won in the details. We review the policy, the insurance company’s claim file, inspection findings, estimates, photographs, expert reports, and correspondence to understand how the claim was evaluated and where the insurance company’s position may be challenged.</p>' +
      '<p style="font-family:var(--font-sans);font-size:17px;line-height:1.65;color:var(--color-muted);margin:16px 0 0">Our attorneys bring experience from the construction, insurance, and defense sides of these disputes. Members of our team have worked on the other side of these cases, giving us firsthand insight into how insurance companies, contractors, consultants, and experts evaluate property claims.</p>' +
      '<p style="font-family:var(--font-sans);font-size:17px;line-height:1.65;color:var(--color-muted);margin:16px 0 0">That experience helps us know what to look for, what evidence matters, and how to build a claim for negotiation, appraisal, mediation, or litigation when necessary.</p></div>' +
      imageSlot('pil-about', { style: 'width:100%;aspect-ratio:1434/673;border-radius:20px;margin-top:clamp(32px,4vw,48px)', ph: 'The team or office' }) +
      '</div></section>' +
      '<section style="background:var(--color-primary)"><div style="max-width:1240px;margin:0 auto;padding:clamp(40px,5vw,60px) 24px;display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:32px">' + vm.stats.map(statBlock).join('') + '</div></section>' +
      '<section style="padding:clamp(56px,7vw,96px) 0"><div style="max-width:1100px;margin:0 auto;padding:0 24px">' +
      '<div style="max-width:640px;margin:0 auto 44px;text-align:center">' + eyebrowPlain('How We Work') +
      '<h2 style="font-family:var(--font-display);font-weight:600;font-size:clamp(28px,4vw,40px);line-height:1.15;letter-spacing:-0.02em;color:var(--color-ink);margin:10px 0 0">Directly, technically, transparently</h2></div>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:22px">' + values + '</div>' +
      '<div style="text-align:center;margin-top:44px">' + btn({ variant: 'secondary', size: 'lg', href: href('attorneys'), label: 'Meet the attorneys' }) + '</div>' +
      '</div></section></div>';
  }

  function pageAttorneys(vm) {
    var cards = vm.attorneyCards.map(function (m) {
      return '<a href="' + href('bio:' + m.slug) + '" class="pil-lift-sm" style="display:flex;flex-direction:column;background:#fff;border:1px solid var(--color-hairline);border-radius:16px;overflow:hidden;box-shadow:var(--shadow-sm);text-decoration:none">' +
        imageSlot('pil-att-' + m.slug, { style: 'width:100%;height:360px', position: m.imgPosition || '50% 20%', mono: { initials: m.initials }, ph: m.name }) +
        '<div style="padding:22px 24px 26px"><h3 style="font-family:var(--font-sans);font-size:20px;font-weight:700;color:var(--color-ink);margin:0">' + m.name + '</h3>' +
        '<div style="font-family:var(--font-sans);font-size:13.5px;font-weight:600;color:var(--color-primary);margin:4px 0 12px">' + m.role + '</div>' +
        '<p style="font-family:var(--font-sans);font-size:15px;line-height:1.6;color:var(--color-muted);margin:0 0 14px">' + m.positioning + '</p>' +
        '<span style="display:inline-flex;align-items:center;gap:7px;font-family:var(--font-sans);font-size:14px;font-weight:700;color:var(--color-primary)">Read bio' + I('arrow-right', 16) + '</span></div></a>';
    }).join('');
    return '<div style="animation:pilFade .4s var(--ease-out) both">' +
      hubHead('Our Attorneys', 'The Attorneys in Your Corner', 'Experienced advocates who work directly with clients from the first review through resolution.', 640) +
      '<section style="padding:clamp(48px,6vw,84px) 0"><div style="max-width:1240px;margin:0 auto;padding:0 24px">' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px">' + cards + '</div>' +
      '<div style="text-align:center;margin-top:40px">' + btn({ variant: 'secondary', href: href('staff'), label: 'Meet our staff' }) + '</div>' +
      '</div></section></div>';
  }

  function pageBio(vm) {
    var b = vm.bio;
    var bioParas = (b.bio || []).map(function (p) { return '<p style="font-family:var(--font-sans);font-size:18px;line-height:1.7;color:var(--color-body);margin:0 0 18px">' + p + '</p>'; }).join('');
    var approach = (b.approach || []).map(function (a) {
      return '<div style="display:flex;align-items:flex-start;gap:12px"><span style="flex:none;width:26px;height:26px;border-radius:8px;background:var(--color-primary-soft);color:var(--color-primary);display:flex;align-items:center;justify-content:center;margin-top:1px">' + I('check', 16) + '</span><span style="font-family:var(--font-sans);font-size:16px;line-height:1.6;color:var(--color-body)">' + a + '</span></div>';
    }).join('');
    var credentials = Array.isArray(b.credentials) ? b.credentials.map(function (g) {
      return '<div style="margin-bottom:16px"><div style="font-family:var(--font-sans);font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--color-muted);margin-bottom:8px">' + g.heading + '</div>' +
        '<ul style="margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:6px">' + g.items.map(function (it) {
          return '<li style="font-family:var(--font-sans);font-size:16px;line-height:1.5;color:var(--color-body);padding-left:15px;position:relative"><span style="position:absolute;left:0;top:9px;width:5px;height:5px;border-radius:50%;background:var(--color-primary)"></span>' + it + '</li>';
        }).join('') + '</ul></div>';
    }).join('') : '<p style="font-family:var(--font-sans);font-size:16px;line-height:1.7;color:var(--color-muted);margin:0">' + b.credentials + '</p>';
    var practiceAreas = (b.practiceAreas || []).map(function (pa) {
      return '<span style="display:inline-flex;align-items:center;gap:7px;font-family:var(--font-sans);font-size:14.5px;color:var(--color-body)"><span style="width:4px;height:4px;border-radius:50%;background:var(--color-primary);flex:none"></span>' + pa + '</span>';
    }).join('');
    var articles = '';
    if (b.hasArticles) {
      articles = '<div style="background:#fff;border:1px solid var(--color-hairline);border-radius:16px;padding:22px;box-shadow:var(--shadow-sm)"><div style="font-family:var(--font-sans);font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--color-muted);margin-bottom:12px">Articles by ' + b.first + '</div><div style="display:flex;flex-direction:column;gap:2px">' +
        b.articles.map(function (p) { return '<a href="' + href('post:' + p.slug) + '" class="pil-underline" style="display:block;padding:10px 0;font-family:var(--font-sans);font-size:14.5px;font-weight:600;line-height:1.4;color:var(--color-ink);text-decoration:none;border-bottom:1px solid var(--color-hairline-soft)">' + p.title + '</a>'; }).join('') + '</div></div>';
    }
    return '<div style="animation:pilFade .4s var(--ease-out) both">' +
      '<section style="background:var(--color-surface-soft);border-bottom:1px solid var(--color-hairline-soft)"><div class="pil-collapse" style="max-width:1100px;margin:0 auto;padding:clamp(40px,5vw,64px) 24px;display:grid;grid-template-columns:340px minmax(0,1fr);gap:44px;align-items:center">' +
      imageSlot('pil-bio-' + b.slug, { style: 'width:100%;height:380px;border-radius:18px', position: b.imgPosition || '50% 20%', mono: { initials: b.initials }, ph: b.name }) +
      '<div><div style="display:flex;align-items:center;gap:8px;font-family:var(--font-sans);font-size:13px;color:var(--color-muted);margin-bottom:16px"><a href="' + href('attorneys') + '" class="pil-underline" style="color:var(--color-muted);text-decoration:none">Our Attorneys</a>' + I('chevron-right', 13) + '<span style="color:var(--color-ink);font-weight:600">' + b.name + '</span></div>' +
      '<h1 style="font-family:var(--font-display);font-weight:600;font-size:clamp(32px,4.4vw,48px);line-height:1.05;letter-spacing:-0.02em;color:var(--color-ink);margin:0">' + b.name + '</h1>' +
      '<div style="font-family:var(--font-sans);font-size:16px;font-weight:600;color:var(--color-primary);margin:12px 0 0">' + b.role + '</div>' +
      '<div style="display:flex;flex-wrap:wrap;gap:6px 18px;margin-top:10px">' + practiceAreas + '</div>' +
      '<p style="font-family:var(--font-sans);font-size:18px;line-height:1.6;color:var(--color-muted);margin:16px 0 0">' + b.positioning + '</p>' +
      '<div style="display:flex;flex-wrap:wrap;gap:12px;margin-top:22px">' + btn({ variant: 'accent', href: b.ctaHref || href('contact'), label: b.ctaLabel || 'Retain Our Firm Now' }) +
      '<a href="' + TEL + '" style="display:inline-flex;align-items:center;gap:8px;font-family:var(--font-mono);font-size:15px;font-weight:500;color:var(--color-ink);text-decoration:none;padding:0 6px">' + I('phone', 17) + PHONE + '</a></div>' +
      '</div></div></section>' +
      '<section style="padding:clamp(48px,6vw,80px) 0"><div class="pil-collapse" style="max-width:1100px;margin:0 auto;padding:0 24px;display:grid;grid-template-columns:minmax(0,1fr) 320px;gap:52px;align-items:start">' +
      '<article>' + bioParas +
      '<div style="margin-top:30px;background:var(--color-surface-soft);border:1px solid var(--color-hairline);border-radius:18px;padding:clamp(24px,3vw,32px)"><h2 style="font-family:var(--font-display);font-weight:600;font-size:24px;line-height:1.2;color:var(--color-ink);margin:0 0 18px">' + b.approachHeading + '</h2><div style="display:flex;flex-direction:column;gap:14px">' + approach + '</div></div>' +
      '<div style="margin-top:30px"><h2 style="font-family:var(--font-display);font-weight:600;font-size:24px;line-height:1.2;color:var(--color-ink);margin:0 0 10px">Credentials</h2>' +
      credentials +
      (b.personal ? '<p style="font-family:var(--font-sans);font-size:16px;line-height:1.7;color:var(--color-muted);margin:16px 0 0;font-style:italic">' + b.personal + '</p>' : '') + '</div></article>' +
      '<aside style="position:sticky;top:96px;display:flex;flex-direction:column;gap:18px">' + articles +
      '<div style="background:var(--color-ink);border-radius:18px;padding:24px;color:#fff"><span style="display:flex;color:var(--color-accent);margin-bottom:10px">' + I('shield-check', 24) + '</span><p style="font-family:var(--font-sans);font-size:15px;font-weight:600;line-height:1.5;margin:0 0 16px">No Recovery, No Fees. You pay nothing unless we recover.</p>' + btn({ variant: 'secondary', block: true, href: href('contact'), label: 'Get a Free Claim Review' }) + '</div>' +
      '</aside></div></section></div>';
  }

  function pageStaff(vm) {
    var cards = vm.staff.map(function (s) {
      return '<div style="display:flex;flex-direction:column;background:#fff;border:1px solid var(--color-hairline);border-radius:16px;overflow:hidden;box-shadow:var(--shadow-sm)">' +
        imageSlot('pil-staff-' + s.initials, { style: 'width:100%;height:300px', mono: { initials: s.initials } }) +
        '<div style="padding:22px 24px 26px"><h3 style="font-family:var(--font-sans);font-size:20px;font-weight:700;color:var(--color-ink);margin:0">' + s.name + '</h3>' +
        '<div style="font-family:var(--font-sans);font-size:13.5px;font-weight:600;color:var(--color-primary);margin:4px 0 12px">' + s.role + '</div>' +
        '<p style="font-family:var(--font-sans);font-size:14.5px;line-height:1.6;color:var(--color-muted);margin:0">' + s.desc + '</p></div></div>';
    }).join('');
    return '<div style="animation:pilFade .4s var(--ease-out) both">' +
      hubHead('Our Staff', 'The People Who Keep Your File Moving', 'Our litigation, presuit, intake, and accounting managers help keep cases organized, deadlines on track, and clients informed throughout the process.') +
      '<section style="padding:clamp(48px,6vw,84px) 0"><div style="max-width:1000px;margin:0 auto;padding:0 24px;display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:22px">' + cards + '</div></section></div>';
  }

  function pageFaq(vm) {
    var d = vm.faqData;
    var groups = (d.groups || []).map(function (grp) {
      return '<div style="margin-bottom:36px"><h2 style="font-family:var(--font-sans);font-size:14px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--color-primary);margin:0 0 14px">' + grp.title + '</h2><div style="display:flex;flex-direction:column;gap:12px">' +
        grp.items.map(faqItem).join('') + '</div></div>';
    }).join('');
    return '<div style="animation:pilFade .4s var(--ease-out) both">' +
      '<section style="background:var(--color-surface-soft);border-bottom:1px solid var(--color-hairline-soft)"><div style="max-width:860px;margin:0 auto;padding:clamp(44px,5vw,72px) 24px;text-align:center">' +
      eyebrowPlain(d.eyebrow) + '<h1 style="font-family:var(--font-display);font-weight:600;font-size:clamp(32px,4.6vw,52px);line-height:1.08;letter-spacing:-0.02em;color:var(--color-ink);margin:12px 0 0">' + d.h1 + '</h1>' +
      '<p style="font-family:var(--font-sans);font-size:19px;line-height:1.6;color:var(--color-muted);margin:16px auto 0;max-width:560px">' + d.tagline + '</p></div></section>' +
      '<section style="padding:clamp(48px,6vw,80px) 0"><div style="max-width:820px;margin:0 auto;padding:0 24px">' + groups +
      (d.disclaimer ? '<div style="margin-top:8px;padding:18px 22px;background:var(--color-surface-soft);border:1px solid var(--color-hairline);border-left:3px solid var(--color-primary);border-radius:12px;font-family:var(--font-sans);font-size:14px;line-height:1.6;color:var(--color-muted)">' + d.disclaimer + '</div>' : '') +
      '</div></section></div>';
  }

  function pageBlog(vm) {
    var d = vm.blogData;
    var posts = (d.posts || []).map(function (b) {
      return '<a href="' + href('post:' + b.slug) + '" class="pil-lift-sm" style="display:flex;flex-direction:column;background:#fff;border:1px solid var(--color-hairline);border-radius:16px;overflow:hidden;box-shadow:var(--shadow-sm);text-decoration:none">' +
        imageSlot('pil-blog-' + b.slug, { style: 'width:100%;height:170px', ph: b.title }) +
        '<div style="padding:24px;display:flex;flex-direction:column;flex:1"><span style="font-family:var(--font-sans);font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--color-primary);margin-bottom:10px">' + b.category + '</span>' +
        '<h3 style="font-family:var(--font-display);font-size:20px;font-weight:600;line-height:1.25;color:var(--color-ink);margin:0 0 10px">' + b.title + '</h3>' +
        '<p style="font-family:var(--font-sans);font-size:14px;line-height:1.6;color:var(--color-muted);margin:0 0 16px;flex:1">' + b.dek + '</p>' +
        '<span style="font-family:var(--font-sans);font-size:13px;font-weight:600;color:var(--color-body)">By ' + b.author + ' · ' + b.dateDisplay + '</span></div></a>';
    }).join('');
    var external = (d.externalArticles || []).map(function (u) {
      return '<a href="' + u.url + '" target="_blank" rel="noopener" class="pil-underline" style="display:flex;align-items:flex-start;gap:10px;padding:10px 0;font-family:var(--font-sans);font-size:15px;line-height:1.5;color:var(--color-body);text-decoration:none;border-bottom:1px solid var(--color-hairline-soft)">' +
        '<span style="color:var(--color-primary);display:flex;margin-top:3px;flex:none">' + I('file-text', 16) + '</span>' +
        '<span><span style="color:var(--color-ink);font-weight:600">' + u.title + '</span><br><span style="color:var(--color-muted);font-size:13.5px">' + u.author + ' · ' + u.dateDisplay + '</span></span></a>';
    }).join('');
    return '<div style="animation:pilFade .4s var(--ease-out) both">' +
      hubHead(d.eyebrow, d.h1, d.tagline) +
      '<section style="padding:clamp(48px,6vw,84px) 0"><div style="max-width:1240px;margin:0 auto;padding:0 24px">' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px">' + posts + '</div>' +
      (external ? '<div style="margin-top:44px;background:var(--color-surface-soft);border:1px solid var(--color-hairline);border-radius:18px;padding:clamp(26px,3vw,36px)"><h2 style="font-family:var(--font-display);font-weight:600;font-size:24px;color:var(--color-ink);margin:0 0 18px">External Articles by Our Attorneys</h2>' +
      '<div style="display:flex;flex-direction:column">' + external + '</div></div>' : '') +
      '</div></section></div>';
  }

  function pagePost(vm) {
    var p = vm.post;
    var blocks = (p.blocks || []).map(function (b) {
      if (b.isHeading) return '<h2 style="font-family:var(--font-display);font-weight:600;font-size:clamp(23px,3vw,30px);line-height:1.2;letter-spacing:-0.01em;color:var(--color-ink);margin:34px 0 14px">' + b.text + '</h2>';
      return '<p style="font-family:var(--font-sans);font-size:18px;line-height:1.75;color:var(--color-body);margin:0 0 18px">' + b.text + '</p>';
    }).join('');
    var related = (p.related || []).map(function (r) {
      return '<a href="' + href(r.page) + '" class="pil-underline" style="display:block;padding:10px 0;font-family:var(--font-sans);font-size:14.5px;font-weight:600;line-height:1.4;color:var(--color-ink);text-decoration:none;border-bottom:1px solid var(--color-hairline-soft)">' + r.title + '</a>';
    }).join('');
    var tags = (p.tags || []).map(function (t) {
      return '<span style="font-family:var(--font-sans);font-size:12.5px;font-weight:600;color:var(--color-primary);background:var(--color-primary-soft);padding:5px 11px;border-radius:999px">' + t + '</span>';
    }).join('');
    var authorHref = p.authorSlug ? href('bio:' + p.authorSlug) : null;
    var authorAvatar = imageSlot(p.authorSlug ? 'pil-bio-' + p.authorSlug : 'pil-post-author', { style: 'width:46px;height:46px;border-radius:999px;flex:none', mono: { initials: p.authorInitials, size: '1rem' } });
    var authorNameHtml = authorHref
      ? '<a href="' + authorHref + '" class="pil-underline" style="color:var(--color-ink);font-weight:700;text-decoration:none">' + p.author + '</a>'
      : '<span style="color:var(--color-ink);font-weight:700">' + p.author + '</span>';
    return '<div style="animation:pilFade .4s var(--ease-out) both">' +
      '<section style="background:var(--color-surface-soft);border-bottom:1px solid var(--color-hairline-soft)"><div style="max-width:840px;margin:0 auto;padding:clamp(40px,5vw,64px) 24px">' +
      '<div style="display:flex;align-items:center;gap:8px;font-family:var(--font-sans);font-size:13px;color:var(--color-muted);margin-bottom:18px;flex-wrap:wrap"><a href="' + href('home') + '" class="pil-underline" style="color:var(--color-muted);text-decoration:none">Home</a>' + I('chevron-right', 13) + '<a href="' + href('blog') + '" class="pil-underline" style="color:var(--color-muted);text-decoration:none">Blog</a>' + I('chevron-right', 13) + '<span style="color:var(--color-ink);font-weight:600">' + p.category + '</span></div>' +
      '<span style="font-family:var(--font-sans);font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--color-primary)">' + p.category + '</span>' +
      '<h1 style="font-family:var(--font-display);font-weight:600;font-size:clamp(30px,4.4vw,48px);line-height:1.1;letter-spacing:-0.02em;color:var(--color-ink);margin:12px 0 0">' + p.title + '</h1>' +
      '<p style="font-family:var(--font-sans);font-size:20px;line-height:1.55;color:var(--color-muted);margin:16px 0 0">' + p.dek + '</p>' +
      '<div style="display:flex;align-items:center;gap:14px;margin-top:22px">' + authorAvatar +
      '<div style="font-family:var(--font-sans);font-size:14px;line-height:1.45;color:var(--color-muted)">' + authorNameHtml + (p.authorRole ? ' · ' + p.authorRole : '') + '<br>' + p.dateDisplay + ' · ' + p.readTime + '</div></div>' +
      '</div></section>' +
      '<section style="padding:clamp(40px,5vw,72px) 0"><div class="pil-collapse" style="max-width:1040px;margin:0 auto;padding:0 24px;display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:52px;align-items:start">' +
      '<article>' + imageSlot('pil-blog-' + p.slug, { style: 'width:100%;height:clamp(240px,32vw,380px);border-radius:20px;box-shadow:var(--shadow-md);margin-bottom:clamp(24px,3vw,36px)', ph: p.title }) + blocks +
      (tags ? '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px">' + tags + '</div>' : '') +
      '<div style="margin-top:30px;padding-top:24px;border-top:1px solid var(--color-hairline);display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap"><a href="' + href('blog') + '" class="pil-underline" style="display:inline-flex;align-items:center;gap:8px;font-family:var(--font-sans);font-size:15px;font-weight:700;color:var(--color-primary);text-decoration:none">All articles</a><span style="font-family:var(--font-sans);font-size:12.5px;color:var(--color-muted)">' + (p.disclaimer || 'This article is general information, not legal advice.') + '</span></div></article>' +
      '<aside style="position:sticky;top:96px;display:flex;flex-direction:column;gap:18px">' + sidebarCta('No Recovery, No Fees.', 'You pay nothing unless we recover.') +
      (related ? '<div style="background:#fff;border:1px solid var(--color-hairline);border-radius:16px;padding:22px;box-shadow:var(--shadow-sm)"><div style="font-family:var(--font-sans);font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--color-muted);margin-bottom:12px">Related reading</div><div style="display:flex;flex-direction:column;gap:2px">' + related + '</div></div>' : '') +
      '</aside></div></section></div>';
  }

  function pagePolicies(vm) {
    var d = vm.policiesData;
    var sections = (d.sections || []).map(function (s) {
      return '<div id="' + s.id + '" style="scroll-margin-top:96px;margin-top:36px"><h2 style="font-family:var(--font-display);font-weight:600;font-size:clamp(22px,3vw,28px);line-height:1.2;letter-spacing:-0.01em;color:var(--color-ink);margin:0 0 14px">' + s.heading + '</h2>' +
        s.body.map(function (para) { return '<p style="font-family:var(--font-sans);font-size:16.5px;line-height:1.7;color:var(--color-muted);margin:0 0 14px">' + para + '</p>'; }).join('') + '</div>';
    }).join('');
    var toc = (d.sections || []).map(function (s) {
      return '<a href="#' + s.id + '" class="pil-underline" style="display:block;padding:8px 0;font-family:var(--font-sans);font-size:14px;font-weight:600;line-height:1.4;color:var(--color-ink);text-decoration:none;border-bottom:1px solid var(--color-hairline-soft)">' + s.toc + '</a>';
    }).join('');
    return '<div style="animation:pilFade .4s var(--ease-out) both">' +
      '<section style="background:var(--color-surface-soft);border-bottom:1px solid var(--color-hairline-soft)"><div style="max-width:1100px;margin:0 auto;padding:clamp(40px,5vw,68px) 24px">' +
      '<div style="display:flex;align-items:center;gap:8px;font-family:var(--font-sans);font-size:13px;color:var(--color-muted);margin-bottom:16px"><a href="' + href('home') + '" class="pil-underline" style="color:var(--color-muted);text-decoration:none">Home</a>' + I('chevron-right', 13) + '<span style="color:var(--color-ink);font-weight:600">' + d.h1 + '</span></div>' +
      eyebrowPlain(d.eyebrow) + '<h1 style="font-family:var(--font-display);font-weight:600;font-size:clamp(32px,4.6vw,52px);line-height:1.08;letter-spacing:-0.02em;color:var(--color-ink);margin:12px 0 0">' + d.h1 + '</h1>' +
      '<p style="font-family:var(--font-sans);font-size:20px;line-height:1.5;color:var(--color-muted);margin:16px 0 0;max-width:720px">' + d.tagline + '</p>' +
      '<div style="font-family:var(--font-mono);font-size:13px;color:var(--color-muted);margin-top:18px">' + d.updated + '</div></div></section>' +
      '<section style="padding:clamp(48px,6vw,80px) 0"><div class="pil-collapse" style="max-width:1100px;margin:0 auto;padding:0 24px;display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:52px;align-items:start">' +
      '<article><p style="font-family:var(--font-sans);font-size:18px;line-height:1.7;color:var(--color-body);margin:0">' + d.intro + '</p>' + sections + '</article>' +
      '<aside style="position:sticky;top:96px;display:flex;flex-direction:column;gap:18px"><div style="background:#fff;border:1px solid var(--color-hairline);border-radius:16px;padding:22px;box-shadow:var(--shadow-sm)"><div style="font-family:var(--font-sans);font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--color-muted);margin-bottom:12px">On this page</div><div style="display:flex;flex-direction:column;gap:1px">' + toc + '</div></div>' + sidebarCta() +
      '</aside></div></section></div>';
  }

  function officeInfoRow(icon, label, value, hrefVal) {
    var inner = '<div style="width:40px;height:40px;border-radius:10px;flex:none;background:var(--color-primary-soft);color:var(--color-primary);display:flex;align-items:center;justify-content:center">' + I(icon, 19) + '</div>' +
      '<div><div style="font-family:var(--font-sans);font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:var(--color-muted)">' + label + '</div>' +
      '<div style="font-family:var(--font-sans);font-size:15px;font-weight:500;line-height:1.5;color:var(--color-ink);margin-top:2px">' + value + '</div></div>';
    var rowStyle = 'display:flex;align-items:flex-start;gap:12px;text-decoration:none';
    return hrefVal ? '<a href="' + hrefVal + '" style="' + rowStyle + '">' + inner + '</a>' : '<div style="' + rowStyle + '">' + inner + '</div>';
  }

  function stateShapeSrc(state) {
    if (state === 'Florida') return imgUrl('florida');
    if (state === 'Illinois') return imgUrl('illinois');
    return '';
  }

  function officeCard(o) {
    var shapeSrc = stateShapeSrc(o.state);
    return '<div style="background:#fff;border:1px solid var(--color-hairline);border-radius:18px;padding:clamp(26px,3vw,34px);box-shadow:var(--shadow-md);display:flex;flex-direction:column;gap:22px;position:relative">' +
      (shapeSrc ? '<img src="' + shapeSrc + '" alt="" aria-hidden="true" style="position:absolute;top:clamp(22px,3vw,30px);right:clamp(22px,3vw,30px);width:60px;height:60px;object-fit:contain">' : '') +
      '<h2 style="font-family:var(--font-display);font-weight:600;font-size:26px;color:var(--color-ink);margin:0">' + o.state + '</h2>' +
      '<div style="display:flex;flex-direction:column;gap:14px">' +
      officeInfoRow('phone', 'Call us', o.phone, o.tel) +
      officeInfoRow('mail', 'Email', 'info@<b>propertyinsurance<span style="color:var(--color-primary)">.law</span></b>', CONSULT_MAILTO) +
      officeInfoRow('map-pin', 'Office', o.addressLines.join('<br>'), null) +
      '</div>' +
      '<div><div style="font-family:var(--font-sans);font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:var(--color-muted);margin-bottom:6px">Hours</div>' +
      '<div style="font-family:var(--font-sans);font-size:15px;color:var(--color-ink)">' + o.hours + '</div>' +
      '<div style="font-family:var(--font-sans);font-size:14px;color:var(--color-muted);margin-top:3px">' + o.appointment + '</div></div>' +
      '<div style="font-family:var(--font-sans);font-size:14.5px;color:var(--color-muted)">Hablamos español.</div>' +
      '<div style="display:flex;flex-direction:column;gap:10px">' +
      btn({ variant: 'accent', block: true, href: o.tel, label: 'Call Now' }) +
      btn({ variant: 'secondary', block: true, href: CONSULT_MAILTO, label: 'Free Consultation' }) +
      btn({ variant: 'accent', block: true, href: o.retainHref, label: 'Retain Our Firm' }) +
      '</div></div>';
  }

  function pageContact(vm) {
    var offices = vm.offices.map(officeCard).join('');

    return '<div style="animation:pilFade .4s var(--ease-out) both">' +
      '<section style="background:var(--color-surface-soft);border-bottom:1px solid var(--color-hairline-soft)"><div style="max-width:1100px;margin:0 auto;padding:clamp(40px,5vw,68px) 24px;text-align:center">' +
      badge('accent', 'No Fee Unless We Win') +
      '<h1 style="font-family:var(--font-display);font-weight:600;font-size:clamp(32px,4.6vw,52px);line-height:1.08;letter-spacing:-0.02em;color:var(--color-ink);margin:14px 0 0">Get your free claim review</h1>' +
      '<p style="font-family:var(--font-sans);font-size:19px;line-height:1.6;color:var(--color-muted);margin:16px auto 0;max-width:620px">Send the denial letter, the estimate, or just the story so far. An attorney reviews it at no cost and tells you plainly where the claim stands.</p></div></section>' +
      '<section style="padding:clamp(48px,6vw,84px) 0"><div class="pil-collapse" style="max-width:1000px;margin:0 auto;padding:0 24px;display:grid;grid-template-columns:1fr 1fr;gap:28px;align-items:start">' + offices + '</div></section></div>';
  }

  // ---------------- render dispatch ----------------
  function renderPage(vm) {
    if (vm.isHome) return pageHome(vm);
    if (vm.isArticle) return pageArticle(vm);
    if (vm.isClaimsHub) return pageClaimsHub(vm);
    if (vm.isPracticeHub) return pagePracticeHub(vm);
    if (vm.isAbout) return pageAbout(vm);
    if (vm.isAttorneys) return pageAttorneys(vm);
    if (vm.isBio) return pageBio(vm);
    if (vm.isStaff) return pageStaff(vm);
    if (vm.isFaq) return pageFaq(vm);
    if (vm.isBlog) return pageBlog(vm);
    if (vm.isPost) return pagePost(vm);
    if (vm.isPolicies) return pagePolicies(vm);
    if (vm.isContact) return pageContact(vm);
    // Unknown route -> home
    return pageHome(vm);
  }

  function pageTitle(vm) {
    var base = 'propertyinsurance.law — Your Property Damage Attorneys';
    if (vm.isArticle) return vm.av.h1 + ' | propertyinsurance.law';
    if (vm.isBio) return vm.bio.name + ' | propertyinsurance.law';
    if (vm.isPost) return (vm.post.metaTitle || vm.post.title) + ' | propertyinsurance.law';
    var m = {
      'claims-hub': 'Property Claims', 'practice-hub': 'Other Practice Areas', about: 'About the Firm',
      attorneys: 'Our Attorneys', staff: 'Our Staff', faq: 'FAQ', blog: 'Blog',
      policies: 'Law Firm Policies', contact: 'Free Claim Review'
    };
    return m[vm.page] ? m[vm.page] + ' | propertyinsurance.law' : base;
  }

  var FALLBACK_DESCRIPTION = 'Attorneys for denied, delayed, and underpaid property insurance claims. No Recovery, No Fees. Serving Florida and Illinois. Call (407) 502-8068.';

  function truncateDesc(s, max) {
    s = String(s || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    if (s.length <= max) return s;
    var cut = s.slice(0, max);
    var lastSpace = cut.lastIndexOf(' ');
    if (lastSpace > 40) cut = cut.slice(0, lastSpace);
    return cut.replace(/[,;:.\-–—]+$/, '') + '…';
  }

  function pageOgImage(vm) {
    var rel = null;
    if (vm.isPost) rel = imgUrl('pil-blog-' + vm.post.slug);
    else if (vm.isBio) rel = imgUrl('pil-bio-' + vm.bio.slug);
    else rel = imgUrl('pil-hero');
    return rel ? siteUrl + rel : null;
  }

  function pageDescription(vm) {
    if (vm.isArticle) return truncateDesc(vm.av.tagline, 160);
    if (vm.isBio) return truncateDesc(vm.bio.positioning, 160);
    if (vm.isFaq) return truncateDesc(vm.faqData.tagline, 160);
    if (vm.isPolicies) return truncateDesc(vm.policiesData.tagline, 160);
    if (vm.isBlog) return truncateDesc(vm.blogData.tagline, 160);
    if (vm.isPost) return truncateDesc((vm.post && vm.post.metaDescription) || FALLBACK_DESCRIPTION, 160);
    if (vm.isAbout) return 'propertyinsurance.law was built around representing policyholders. Learn about our firm and how we handle denied, delayed, and underpaid property insurance claims in Florida and Illinois.';
    if (vm.isAttorneys) return 'Meet the attorneys at propertyinsurance.law, representing homeowners and businesses in denied, delayed, and underpaid property insurance claims throughout Florida and Illinois.';
    if (vm.isStaff) return 'Meet the litigation, presuit, intake, and accounting team who help keep property insurance claims organized and moving at propertyinsurance.law.';
    if (vm.isClaimsHub) return 'Property insurance claims we handle: denied, delayed, and underpaid claims, hurricane and storm damage, water and roof claims, fire, mold, and more.';
    if (vm.isPracticeHub) return 'Beyond property insurance: personal injury, auto accident, slip and fall, and construction defect representation from propertyinsurance.law.';
    if (vm.isContact) return 'Send us your denial letter, estimate, or claim details for a free review. No attorney’s fee unless we recover for you.';
    return FALLBACK_DESCRIPTION;
  }

  function ldScript(obj) {
    return '<script type="application/ld+json">' + JSON.stringify(obj).replace(/</g, '\\u003c') + '</script>';
  }

  function orgJsonLd() {
    var org = {
      '@context': 'https://schema.org',
      '@type': 'LegalService',
      '@id': siteUrl + '/#organization',
      name: 'Property Insurance Law PLLC',
      alternateName: 'propertyinsurance.law',
      url: siteUrl + '/',
      telephone: '+14075028068',
      email: 'info@propertyinsurance.law',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '941 W. Morse Blvd. Ste 100-585',
        addressLocality: 'Winter Park',
        addressRegion: 'FL',
        postalCode: '32789',
        addressCountry: 'US'
      },
      areaServed: [
        { '@type': 'State', name: 'Florida' },
        { '@type': 'State', name: 'Illinois' }
      ]
    };
    var testimonials = PIL_CONTENT.testimonials || [];
    if (testimonials.length) {
      org.aggregateRating = {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        bestRating: '5',
        reviewCount: String(testimonials.length)
      };
      org.review = testimonials.slice(0, 8).map(function (t) {
        return {
          '@type': 'Review',
          author: { '@type': 'Person', name: t.name },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody: String(t.quote).replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
        };
      });
    }
    return org;
  }

  function breadcrumbJsonLd(items) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map(function (it, i) {
        return { '@type': 'ListItem', position: i + 1, name: it.name, item: it.url };
      })
    };
  }

  function pageJsonLd(vm) {
    var blocks = [orgJsonLd()];

    if (vm.isArticle) {
      blocks.push(breadcrumbJsonLd([
        { name: 'Home', url: absUrl('home') },
        { name: vm.av.h1, url: absUrl(vm.page) }
      ]));
    } else if (vm.isBio) {
      var b = vm.bio;
      var personLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: b.name,
        jobTitle: b.role,
        url: absUrl('bio:' + b.slug),
        worksFor: { '@type': 'LegalService', name: 'Property Insurance Law PLLC' },
        description: b.positioning
      };
      var photo = imgUrl('pil-bio-' + b.slug);
      if (photo) personLd.image = siteUrl + photo;
      if (b.practiceAreas && b.practiceAreas.length) personLd.knowsAbout = b.practiceAreas;
      blocks.push(personLd);
      blocks.push(breadcrumbJsonLd([
        { name: 'Home', url: absUrl('home') },
        { name: 'Our Attorneys', url: absUrl('attorneys') },
        { name: b.name, url: absUrl('bio:' + b.slug) }
      ]));
    } else if (vm.isFaq) {
      var mainEntity = [];
      (vm.faqData.groups || []).forEach(function (grp) {
        (grp.items || []).forEach(function (it) {
          mainEntity.push({
            '@type': 'Question',
            name: it.q,
            acceptedAnswer: { '@type': 'Answer', text: String(it.a || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim() }
          });
        });
      });
      blocks.push({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: mainEntity });
    } else if (vm.isPolicies) {
      blocks.push(breadcrumbJsonLd([
        { name: 'Home', url: absUrl('home') },
        { name: 'Law Firm Policies', url: absUrl('policies') }
      ]));
    } else if (vm.isPost) {
      var post = vm.post;
      var articleLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.metaDescription,
        datePublished: post.date,
        dateModified: post.date,
        url: absUrl('post:' + post.slug),
        mainEntityOfPage: absUrl('post:' + post.slug),
        author: { '@type': 'Person', name: post.author },
        publisher: { '@type': 'Organization', name: 'Property Insurance Law PLLC', url: siteUrl + '/' }
      };
      var postPhoto = imgUrl('pil-blog-' + post.slug);
      if (postPhoto) articleLd.image = siteUrl + postPhoto;
      blocks.push(articleLd);
      blocks.push(breadcrumbJsonLd([
        { name: 'Home', url: absUrl('home') },
        { name: 'Blog', url: absUrl('blog') },
        { name: post.title, url: absUrl('post:' + post.slug) }
      ]));
    }

    return blocks.map(ldScript).join('\n');
  }

  return {
    buildVM: buildVM,
    renderPage: renderPage,
    pageTitle: pageTitle,
    pageDescription: pageDescription,
    pageOgImage: pageOgImage,
    pageJsonLd: pageJsonLd,
    header: header,
    mobileMenu: mobileMenu,
    closingCta: closingCta,
    footer: footer,
    mobileCall: mobileCall
  };
};
