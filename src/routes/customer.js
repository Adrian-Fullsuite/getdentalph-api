import express from "express";
import {
  createCustomer,
  viewCustomer,
  editCustomer,
  deleteCustomer,
} from "../controller/customer_controller.js";

const router = express.Router();

router.post("/customer", createCustomer);
router.get("/customer/view/:id", viewCustomer);
router.patch("/customer/edit/:id", editCustomer);
router.delete("/customer/remove/:id", deleteCustomer);

export default router;
