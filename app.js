const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., HTML, CSS)
app.use(express.static('public'));

// Render the login form (assuming you have a login.html file in your 'public' folder)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

// Handle login form submission
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Simple check (in real applications, use a database)
    if (username === 'user' && password === 'password') {
        res.send('Login successful!');
    } else {
        res.send('Login failed! Invalid username or password.');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});