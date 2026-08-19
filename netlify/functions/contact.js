// Netlify serverless function backing the "Free Claim Review" contact form.
// Requires these env vars set in Netlify (Site settings > Environment variables), never committed:
//   RESEND_API_KEY   - from resend.com
//   CONTACT_TO_EMAIL - inbox that should receive new leads
//   CONTACT_FROM_EMAIL - optional, must be on a domain verified in Resend
//                        (falls back to Resend's shared sandbox sender, which only
//                        delivers to the Resend account owner's own address)

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN = { name: 200, phone: 40, email: 200, claimType: 100, message: 5000 };

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

function clean(v, max) {
  return String(v == null ? '' : v).trim().slice(0, max);
}

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let data;
  try {
    data = JSON.parse(event.body || '{}');
  } catch (e) {
    return { statusCode: 400, body: JSON.stringify({ ok: false, error: 'Invalid JSON' }) };
  }

  // Honeypot: bots that fill every field trip this hidden one. Report success without sending.
  if (data._gotcha) {
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  }

  const name = clean(data.name, MAX_LEN.name);
  const phone = clean(data.phone, MAX_LEN.phone);
  const email = clean(data.email, MAX_LEN.email);
  const claimType = clean(data.claimType, MAX_LEN.claimType);
  const message = clean(data.message, MAX_LEN.message);
  const consent = !!data.consent;

  if (!name || !email || !consent) {
    return { statusCode: 400, body: JSON.stringify({ ok: false, error: 'Missing required fields' }) };
  }
  if (!EMAIL_RE.test(email)) {
    return { statusCode: 400, body: JSON.stringify({ ok: false, error: 'Invalid email' }) };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'PILF Website <onboarding@resend.dev>';
  if (!apiKey || !toEmail) {
    console.error('contact function misconfigured: missing RESEND_API_KEY or CONTACT_TO_EMAIL');
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: 'Server not configured' }) };
  }

  const html =
    '<h2>New claim review request</h2>' +
    '<p><strong>Name:</strong> ' + escapeHtml(name) + '</p>' +
    '<p><strong>Email:</strong> ' + escapeHtml(email) + '</p>' +
    '<p><strong>Phone:</strong> ' + escapeHtml(phone || '—') + '</p>' +
    '<p><strong>Claim type:</strong> ' + escapeHtml(claimType || '—') + '</p>' +
    '<p><strong>Message:</strong><br>' + escapeHtml(message || '—').replace(/\n/g, '<br>') + '</p>';

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: 'New claim review request — ' + name,
        html: html
      })
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('Resend error', res.status, errText);
      return { statusCode: 502, body: JSON.stringify({ ok: false, error: 'Email send failed' }) };
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error('contact function error', err);
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: 'Unexpected error' }) };
  }
};
