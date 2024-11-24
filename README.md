# Zabezpieczanie aplikacji przed atakami Cross-Site Request Forgery (CSRF)

## Część Teoretyczna
  - [Prezentacja](https://docs.google.com/presentation/d/e/2PACX-1vToHIr1hRaL1ku4UmKCd3Pu1uDdPcLfJpg5tObTrX16LpoDLaZ8ooopOuBMeBTGAzwP4EmD6DeFPYq_/pub)
  - [Lesson about CSRF Attacks | Tutorial & Examples](https://learn.snyk.io/lesson/csrf-attack/)
  - [Cross Site Request Forgery (CSRF) | LinkedIn](https://www.linkedin.com/pulse/cross-site-request-forgery-csrf-syed-muhammad-abdul-karim/)
## Część Praktyczna

## Zadanie 1: 

**Cel:** Zrozumienie mechanizmu działania ataku CSRF.

### Kroki:
1. **Zainstaluj Node.js i NPM, jeśli jeszcze ich nie masz.**

2. **Zainstaluj wymagane pakiety:**
   ```console
   npm install express body-parser cookie-parser
   ```
3. **Uruchom aplikację:**
   - Utwórz folder, w którym będą przechowywane pliki aplikacji.
   - Pobierz plik [vulnerable.js](https://github.com/freshuno/CSRFattacks/blob/main/vulnerable.js), jest to wersja aplikacji wrażliwa na ataki CSRF. Przenieś ten plik do folderu który stworzyłeś.
   - Przejdź w Terminalu do folderu, w którym znajdują się pliki aplikacji.
   - Uruchom aplikację za pomocą:
     ```console
     node vulnerable.js
     ```
   - Wejdź w przeglądarce na adres aplikacji (domyślnie http://localhost:3000/)
5. **Sprawdź podatność aplikacji na atak CSRF:**
   - Zaloguj się do aplikacji używając tych danych: nazwa użytkownika: user1 hasło: 12345
   - Pobierz plik [attack.html](https://github.com/freshuno/CSRFattacks/blob/main/attack.html), będzie nam służył do przeprowadzania ataków CSRF. Przeanalizuj jego zawartość.
   - W osobnej karcie otwórz plik `attack.html`.
   - (Opcjonalne) Otwórz narzędzie do przechwytywania żądań HTTP (np. Burp) i przechwyć żądanie wysyłane przez formularz w `attack.html` po kliknięciu Wykonaj atak. Przeanalizuj jego zawartość.
   - Naciśnij na stronie przycisk Wykonaj atak.
   - Odśwież stronę aplikacji i zauważ, że hasło zostało zmienione. Następnie zatrzymaj aplikację za pomocą skrótu klawiszowego Ctrl + C w Terminalu.
  
## Zadanie 2: 

**Cel:** Zapoznanie się z mechanizmem tokenów CSRF i ich implementacją.

### Kroki:
1. **Zainstaluj bibliotekę csurf.**
   ```console
   npm install csurf
   ```
2. **Dodaj zmodyfikowany plik aplikacji.**
   - Pobierz plik [tokens.js](https://github.com/freshuno/CSRFattacks/blob/main/tokens.js).
   - Dodaj go do folderu z aplikacją.
   - Przeanalizuj ten plik i zobacz jakie zaszły zmiany, będą one zaznaczone.
3. **Uruchom nową wersję aplikacji.**
   - Uruchom aplikację za pomocą tej komendy:
     ```console
     node tokens.js
     ```
   - Zaloguj się i spróbuj tak jak wcześniej zmienić hasło za pomocą `attack.html`.
   - Dzięki wykorzystaniu tokenów CSRF próba ataku zakończyła się niepowodzeniem.
   - Zatrzymaj aplikację za pomocą skrótu klawiszowego Ctrl + C w Terminalu.
## Zadanie 3: 

**Cel:** Poznanie mechanizmu SameSite cookies i jego zastosowania w ochronie przed atakami CSRF.

### Kroki:
1. **Zainstaluj bibliotekę express-session.**
   ```console
   npm install express-session
   ```
2. **Dodaj zmodyfikowany plik aplikacji.**
   - Pobierz plik [sameSite.js](https://github.com/freshuno/CSRFattacks/blob/main/sameSite.js).
   - Dodaj go do folderu z aplikacją.
   - Przeanalizuj ten plik i zobacz jakie zaszły zmiany, będą one zaznaczone.
3. **Uruchom nową wersję aplikacji.**
   - Uruchom aplikację za pomocą tej komendy:
     ```console
     node sameSite.js
     ```
   - Zaloguj się i spróbuj tak jak wcześniej zmienić hasło za pomocą `attack.html`.
   - Dzięki wykorzystaniu SameSite cookies powinniśmy zostać przekierowani na stronę logowania, zatem próba ataku zakończyła się niepowodzeniem.


