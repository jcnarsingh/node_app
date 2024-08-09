const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',       // Replace with your MySQL host, usually 'localhost'
  user: 'your_username',   // Replace with your MySQL username
  password: 'your_password', // Replace with your MySQL password
  database: 'your_database_name' // Replace with your database name
});

// Open the MySQL connection
connection.connect(error => {
  if (error) {
    console.error('Error connecting to the database:', error);
    return;
  }
  console.log('Successfully connected to the database.');
});

// Export the connection for use in other modules
module.exports = connection;