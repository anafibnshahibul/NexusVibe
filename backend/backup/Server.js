const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Trust proxy for getting correct IP addresses
app.set('trust proxy', true);

// File paths defined correctly at the top level
const messagesPath = path.join(__dirname, 'messages.json');
const analyticsPath = path.join(__dirname, 'analytics.json'); // This was missing or misplaced!

// --- Contact Form Route ---
app.post('/api/contact', (req, res) => {
    const userIp = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const userAgent = req.headers['user-agent'];
    const { name, email, message } = req.body;

    const newMessage = {
        id: Date.now(),
        ...req.body,
        metadata: { ip: userIp, device: userAgent },
        date: new Date().toLocaleString()
    };

    fs.readFile(messagesPath, 'utf8', (err, data) => {
        let messages = [];
        if (!err && data) {
            try { messages = JSON.parse(data); } catch (e) { messages = []; }
        }
        messages.push(newMessage);
        fs.writeFile(messagesPath, JSON.stringify(messages, null, 2), (err) => {
            if (err) return res.status(500).json({ success: false });
            res.status(201).json({ success: true });
        });
    });
});

// --- User Analytics Route ---
app.post('/api/analytics', (req, res) => {
    const userIp = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const userAgent = req.headers['user-agent'];
    
    const visitData = {
        timestamp: new Date().toLocaleString(),
        ip: userIp,
        device: userAgent,
        page: req.body.page,
        action: "Page Entry"
    };

    app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
    }));

    // Fix: Create the file if it doesn't exist
    if (!fs.existsSync(analyticsPath)) {
        fs.writeFileSync(analyticsPath, JSON.stringify([]));
    }

    fs.readFile(analyticsPath, 'utf8', (err, data) => {
        let logs = [];
        if (!err && data) {
            try { logs = JSON.parse(data); } catch (e) { logs = []; }
        }
        
        logs.push(visitData);
        
        fs.writeFile(analyticsPath, JSON.stringify(logs, null, 2), (err) => {
            if (err) {
                console.error("Error:", err);
                return res.status(500).json({ success: false });
            }
            // Now this will show in your terminal when someone visits
            console.log(`Tracked visit to: ${req.body.page}`);
            res.status(200).json({ success: true });
        });
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📁 Analytics will be saved to: ${analyticsPath}`);
});