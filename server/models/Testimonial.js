const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
  patientName: String,
  message: String,
  imageUrl: String,
  videoUrl: String
}, { timestamps: true });

module.exports = mongoose.models.Testimonial || mongoose.model('Testimonial', TestimonialSchema);

