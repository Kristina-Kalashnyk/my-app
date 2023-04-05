# Final project - Organick shop

#####  It's a full stack application created created with technologies stack React + Node.js + SQlite database. 
##### The developed application is an online store where user can purchase various organic products.
##### The frontend and backend parts connect to each other using the REST API and pass data in JSON format. We get data from the database about each product.  Also, the functionality of the site implies that user can add a product to the cart and  data about the buyer will be saved in LocalStorage, after that data about new purchase and the buyer will be saved into the database.

# Getting Started with Project Installation

## Commands to install and run service

To run backend part you have to change directory to backend-service:

`cd backend-service`

Install dependencies via such command:

`npm install`

And finally run backend service using node runServer.js command:

`node .\runServer.js`

This frontend part of the project created via popular fronend React.js Framework
[Create React App](https://github.com/facebook/create-react-app).

To keep running services in parralel you need to open frontend project directory:

`cd frontend`

Install dependencies via such command:

`npm install`

And run frontend using command:

`npm start`

## SQLite

The Database management system used is **SQlite**, that does not require additional data to install and run.
**SQLite** is an in-process  library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine.

The database file is located in the project folder:

`my-app/backend-service/datasources/database.sqlite` 
