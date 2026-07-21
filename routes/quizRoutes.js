const express = require("express");
const router = express.Router();

const {
  getQuiz,
  getQuizById,
  createQuiz,
  updateQuiz,
  deleteQuiz
} = require("../controllers/quizControllers");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

// Public Routes
router.get("/", getQuiz);
router.get("/:id", getQuizById);

// Admin Routes
router.post("/", authMiddleware, adminMiddleware, createQuiz);
router.put("/:id", authMiddleware, adminMiddleware, updateQuiz);
router.delete("/:id", authMiddleware, adminMiddleware, deleteQuiz);

module.exports = router;