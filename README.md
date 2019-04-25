# Invoice-me

Aplikacja pozwala na zarządzanie fakturami; archiwizacja, wystawianie faktur. Ma proste zabezpieczenie w pstaci panelu logowania użytkownika. 

# Logowanie:

    Nazwa użytkownika: Admin,
    Login: admin@admin.pl
    Hasło: 1234admin


# Technologie i paczki:

- React
- ES6
- json-server

- react-number-format

# Podstawowe funkcjonalności:

- logowanie
- zapisywanie danych w json

# To do:

- rejestracja nowego użytkownika w aplikacji. Na razie możemy tylko logować się jako już dodany użytkownik.
- input mask - walidacja pól formularza pod kątem dozwolonych znaków, formatów wpisywania np. dla kodu pocztowego czy nipu.
- kalkultor walutowy, jeśli chcielibyśmy wystawić fakturę w obcej walucie.
- zarządzanie fakturami i kontrahentami, tj. dodawanie, usuwanie, modyfikowanie danych

# Instalacja i uruchomienie:

- Pobierz repozytorium i zainstaluj node_modules za pomocą polecenia _**npm i**_
- Zainstaluj json server za pomocą polecenia: _**npm install -g json-server**_
- Uruchom watchery dla aplikacji oraz pliku danych. Użyj poleceń:
    - npm start
    - json-server -p 3001  ./src/data/data.json


