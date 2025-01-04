const http = require('http');

const server = http.createServer(async (req, res) => {
  try {
    // Simulate an asynchronous operation that might fail
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve('Success!');
        } else {
          reject(new Error('Simulated asynchronous error'));
        }
      }, 1000);
    });

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(result);
  } catch (error) {
    console.error('Error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});