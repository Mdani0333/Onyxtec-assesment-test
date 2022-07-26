--->Project_07-27(1)_HD 720p_MEDIUM_FR30.mp4 is a 4-min demo video.
-->Technologies used:
Frontend: React.js
API: Express.js (node.js)
DataBase: MongoDB

-->Instructions:
*server runs on localhost port 8080--command line to start: 'npm start'.(make sure the directory is .../backend/)
*Database MongoDB is an online free cluster on mongoDB atlas therefore must have internet connection before running server.
*React runs on localhost port 3000--command line for start script: 'npm run start'.(make sure the directory is .../frontend/)

-->files:
->.../backend/models ___ for Schema's
->.../backend/routes ___ for route middlewares
->.../backend/index.js ___ main server file
->.../backend/db.js ___ mongoose connection
->.../frontend/src/components/context-hook ___ context hooks for cart and products array
->.../frontend/src/components/forms ___ login and signup forms
->.../frontend/src/components/pages ___ contains all pages --- store.js, view.js, welcome.js, etc. 

-->Some Extra features Added*:
->Form validation and Server validation of fields are added for both Login and SignUp forms
which will show almost every type of error. E.g: If username or password is invalid it will show password or username is invalid
or If username already exist with an email then show username already exist with this email.
->A product details page is added which will show the details of product when you click on any product in store page.
->Navbar contains a <span> element which will show whether you are logged in or not. E.g: it will red when you are not logged in
and green when you are logged in.
-If a product is already in cart the if you try to add it then it will show an error.
->SignUp form will create a new user and navigate to /login form. 
->Application is dealing with realtime data from database therefore it will not be lost on refresh.
->click on cross icon in cart to delete item from cart.
->add to cart button in both view.js(product view page) and store.js(main store page for all products) will add item 
to cart.


-->Login credentials OR you can SignUp and then login your own credentials.
username= Adnan Manzoor
email= adnanmanzoor0333@gmail.com
password = Madnan786*



