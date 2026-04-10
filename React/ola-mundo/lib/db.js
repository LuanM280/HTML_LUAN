import mysql from 'mysql2/promise';

let pool;

try {
  pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test-ia',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
  console.log("🛠️ MySQL Connection Pool Initialized");
} catch (error) {
  console.error("Failed to initialize MySQL Connection Pool:", error);
}

export default pool;
