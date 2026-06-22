const http = require('http');

const HOST = 'localhost';
const PORT = process.env.PORT || 3000;

function request(options, body) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let data = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve({ statusCode: res.statusCode, headers: res.headers, body: data }));
    });
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

async function run() {
  console.log('Running smoke tests against http://' + HOST + ':' + PORT);

  // GET /
  const getOpts = { hostname: HOST, port: PORT, path: '/', method: 'GET' };
  const getRes = await request(getOpts);
  console.log('GET / ->', getRes.statusCode, getRes.headers['content-type']);
  if (getRes.statusCode !== 200) throw new Error('GET / did not return 200');

  // POST /contact
  const payload = JSON.stringify({ name: 'Smoke Tester', email: 'smoke@example.com', subject: 'Smoke', message: 'Hello' });
  const postOpts = {
    hostname: HOST,
    port: PORT,
    path: '/contact',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  const postRes = await request(postOpts, payload);
  console.log('POST /contact ->', postRes.statusCode, postRes.headers['content-type']);
  let parsed = null;
  try { parsed = JSON.parse(postRes.body); } catch (e) { /* ignore */ }
  if (postRes.statusCode !== 200 && postRes.statusCode !== 201) throw new Error('POST /contact failed: ' + postRes.statusCode);
  if (!parsed || parsed.status !== 'success') throw new Error('POST /contact did not return success JSON');

  console.log('\nSmoke tests passed.');
}

run().catch((err) => {
  console.error('Smoke tests failed:', err.message || err);
  process.exit(2);
});
