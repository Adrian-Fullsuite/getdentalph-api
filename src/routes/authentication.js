import express from "express";
import {
  customerAuth,
  dentistAuth,
} from "../controller/authentication_controller.js";

const router = express.Router();

router.post("/customer/authenticate", customerAuth);
router.post("/dentist/authenticate", dentistAuth);

export default router;
