import express from "express";

const router = express.Router();

router.post("/authenticate", (req, res) => {
  res.send(req.body);
});

export default router;
