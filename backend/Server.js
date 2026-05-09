const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// This helps to get IP if you are behind a proxy like Nginx or Vercel
app.set('trust proxy', true);

const filePath = path.join(__dirname, 'messages.json');

app.post('/api/contact', (req, res) => {
    // Collect User IP and Device Info (User Agent)
    const userIp = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const deviceFingerprint = req.headers['user-agent']; 
    const { name, email, message, captchaToken } = req.body;
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=6LcOS-EsAAAAAJmuNhJQ2BP_kOjm8iGPqvQep9PS&response=${captchaToken}`;

    const newMessage = {
        id: Date.now(),
        ...req.body,
        metadata: {
            ip: userIp,
            device: deviceFingerprint, // Here you get OS, Browser, and Device Model
        },
        date: new Date().toLocaleString()
    };

    fs.readFile(filePath, 'utf8', (err, data) => {
        let messages = [];
        if (!err && data) {
            try {
                messages = JSON.parse(data);
            } catch (e) {
                messages = [];
            }
        }

        messages.push(newMessage);

        fs.writeFile(filePath, JSON.stringify(messages, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ success: false, error: 'File Write Error' });
            }
            res.status(201).json({ success: true, message: 'Message saved with device info!' });
        });
    });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));