# Zabezpieczenie aplikacji przed atakami CSRF

## Część Teoretyczna
### Źródła
- [Lesson about CSRF Attacks](https://learn.snyk.io/lesson/csrf-attack/)
- [CSRF Article](https://www.linkedin.com/pulse/cross-site-request-forgery-csrf-syed-muhammad-abdul-karim/)
### Prezentacja
- [Link do prezentacji]()
- [Link do prezentacji w przeglądarce]()
## Część Praktyczna

## Zadanie 1: 

**Cel:** Nauka działania prostego ataku CSRF

### Kroki:
1. **Zainstaluj Node.js i NPM, jeśli jeszcze ich nie masz.**

2. **Zainstaluj wymagane pakiety:**
   ```xml
   npm install express body-parser cookie-parser
   ```
3. **Uruchom aplikacje:**
   - Przejdź w CMD do folderu w którym masz pliki aplikacji.
   - Uruchom aplikacje za pomocą tej komendy:
   ```xml
   node vulnerable.js
   ```
   - Wejdź w przeglądarce na adres http://localhost:3000/
4. **Sprawdź podatność aplikacji na atak CSRF:**
   - Zaloguj się do aplikacji używając tych danych: nazwa użytkownika: user1 hasło: 12345
   - W osobnej karcie otwórz plik attack.html
   - Sprawdź zawartość tego pliku, kiedy się z nią zapoznasz naciśnij na stronie przycisk Wykonaj atak.
   - Odśwież http://localhost:3000/ i zauważ że hasło zostało zmienione.


