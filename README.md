# Task-3-Leggera

A simple login/signup application with React frontend, Node.js/Express backend, and MySQL database.

## 🛠️ Prerequisites

Before you begin, ensure you have installed the following:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MySQL](https://dev.mysql.com/downloads/mysql/) (v8.0 or higher)

## 🚀 Installation

1. **Set up the backend**
   ```bash
   cd backend
   npm install
   ```

2. **Set up the frontend**
   ```bash
   cd ../client
   npm install
   ```

## 🗄️ Database Setup

1. **Create a MySQL database**
   ```sql
   CREATE DATABASE auth_db;
   USE auth_db;
   
   CREATE TABLE users (
     id INT AUTO_INCREMENT PRIMARY KEY,
     username VARCHAR(50) NOT NULL,
     email VARCHAR(100) NOT NULL UNIQUE,
     password VARCHAR(255) NOT NULL, 
   );
   ```

2. **Configure database connection**
   - Open `backend/.env` (create if it doesn't exist)
   - Add your database credentials:
     ```
     DB_HOST=localhost
     DB_USER=your_username
     DB_PASSWORD=your_password
     DB_NAME=auth_db
     ```

## 🏃‍♂️ Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```
   The server will run on `http://localhost:5000`

2. **Start the frontend development server**
   ```bash
   cd ../client
   npm start
   ```
   The application will open in your default browser at `http://localhost:3000`
