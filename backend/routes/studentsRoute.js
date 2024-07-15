const express = require('express');
const { Student } = require('../models');

const router = express.Router();

// Route to create a new student
router.post('/add-student', async (req, res) => {
  try {
    const {     
        firstname,
        lastname,
        date_of_birth,
        email,
        tel_number } = req.body;

    const student = await Student.create({firstname,lastname,date_of_birth,email,tel_number  });
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to get all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.findAll();
    res.status(200).json(students);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
