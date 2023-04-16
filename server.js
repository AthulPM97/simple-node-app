const http = require('http');

const hostname = '127.0.0.1'; // the IP address or hostname of the server
const port = 3000; // the port to listen on

// create a new HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// start listening on the specified port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});