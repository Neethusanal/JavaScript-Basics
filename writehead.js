const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/set-header') {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Cache-Control', 'no-cache');
    res.end('Using setHeader to set headers.');
  } else if (req.url === '/write-head') {
    res.writeHead(200, 'OK', {
      'Content-Type': 'text/plain',
      'Cache-Control': 'no-cache'
    });
    res.end('Using writeHead to set headers.');
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
