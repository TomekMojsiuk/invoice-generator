# Invoice-me

The app lets you manage your company's invoices, customers and products. Issue and archive invoices, add, delete and modify your customers and products.

A simple login form is also included in order to implement basic security within the app data.

# Login:

    User name: admin,
    User login: admin@admin.pl
    Password: 1234admin


# Technologies and tools:

- React
- ES6
- SASS
- json-server
- react-create-app (https://github.com/facebook/create-react-app)
- react-number-format (https://github.com/s-yadav/react-number-format) 
- react-router (https://github.com/ReactTraining/react-router)

# Basic functionality:

- login form, data validation
- add, modify or delete products and customers data

# To do:

- New user registration form. For now, a login form has been implemented.
- Validation of form fields - check if provided characters are allowed.
- Currency calculator.
- Client and product data edition.
- Show invoice details on click. For now, the user can see only basic invoice data.
- Print invoice functionality.

# Installation:

- git clone https://github.com/TomekMojsiuk/invoice-generator.git

- Clone and download repository and install node_modules. Use **npm i**_
- Install json server. Use: _**npm install -g json-server**_
- Run react app and json server. For json server use port 3001. Use:
    - npm start
    - json-server -p 3001  ./src/data/data.json


