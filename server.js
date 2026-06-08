const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/')));

app.post('/contact', (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    console.log('Contact submission received:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);

    return res.json({ status: 'success', message: 'Thank you for reaching out. I will contact you shortly.' });
});

app.get('*', (req, res, next) => {
    // If the request looks like a file (has an extension), pass to static middleware
    if (path.extname(req.path)) return next();
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Portfolio server running at http://localhost:${port}`);
});
