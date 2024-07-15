const express = require('express');
const { Teacher } = require('../models');

const router = express.Router();

// Route to create a new teacher
router.post('/add-teacher', async (req, res) => {
  try {
    const {     
        fullname,
        specialization,
        experience,
        days_of_availability,
        method_of_receiving,
        receiving_availability } = req.body;

    const teacher = await Teacher.create({fullname,specialization,experience,days_of_availability,method_of_receiving,receiving_availability });
    res.status(201).json(teacher);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


module.exports = router;
