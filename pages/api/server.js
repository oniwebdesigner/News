const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Krijo një aplikacion Express
const app = express();
app.use(bodyParser.json());

// Krijo një lidhje me bazën e dhënash MongoDB
mongoose.connect('mongodb://localhost:27017/newsletter', { useNewUrlParser: true, useUnifiedTopology: true });

// Krijo një model për të dhënat e formës
const FormSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

const Form = mongoose.model('Form', FormSchema);

// API për të pranuar të dhënat e formës
app.post('/api/submit', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const formEntry = new Form({ name, email, message });
    await formEntry.save();
    res.status(201).json({ message: 'Data saved successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving data' });
  }
});

// Nise serverin
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
