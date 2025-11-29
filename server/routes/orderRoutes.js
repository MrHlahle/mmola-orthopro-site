import express from "express";
import { auth } from "../middleware/auth.js";
import { admin } from "../middleware/admin.js";
import {
  createOrder,
  getUserOrders,
  getAllOrders,
  updateOrder
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/create", auth, createOrder);
router.get("/user/:userId", auth, getUserOrders);
router.get("/all", auth, admin, getAllOrders);
router.patch("/update/:orderId", auth, admin, updateOrder);

export default router;
