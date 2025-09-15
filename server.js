const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({
    secret: 'erp-simulator-secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 3600000 } // 1 hour
}));

// Authentication middleware
const requireAuth = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/');
    }
};

// Routes
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    // Dummy authentication - accept any non-empty username/password
    if (username && password) {
        req.session.user = { username };
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

app.get('/api/errors', requireAuth, (req, res) => {
    const errors = [
        {
            code: 'ERR001',
            message: 'Transaction code not found',
            solution: 'Check if the transaction code exists in the system. Common causes include typos or outdated documentation.'
        },
        {
            code: 'ERR002',
            message: 'User authorization error',
            solution: 'Verify user roles and permissions. Contact system administrator for role assignment.'
        },
        {
            code: 'ERR003',
            message: 'Posting period locked',
            solution: 'Check if the posting period is open. Request period reopening from Finance team if needed.'
        },
        {
            code: 'ERR004',
            message: 'Invalid cost center',
            solution: 'Verify cost center validity. Check master data for active cost centers.'
        }
    ];
    
    // Randomly select an error
    const randomError = errors[Math.floor(Math.random() * errors.length)];
    res.json(randomError);
});

app.get('/api/logout', (req, res) => {
    req.session.destroy();
    res.json({ success: true });
});

// Serve the dashboard only to authenticated users
app.get('/dashboard', requireAuth, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
