const express = require('express');
const { Receiving } = require('../models');

const router = express.Router();

// Route to create a new receiving
router.post('/add-schedule', async (req, res) => {
  try {
    const { description, date_time_of_receiving, teacher_interested, studentId } = req.body;
    const receiving = await Receiving.create({ 
      description, 
      date_time_of_receiving,
      teacher_interested,
      studentId 
    });
    res.status(201).json(receiving);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to get all receivings
router.get('/', async (req, res) => {
  try {
    const receivings = await Receiving.findAll({});
    res.status(200).json(receivings);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
