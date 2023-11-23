import express from "express";
import {
  createTransaction,
  viewTransaction,
  updateTransaction,
  deleteTransaction,
} from "../controller/transaction_controller.js";

const router = express.Router();

router.post("/transaction", createTransaction);
router.get("/transaction/view/:id", viewTransaction);
router.patch("/transaction/update/:id", updateTransaction);
router.delete("/transaction/remove/:id", deleteTransaction);

export default router;
