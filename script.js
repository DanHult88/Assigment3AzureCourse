// Smoke test function to check if the website is up
const https = require('https');

// Function to perform the HTTP GET request
function smokeTest() {
    const url = "https://<your-app-name>.azurewebsites.net"; // Replace with your Azure Web App URL

    https.get(url, (res) => {
        if (res.statusCode === 200) {
            console.log('Smoke test passed!');
        } else {
            console.log(`Smoke test failed with status code: ${res.statusCode}`);
        }
    }).on('error', (e) => {
        console.log(`Error during smoke test: ${e.message}`);
    });
}

// Run the smoke test
smokeTest();
