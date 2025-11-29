const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');

// @route POST /api/patients
router.post('/', async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.json(patient);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// @route GET /api/patients
router.get('/', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
