const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Render cung cấp biến môi trường này
  ssl: {
    rejectUnauthorized: false, // bắt buộc khi dùng Render
  },
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
