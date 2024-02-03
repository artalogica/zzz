const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const MongoClient = require('mongodb').MongoClient;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
 secret: 'your-secret-key',
 resave: true,
 saveUninitialized: true
}));
const port = 8081; // Replace with your desired port number
// MongoDB connection string
const dbURL = `mongodb+srv://suli:tartanhacks2024@zzzcluster.qj0ouxr.mongodb.net/`

// Connect to MongoDB
MongoClient.connect(dbUrl, (err, client) => {
    if (err) throw err;
    const db = client.db('login-page');
    const usersCollection = db.collection('users');
   // Login route
    app.post('/login', (req, res) => {
    const { email, password } = req.body;
   usersCollection.findOne({ email }, (err, user) => {
    if (err) throw err;
   // User not found
    if (!user) {
    return res.status(401).send('Invalid email or password');
    }
   // Compare the provided password with the hashed password stored in the database
    bcrypt.compare(password, user.password, (err, result) => {
    if (err) throw err;
   if (result) {
    // Store user data in session
    req.session.user = user;
    res.redirect('/dashboard'); // Redirect to the dashboard page after successful login
    } else {
    res.status(401).send('Invalid email or password');
    }
    });
    });
    });
   // Start the server
    app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    });
   });

   
