import express from "express";

const router = express.Router();

router.post("/dental", (req, res) => {});
router.get("/dental/view/:id", (req, res) => {});
router.patch("/dental/edit/:id", (req, res) => {});
router.delete("/dental/remove/:id", (req, res) => {});

export default router;
