const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cookieParser());

// CORS Configuration
app.use(cors({
    origin: 'http://localhost:4000', 
    methods: ['GET', 'POST'],       
    credentials: true               
}));

// Endpoints
app.get('/', (req, res) => {
    res.send('Witamy na serwerze!');
});

app.post('/change-password', (req, res) => {
    const { password } = req.body;
    if (!password) {
        return res.status(400).send('Nie podano hasła');
    }
    res.send(`Hasło zmienione na: ${password}`);
});

// Start serwera
app.listen(PORT, () => {
    console.log(`Serwer działa na http://localhost:${PORT}`);
});
