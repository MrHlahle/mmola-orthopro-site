import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  patientName: String,
  device: String,
  status: {
    type: String,
    default: "Order Received",
    enum: [
      "Order Received",
      "Approved",
      "Device Ordered",
      "In Production",
      "Ready for Collection",
      "Delivered"
    ]
  },
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
