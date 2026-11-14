const { getDatabase } = require('../lib/database');

module.exports = async (req, res) => {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const resource = String(req.query?.resource || 'services');
  if (!['services', 'projects'].includes(resource)) {
    return res.status(400).json({ error: 'Unknown resource' });
  }

  try {
    const db = await getDatabase();
    const data = await db.collection(resource).find({});
    return res.status(200).json({ data });
  } catch (error) {
    console.error('services API error:', error.message);
    return res.status(500).json({ error: 'Unable to load studio content' });
  }
};
