const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 5002;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yourpass',
    database: 'bus_reservation_system'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: true }));

app.use(express.static(path.join(__dirname, '../frontend/public')));

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/public', 'login.html'));
});

app.get('/purchase', (req, res) => {
    if (req.session.user) {
        res.sendFile(path.join(__dirname, '../frontend/public', 'purchase.html'));
    } else {
        res.redirect('/login');
    }
});

app.get('/confirmation', (req, res) => {
    if (req.session.user) {
        res.sendFile(path.join(__dirname, '../frontend/public', 'confirmation.html'));
    } else {
        res.redirect('/login');
    }
});

app.post('/api/signup', (req, res) => {
    const { username, password } = req.body;
    db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err) => {
        if (err) return res.status(500).send('Sign Up Failed');
        res.status(200).send('Sign Up Successful');
    });
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, result) => {
        if (err) return res.status(500).send('Login Failed');
        if (result.length > 0) {
            req.session.user = result[0];
            res.status(200).send('Login Successful');
        } else {
            res.status(401).send('Invalid Credentials');
        }
    });
});

app.post('/api/purchase', (req, res) => {
    const { bus_number, ticket_count } = req.body;
    if (!req.session.user) return res.status(401).send('Not Authenticated');

    const userId = req.session.user.id;
    db.query('SELECT seats_available FROM buses WHERE id = ?', [bus_number], (err, results) => {
        if (err || results.length === 0) {
            console.error('Error fetching seats available:', err);
            return res.status(500).send('Purchase Failed');
        }
        const seatsAvailable = results[0].seats_available;

        if (ticket_count > seatsAvailable) {
            return res.status(400).send('Not Enough Seats Available');
        }

        db.query('INSERT INTO tickets (user_id, bus_id, seats) VALUES (?, ?, ?)', [userId, bus_number, ticket_count], (err) => {
            if (err) {
                console.error('Error inserting ticket:', err);
                return res.status(500).send('Purchase Failed');
            }

            db.query('UPDATE buses SET seats_available = seats_available - ? WHERE id = ?', [ticket_count, bus_number], (err) => {
                if (err) {
                    console.error('Error updating seats available:', err);
                    return res.status(500).send('Purchase Failed');
                }
                res.status(200).send('Purchase Successful');
            });
        });
    });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
