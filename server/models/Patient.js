const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  name: String,
  surname: String,
  maritalStatus: String,
  idNumber: String,
  birthDate: Date,
  homeLanguage: String,
  nextOfKin: {
    name: String,
    contactNumber: String
  },
  occupation: String,
  address: {
    street: String,
    postalCode: String,
    city: String
  },
  workAddress: String,
  employer: String,
  medicalAid: {
    name: String,
    membershipNumber: String,
    mainMember: {
      name: String,
      idNumber: String
    }
  },
  referredBy: {
    name: String,
    contactNumber: String
  },
  termsAccepted: Boolean,
  signedAt: Date,
  signature: String
}, { timestamps: true });

module.exports = mongoose.models.Patient || mongoose.model('Patient', PatientSchema);
