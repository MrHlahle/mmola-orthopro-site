const express = require('express');
const router = express.Router();
const Device = require('../models/Device');

// @route POST /api/devices
router.post('/', async (req, res) => {
  try {
    const device = new Device(req.body);
    await device.save();
    res.json(device);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// @route GET /api/devices
router.get('/', async (req, res) => {
  try {
    const devices = await Device.find();
    res.json(devices);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
