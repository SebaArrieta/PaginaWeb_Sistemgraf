const mysql = require('mysql2');
const fs = require('fs');

// Configura los parámetros de la base de datos
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT,
  ssl: {
      ca: fs.readFileSync(process.env.CA_CERT), // Your CA certificate content
      rejectUnauthorized: true, // Ensures the client validates the server's certificate
  }
});

// Conecta a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL en DigitalOcean');
});

module.exports = connection;