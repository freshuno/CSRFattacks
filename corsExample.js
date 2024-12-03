const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.get('/data', (req, res) => {
    res.json({ message: 'Dostęp do API jest dozwolony!' });
});

app.listen(3000, () => {
    console.log('Serwer działa na porcie 3000');
});