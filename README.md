## book-notes-api
Using API requests, to store book cover ID-s in a relational database.

## About this project

This is a project of mine, which makes API requests to Open Library Covers API (https://openlibrary.org/dev/docs/api/covers), and renders in in an EJS file using Bootstrap elements. The details about the API requests, and the book titles are stored in a PostgreSQL server.

## How to use this project

Step 1 - Download the project as a ZIP folder, and unzip it in your local folder
Step 2 - Setup a local PostgreSQL database server
* Download the PostgreSQL installer from the official website.
* Follow the installation instructions provided in the installer.
* Open the PostgreSQL installation folder and start the PostgreSQL service.
* You can use pgAdmin, a popular PostgreSQL management tool, to interact with the database.
* Remember the password you used to connect to pgAdmin. It will be used to read your local database with Node.
* Once connected to PostgreSQL, run the following command to create a database for the application: CREATE DATABASE your_database_name;
* Create a table to store the API data using the commands in the queries.sql file.
* To add API data use the https://openlibrary.org/dev/docs/api/covers documentation, and the comments mentioned in the queries.sql file.
Step 3 - Setup the .env file
* In the example .env file switch the example data with your PostgreSQL data
* More instructions in the .env file
Step 4 - Setup Node
* Visit the official Node.js website.
* Download the LTS (Long Term Support) version for your operating system.
* Follow the installation instructions provided by the installer.
* Use the terminal, and cd into the main folder of this project.
* Use 'npm i' to install the required node modules to run the program.
* Open a terminal or command prompt.
* Run the following commands to verify that Node.js and npm (Node Package Manager) are installed:
  * node -v
  * npm - v
  * If installed correctly, these commands should display the installed Node.js and npm versions.
* Open a terminal or command prompt.
* Use the cd command to navigate to your project directory:
  * cd path/to/your/project
* Run the following command to install the project dependencies defined in the package.json file:
  * npm install
* Once the dependencies are installed, run the following command to start the local server:
  * npm start
* Open a web browser and navigate to http://localhost:3000 to access your application.
* To stop the local server, go back to the terminal where the server is running and press 'Ctrl + C'.
