const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Use the environment variable for MongoDB URI
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/demo';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));

app.get('/', (req, res) => {
  res.send('This is just a demo on Docker Compose for a BACKEND container running created by Syed Tousif');
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});

