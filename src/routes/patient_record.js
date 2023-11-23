import express from "express";
import {
  createPatient,
  viewPatient,
  updatePatient,
  deletePatient,
} from "../controller/patient_record_controller";

const router = express.Router();

router.post("/patient", createPatient);
router.get("/patient/view/:id", viewPatient);
router.patch("/patient/edit/:id", updatePatient);
router.delete("/patient/remove/:id", deletePatient);
