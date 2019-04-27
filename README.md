# Invoice-me

Aplikacja pozwala na zarządzanie fakturami; archiwizacja, wystawianie faktur. 
Ma proste zabezpieczenie w postaci panelu logowania użytkownika. 

# Logowanie:

    Nazwa użytkownika: Admin,
    Login: admin@admin.pl
    Hasło: 1234admin


# Technologie i paczki:

- React
- ES6
- SASS
- json-server
- react-create-app (https://github.com/facebook/create-react-app)
- react-number-format (https://github.com/s-yadav/react-number-format) 
- react-router (https://github.com/ReactTraining/react-router)

# Podstawowe funkcjonalności:

- logowanie
- dodawanie i usuwanie danych do pliku json

# To do:

- rejestracja nowego użytkownika w aplikacji. Na razie możemy tylko logować się jako już dodany użytkownik.
- input mask - walidacja pól formularza pod kątem dozwolonych znaków, formatów wpisywania np. dla kodu pocztowego czy nipu.
- kalkultor walutowy, jeśli chcielibyśmy wystawić fakturę w obcej walucie.
- modyfikowanie danych kontrahentów, produktów i faktur

# Instalacja i uruchomienie:

- git clone https://github.com/TomekMojsiuk/invoice-generator.git

- Pobierz repozytorium i zainstaluj node_modules za pomocą polecenia _**npm i**_
- Zainstaluj json server za pomocą polecenia: _**npm install -g json-server**_
- Uruchom watchery dla aplikacji oraz pliku danych. Użyj poleceń:
    - npm start
    - json-server -p 3001  ./src/data/data.json


