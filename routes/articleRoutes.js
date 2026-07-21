const express = require("express");
const router = express.Router();

const {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle
} = require("../controllers/articleController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

// Public Routes
router.get("/", getArticles);
router.get("/:id", getArticleById);

// Admin Routes
router.post("/", authMiddleware, adminMiddleware, createArticle);
router.put("/:id", authMiddleware, adminMiddleware, updateArticle);
router.delete("/:id", authMiddleware, adminMiddleware, deleteArticle);

module.exports = router;