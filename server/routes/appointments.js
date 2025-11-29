const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// @route POST /api/appointments
router.post('/', async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.json(appointment);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// @route GET /api/appointments
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find().populate('patient');
    res.json(appointments);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
