const express = require("express");
const router = express.Router();

const {
  getInstagramArticles,
  addInstagramArticle,
  deleteInstagramArticle,
} = require("../controllers/instagramController");

router.get("/", getInstagramArticles);
router.post("/", addInstagramArticle);
router.delete("/:id", deleteInstagramArticle);

module.exports = router;