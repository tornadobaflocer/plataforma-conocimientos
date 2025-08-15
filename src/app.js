const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const tutorialRoutes = require('./routes/tutorials');
const userRoutes = require('./routes/users');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/plataforma-conocimientos', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('No se pudo conectar a MongoDB', err));

app.use('/api/tutorials', tutorialRoutes);
app.use('/api/users', userRoutes);

module.exports = app;