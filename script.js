const http = require('http');

// Replace with your deployed site's URL (make sure it is accessible)
const url = 'http://your-web-app-name.azurewebsites.net';  // Replace this with your URL

const options = {
  hostname: 'your-web-app-name.azurewebsites.net', // Use your actual domain or Azure app name
  port: 80,
  path: '/',
  method: 'GET',
};

const req = http.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);

  if (res.statusCode === 200) {
    console.log('Website is up and running!');
    process.exit(0); // Successful exit (CI/CD will succeed)
  } else {
    console.log('Website returned an unexpected status code:', res.statusCode);
    process.exit(1); // Failure (CI/CD will fail)
  }
});

req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
  process.exit(1); // Failure (CI/CD will fail)
});

req.end();
