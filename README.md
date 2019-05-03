# Invoice-me

Aplikacja pozwala na zarządzanie fakturami, klientami i produktami; archiwizacja, wystawianie faktur, dodawanie i usuwanie produktów i klientów.
Ma proste zabezpieczenie w postaci panelu logowania użytkownika.

# Logowanie:

    Nazwa użytkownika: admin,
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

- logowanie użytkownika
- dodawanie i usuwanie danych produktów i klientów

# To do:

- rejestracja nowego użytkownika w aplikacji. Na razie możemy tylko logować się jako już dodany użytkownik.
- walidacja pól formularza pod kątem dozwolonych znaków, formatów wpisywania np. dla kodu pocztowego czy nipu.
- kalkultor walutowy, jeśli chcielibyśmy wystawić fakturę w obcej walucie.
- modyfikowanie danych kontrahentów, produktów i faktur
- wyświetlanie szczegółów faktury po kliknięciu w daną fakturę na liście. Popup z opcją drukowania faktury
- przeniesienie danych do zewnętrznej bazy, np. firebase

# Instalacja i uruchomienie:

- git clone https://github.com/TomekMojsiuk/invoice-generator.git

- Pobierz repozytorium i zainstaluj node_modules za pomocą polecenia _**npm i**_
- Zainstaluj json server za pomocą polecenia: _**npm install -g json-server**_
- Uruchom watchery dla aplikacji oraz pliku danych. Pamiętaj, żeby uruchomić json server na porcie 3001. Użyj poleceń:
    - npm start
    - json-server -p 3001  ./src/data/data.json


