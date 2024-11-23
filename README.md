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

**Cel:** Zrozumienie mechanizmu działania ataku CSRF.

### Kroki:
1. **Zainstaluj Node.js i NPM, jeśli jeszcze ich nie masz.**

2. **Zainstaluj wymagane pakiety:**
   ```xml
   npm install express body-parser cookie-parser
   ```
3. **Uruchom aplikacje:**
   - Utwórz folder, w którym będą przechowywane pliki aplikacji.
   - Pobierz plik [vulnerable.js](https://github.com/freshuno/CSRFattacks/blob/main/vulnerable.js), jest to wersja aplikacji wrażliwa na ataki CSRF. Przenieś ten plik do folderu który stworzyłeś.
   - Przejdź w CMD do folderu w którym masz pliki aplikacji.
   - Uruchom aplikacje za pomocą tej komendy:
   ```xml
   node vulnerable.js
   ```
   - Wejdź w przeglądarce na adres http://localhost:3000/
5. **Sprawdź podatność aplikacji na atak CSRF:**
   - Zaloguj się do aplikacji używając tych danych: nazwa użytkownika: user1 hasło: 12345
   - Pobierz plik [attack.html](https://github.com/freshuno/CSRFattacks/blob/main/attack.html), będzie on nam służył do przeprowadzania ataków CSRF. Przeanalizuj jego zawartość.
   - W osobnej karcie otwórz plik `attack.html`.
   - (Opcjonalne) Otwórz narzędzie do przechwytywania żądań HTTP (np. Burp) i przechwyć żądanie wysyłane przez formularz w attack.html po kliknięciu Wykonaj atak. Przeanalizuj jego zawartość.
   - Naciśnij na stronie przycisk Wykonaj atak.
   - Odśwież http://localhost:3000/ i zauważ że hasło zostało zmienione. Następnie zatrzymaj aplikację za pomocą skrótu klawiszowego Ctrl + C w CMD.
  
## Zadanie 2: 

**Cel:** Zapoznanie się z mechanizmem tokenów CSRF i ich implementacją.

### Kroki:
1. **Zainstaluj bibliotekę csurf.**
    ```xml
   npm install csurf
   ```
2. **Dodaj zmodyfikowany plik aplikacji.**
   - Pobierz plik [tokens.js](https://github.com/freshuno/CSRFattacks/blob/main/tokens.js).
   - Dodaj go do folderu z aplikacją.
   - Przeanalizuj ten plik i zobacz jakie zaszły zmiany, będą one zaznaczone.
3. **Uruchom nową wersję aplikacji.**
   - Uruchom aplikację za pomocą tej komendy:
    ```xml
   node tokens.js
   ```
   - Zaloguj się i spróbuj tak jak wcześniej zmienić hasło za pomocą `attack.html`.
   - Dzięki wykorzystaniu tokenów CSRF próba ataku zakończyła się niepowodzeniem.
   - Zatrzymaj aplikację za pomocą skrótu klawiszowego Ctrl + C w CMD.
## Zadanie 3: 

**Cel:** Poznanie mechanizmu SameSite cookies i jego zastosowania w ochronie przed CSRF.

### Kroki:
1. **Zainstaluj bibliotekę express-session.**
    ```xml
   npm install express-session
   ```
2. **Dodaj zmodyfikowany plik aplikacji.**
   - Pobierz plik [sameSite.js](https://github.com/freshuno/CSRFattacks/blob/main/sameSite.js).
   - Dodaj go do folderu z aplikacją.
   - Przeanalizuj ten plik i zobacz jakie zaszły zmiany, będą one zaznaczone.
3. **Uruchom nową wersję aplikacji.**
   - Uruchom aplikację za pomocą tej komendy:
    ```xml
   node sameSite.js
   ```
   - Zaloguj się i spróbuj tak jak wcześniej zmienić hasło za pomocą `attack.html`.
   - Dzięki wykorzystaniu SameSite Cookies powinniśmy zostać przekierowani na stronę logowania, zatem próba ataku zakończyła się niepowodzeniem.


