const express = require('express');
const app = express();
const port = 3002;

// Set the public folder as the static directory
app.use(express.static('public'));

// Route for serving the HTML file
app.get('/', (req, res) => {
    // Send the index.html file located in the public folder
    res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});