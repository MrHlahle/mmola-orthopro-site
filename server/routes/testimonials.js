const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');

// @route POST /api/testimonials
router.post('/', async (req, res) => {
  try {
    const testimonial = new Testimonial(req.body);
    await testimonial.save();
    res.json(testimonial);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// @route GET /api/testimonials
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
