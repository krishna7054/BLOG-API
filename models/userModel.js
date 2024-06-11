const db = require('../config/db');
const bcrypt = require('bcryptjs');

const User = {
  create: (username, password, callback) => {
    const hashedPassword = bcrypt.hashSync(password, 8);
    const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(sql, [username, hashedPassword], callback);
  },
  findByUsername: (username, callback) => {
    const sql = 'SELECT * FROM users WHERE username = ?';
    db.query(sql, [username], callback);
  }
};

module.exports = User;
