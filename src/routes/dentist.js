import express from "express";

const router = express.Router();

router.post("/dentist", (req, res) => {});
router.get("/dentist/view/:id", (req, res) => {});
router.patch("/dentist/edit/:id", (req, res) => {});
router.delete("/dentist/remove/:id", (req, res) => {});

export default router;
