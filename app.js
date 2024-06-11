// app.js
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const postRoutes = require('./routes/postRoutes');
const authRoutes = require('./routes/authRoutes');
const firebase = require('./firebase');

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
