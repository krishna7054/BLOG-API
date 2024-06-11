const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

const postRoutes = require('./routes/postRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(bodyParser.json());
app.use('/api', postRoutes);
app.use('/api', authRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
