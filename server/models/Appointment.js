const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  doctor: String,
  date: { type: Date, required: true },
  time: String,
  reason: String,
  status: { type: String, enum: ['pending', 'confirmed', 'completed'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.models.Appointment || mongoose.model('Appointment', AppointmentSchema);

