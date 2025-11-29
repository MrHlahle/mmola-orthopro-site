import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  try {
    const order = await Order.create({
      userId: req.user._id,
      ...req.body
    });
    res.json(order);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("userId", "name email");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const updated = await Order.findByIdAndUpdate(
      req.params.orderId,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
