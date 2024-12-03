const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'http://trusted-domain.com', // Zezwala na dostęp tylko z tej domeny
  methods: ['GET', 'POST'], // Akceptowane metody
  allowedHeaders: ['Content-Type', 'Authorization'], // Dozwolone nagłówki
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello, CORS is enabled!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
