const http = require('http');

http.get('http://localhost:3000', (res) => {
  let data = '';

  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    if (res.statusCode === 200 && data.includes('quote')) {
      console.log("Test passed!");
      process.exit(0);
    } else {
      console.error("Test failed.");
      process.exit(1);
    }
  });
}).on('error', err => {
  console.error("Error: ", err.message);
  process.exit(1);
});
