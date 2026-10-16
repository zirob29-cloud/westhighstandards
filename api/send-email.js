export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({error: 'Method not allowed'});
  const { to, subject, text } = req.body || {};
  if (!to) return res.status(400).json({ error: 'Missing "to" address' });

  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  if (!SENDGRID_API_KEY) return res.status(500).json({ error: 'SendGrid API key not configured on the server (SENDGRID_API_KEY)' });

  const payload = {
    personalizations: [{ to: [{ email: to }] }],
    from: { email: 'orders@westhighstandards.com', name: 'West High Standards' },
    subject: subject || 'Test email from West High Standards',
    content: [{ type: 'text/plain', value: text || 'Test email from West High Standards' }]
  };

  try {
    const r = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    if (r.ok) return res.status(200).json({ ok: true });
    const body = await r.text();
    return res.status(502).json({ ok: false, status: r.status, body });
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message });
  }
}
