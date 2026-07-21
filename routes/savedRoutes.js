const express = require("express");
const router = express.Router();

const {
  saveArticle,
  getSavedArticles,
} = require("../controllers/savedControllers");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, saveArticle);
router.get("/", authMiddleware, getSavedArticles);

module.exports = router;