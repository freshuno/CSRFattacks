const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors'); // Dodajemy CORS

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// "Fake" database
const userDatabase = {
  user1: { username: 'user1', password: '12345' }
};

// Middleware for fake authentication
app.use((req, res, next) => {
  const username = req.cookies.username;
  if (username && userDatabase[username]) {
    req.user = userDatabase[username];
  }
  next();
});

app.use(
  cors({
    origin: 'http://localhost:3001', // Zezwalamy TYLKO na zapytania z portu 3001
    credentials: true, // Włączamy obsługę ciasteczek
  })
);

// Strona główna
app.get('/', (req, res) => {
  if (req.user) {
    res.send(`
      <h1>Witaj, ${req.user.username}!</h1>
      <p>Twoje hasło to: ${req.user.password}</p>
      <a href="/change-password">Zmień hasło</a>
      <br><br>
      <a href="/logout">Wyloguj</a>
    `);
  } else {
    res.send(`
      <h1>Witaj!</h1>
      <p>Nie jesteś zalogowany. <a href="/login">Zaloguj się</a></p>
    `);
  }
});

// Strona logowania
app.get('/login', (req, res) => {
  res.send(`
    <form method="POST" action="/login">
      <label>Username: <input type="text" name="username" /></label><br>
      <label>Password: <input type="password" name="password" /></label><br>
      <button type="submit">Zaloguj</button>
    </form>
  `);
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (userDatabase[username] && userDatabase[username].password === password) {
    res.cookie('username', username, { httpOnly: true, sameSite: 'Strict' });
    res.redirect('/');
  } else {
    res.send('<p>Niepoprawne dane logowania. <a href="/login">Spróbuj ponownie</a></p>');
  }
});

// Logout
app.get('/logout', (req, res) => {
  res.clearCookie('username');
  res.redirect('/');
});

// Zmiana hasła
app.get('/change-password', (req, res) => {
  if (!req.user) {
    res.redirect('/login');
    return;
  }
  res.send(`
    <h1>Zmień hasło</h1>
    <form method="POST" action="/change-password">
      <label>Nowe hasło: <input type="password" name="newPassword" /></label><br>
      <button type="submit">Zmień</button>
    </form>
  `);
});

app.post('/change-password', (req, res) => {
  if (!req.user) {
    res.redirect('/login');
    return;
  }
  const { newPassword } = req.body;
  req.user.password = newPassword;
  res.send('<p>Hasło zostało zmienione! <a href="/">Powrót do strony głównej</a></p>');
});

// Start aplikacji
app.listen(3000, () => {
  console.log('Aplikacja działa na http://localhost:3000');
});
