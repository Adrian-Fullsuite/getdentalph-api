import express from "express";
import {
  createDentist,
  viewDentist,
  editDentist,
  deleteDentist,
} from "../controller/dentist_controller.js";

const router = express.Router();

router.post("/dentist", createDentist);
router.get("/dentist/view/:id", viewDentist);
router.patch("/dentist/edit/:id", editDentist);
router.delete("/dentist/remove/:id", deleteDentist);

export default router;
