This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


# Invoice-me

Aplikacja pozwala na zarządzanie fakturami; archiwizacja, wystawianie faktur. Ma proste zabezpieczenie w pstaci panelu logowania użytkownika. 

# Logowanie:

    Nazwa użytkownika: Admin,
    Login: admin@admin.pl
    Hasło: 1234admin


# Technologie:

- React
- ES6
- json-server

# Podstawowe funkcjonalności:

- logowanie
- zapisywanie danych w json

# To do:

- rejestracja nowego użytkownika w aplikacji. Na razie możemy tylko logować się jako już dodany użytkownik.
- input mask - walidacja pól formularza pod kątem dozwolonych znaków, formatów wpisywania np. dla kodu pocztowego czy nipu.
- kalkultor walutowy, jeśli chcielibyśmy wystawić fakturę w obcej walucie.
- zarządzanie fakturami i kontrahentami, tj. dodawanie,
- podpiąć json server i bazy danych pod aplikację, żeby można było je modyfikować.

#Instalacja i uruchomienie:

- Pobierz repozytorium i zainstaluj node_modules za pomocą polecenia _**npm i**_
- Zainstaluj json server za pomocą polecenia: _**npm install -g json-server**_
- Uruchom watchery dla aplikacji oraz danych. Użyj poleceń:
    - npm start
    - json-server -p 3001  ./src/data/users.json
    - json-server -p 3002  ./src/data/invoices.json


