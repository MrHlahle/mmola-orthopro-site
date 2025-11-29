const mongoose = require('mongoose');

const DeviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
  imageUrl: String,
  medicalAidAccepted: Boolean,
  cashAvailable: Boolean
}, { timestamps: true });

module.exports = mongoose.models.Device || mongoose.model('Device', DeviceSchema);
