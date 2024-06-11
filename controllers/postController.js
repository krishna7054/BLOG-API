const Post = require('../models/postModel');

exports.createPost = (req, res) => {
  const { title, content } = req.body;
  const userId = req.userId;
  if (!title || !content) return res.status(400).send('Title and content are required');
  Post.create(title, content, userId, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send('Post created');
  });
};

exports.getAllPosts = (req, res) => {
  Post.findAll((err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(results);
  });
};

exports.getPostById = (req, res) => {
  const { id } = req.params;
  Post.findById(id, (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.length === 0) return res.status(404).send('Post not found');
    res.status(200).json(result[0]);
  });
};

exports.updatePost = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  if (!title || !content) return res.status(400).send('Title and content are required');
  Post.update(id, title, content, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).send('Post updated');
  });
};

exports.deletePost = (req, res) => {
  const { id } = req.params;
  Post.delete(id, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).send('Post deleted');
  });
};
