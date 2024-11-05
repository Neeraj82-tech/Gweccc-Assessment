const cors = require('cors');
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configure CORS with the specific origin
app.use(cors({
  origin: 'https://gweccc2025-neeraj.netlify.app/', // Replace with your frontend URL
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));



const Registration = require('./Registration');

// POST route to save registration data
app.post('/api/register', async (req, res) => {
  try {
    const registration = new Registration(req.body);
    await registration.save();
    res.status(201).send('Registration successful');
  } catch (err) {
    res.status(400).send('Error saving registration');
  }
});


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Could not connect to MongoDB', err));

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
