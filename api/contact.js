const { getDatabase } = require('../lib/database');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const name = String(req.body?.name || '').trim().slice(0, 100);
  const email = String(req.body?.email || '').trim().slice(0, 254);
  const message = String(req.body?.message || '').trim().slice(0, 4000);
  const service = String(req.body?.service || '').trim().slice(0, 120);
  const budget = String(req.body?.budget || '').trim().slice(0, 80);

  if (name.length < 2 || !/^\S+@\S+\.\S+$/.test(email) || message.length < 10) {
    return res.status(400).json({ error: 'Enter your name, a valid email, and a message of at least 10 characters.' });
  }

  try {
    const db = await getDatabase();
    await db.collection('contact_messages').insert({ name, email, message, service, budget, status: 'new' });
    return res.status(201).json({ success: true, message: 'Message received. Thanks for reaching out.' });
  } catch (error) {
    console.error('contact API error:', error.message);
    return res.status(500).json({ error: 'The message could not be saved. Please try again later.' });
  }
};
