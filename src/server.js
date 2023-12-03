const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

// Load existing user data from the data.json file
let users = [];
try {
    const data = fs.readFileSync('data.json');
    users = JSON.parse(data);
} catch (error) {
    console.error('Error reading data from file:', error);
}

app.post('/signup', (req, res) => {
    const formData = req.body;

    // Check if the email is already taken
    const isEmailTaken = users.some((user) => user.email === formData.email);
    if (isEmailTaken) {
        return res.status(400).send('Email is already taken');
    }

    // Add the new user to the array
    users.push(formData);

    // Write the updated data back to the file
    try {
        fs.writeFileSync('data.json', JSON.stringify(users, null, 2));
    } catch (error) {
        console.error('Error writing data to file:', error);
        return res.status(500).send('Internal server error');
    }

    res.send('User signed up successfully');
});

app.post('/login', (req, res) => {
    const loginData = req.body;

    // Check if the provided credentials match any existing user
    const userExists = users.some(
        (user) => user.email === loginData.email && user.password === loginData.password
    );

    if (userExists) {
        res.send('Login successful');
    } else {
        res.status(401).send('Invalid email or password');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
