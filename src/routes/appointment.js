import express from "express";
import {
  createAppointment,
  viewAppointment,
  editAppointment,
  deleteAppointment,
} from "../controller/appointment_controller.js";

const router = express.Router();

router.post("/appointment/book", createAppointment);
router.get("/appointment/view/:id", viewAppointment);
router.patch("/appointment/edit/:id", editAppointment);
router.delete("/appointment/remove/:id", deleteAppointment);

export default router;
