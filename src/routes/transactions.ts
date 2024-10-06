import express from "express";
const router = express.Router();

// check health
router.get("/health", (req, res) => {
  res.send("Server is running!!");
});

router.get("/accounts", (req, res) => {
  res.send({ data: "Account information" });
});

export default router;
