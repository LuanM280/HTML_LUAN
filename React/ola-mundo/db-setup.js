const mysql = require('mysql2/promise');

async function run() {
  try {
    const conn = await mysql.createConnection({ host: 'localhost', port: 3306, user: 'root', password: '' });
    await conn.query('CREATE DATABASE IF NOT EXISTS `test-ia`');
    await conn.query('USE `test-ia`');
    await conn.query(`
      CREATE TABLE IF NOT EXISTS clientes (
        id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
        nome text NOT NULL,
        email text DEFAULT NULL,
        criado_em datetime DEFAULT current_timestamp(),
        PRIMARY KEY (id),
        UNIQUE KEY id (id)
      ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci
    `);
    console.log('✅ Banco de dados test-ia e tabela clientes garantidos com sucesso no XAMPP na porta 3306!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Erro:', err.message);
    process.exit(1);
  }
}
run();
