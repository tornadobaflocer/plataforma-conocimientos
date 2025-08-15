const express = require('express');
const Tutorial = require('../models/Tutorial');

const router = express.Router();

// Crear un nuevo tutorial
router.post('/', async (req, res) => {
    const tutorial = new Tutorial(req.body);
    try {
        const savedTutorial = await tutorial.save();
        res.status(201).send(savedTutorial);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Obtener todos los tutoriales
router.get('/', async (req, res) => {
    try {
        const tutorials = await Tutorial.find();
        res.send(tutorials);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;