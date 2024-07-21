# Authentication System

Welcome to the Authentication System project. This robust and secure system enables users to create personal accounts by signing up with their name, email, and password. User credentials are securely stored in a MySQL database to ensure data integrity and privacy. Upon successful registration, users can log in using their email and password, granting them access to the protected home page. This project demonstrates a seamless integration of React.js for the frontend and Node.js for the backend, with MySQL as the database solution, providing a full-stack authentication system that is both efficient and user-friendly.

***SIGN UP PAGE***
![WhatsApp Image 2024-07-21 at 6 57 17 PM](https://github.com/user-attachments/assets/00579f8c-91ec-402d-8dc4-14c16345cfaa)

***MYSQL (Data record)***
![WhatsApp Image 2024-07-21 at 7 00 07 PM](https://github.com/user-attachments/assets/7100a756-300b-4612-b7e9-a271303a28ba)

***SIGN IN PAGE***
![image](https://github.com/user-attachments/assets/b234d1ac-9166-46ee-a8cc-e06f835f8323)

***HOME PAGE***
![image](https://github.com/user-attachments/assets/be6119c9-4336-4ca8-bb90-7c7b25aea5a7)

# Getting Started
These instructions will guide you through setting up and running the Authentication System project on your local machine for development and testing purposes.

## Prerequisites
Make sure you have the following installed on your system:

Node.js (v14.x or later)

npm (v6.x or later) or yarn (v1.x or later)

MySQL

Git

### Installation

Clone the Repository

Clone the repository to your local machine using Git:

git clone https://github.com/Samreentar/Task02-Authentication-system.git

cd Task02-Authentication-system

### Frontend Setup

Navigate to the frontend directory:

cd frontend

### Install the dependencies:

If you are using npm:

npm install

Or if you are using yarn:

yarn install

### Start the development server:

If you are using npm:

npm run dev
or
npm start

### Open your browser and navigate to:

http://localhost:3000

This will open the application in development mode.

### Backend Setup

Navigate to the backend directory:

cd ../backend

### Install the dependencies:
If you are using npm:

npm install

npm create 

### Create a .env file in the backend directory and add your MySQL database credentials:

DB_HOST=localhost

DB_USER=root

DB_PASSWORD=your_password

DB_NAME=signup

### Start the backend server:

npm start

### MySQL Setup

Ensure your MySQL server is running.

Open WampServer (or your preferred MySQL management tool) and navigate to phpMyAdmin.

Create a database named signup.

### Create a table named login with the following structure:

CREATE TABLE login (

    id INT AUTO_INCREMENT PRIMARY KEY,
    
    name VARCHAR(255) NOT NULL,
    
    email VARCHAR(255) NOT NULL,
    
    password VARCHAR(255) NOT NULL
    
);

### Running the Full Project

With both the frontend and backend servers running, you can now use the Authentication System:

Open your browser and go to http://localhost:3000.

Sign up by entering your name, email, and password.

Log in using your registered email and password to access the home page.





