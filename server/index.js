require('dotenv').config();

const http = require('node:http');
const contactHandler = require('../api/contact');
const servicesHandler = require('../api/services');

const handlers = {
  '/api/contact': contactHandler,
  '/api/services': servicesHandler,
};

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || '/', 'http://localhost:3001');
  const handler = handlers[url.pathname];

  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Cache-Control', 'no-store');

  if (!handler) {
    res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ error: 'API route not found' }));
    return;
  }

  const query = Object.fromEntries(url.searchParams.entries());
  const request = Object.assign(req, { query, body: undefined });

  if (req.method === 'POST') {
    try {
      let rawBody = '';
      for await (const chunk of req) {
        rawBody += chunk;
        if (rawBody.length > 32_000) {
          res.writeHead(413, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ error: 'Request payload is too large' }));
          return;
        }
      }
      request.body = rawBody ? JSON.parse(rawBody) : {};
    } catch {
      res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ error: 'Invalid JSON body' }));
      return;
    }
  }

  res.status = (code) => {
    res.statusCode = code;
    return res;
  };
  res.json = (payload) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(payload));
    return res;
  };

  try {
    await handler(request, res);
  } catch (error) {
    console.error('local API error:', error.message);
    if (!res.writableEnded) res.status(500).json({ error: 'Internal server error' });
  }
});

const port = Number(process.env.API_PORT || 3001);
server.listen(port, '127.0.0.1', () => {
  console.log(`NexusVibe API ready at http://127.0.0.1:${port}`);
});
