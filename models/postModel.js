const db = require('../config/db');

const Post = {
  create: (title, content, userId, callback) => {
    const sql = 'INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)';
    db.query(sql, [title, content, userId], callback);
  },
  findAll: (callback) => {
    const sql = 'SELECT * FROM posts';
    db.query(sql, callback);
  },
  findById: (id, callback) => {
    const sql = 'SELECT * FROM posts WHERE id = ?';
    db.query(sql, [id], callback);
  },
  update: (id, title, content, callback) => {
    const sql = 'UPDATE posts SET title = ?, content = ? WHERE id = ?';
    db.query(sql, [title, content, id], callback);
  },
  delete: (id, callback) => {
    const sql = 'DELETE FROM posts WHERE id = ?';
    db.query(sql, [id], callback);
  }
};

module.exports = Post;
