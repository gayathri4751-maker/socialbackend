const express = require("express");
const router = express.Router();

const {
  getYouTubeArticles,
  addYouTubeArticle,
  deleteYouTubeArticle,
} = require("../controllers/youtubeController");

router.get("/", getYouTubeArticles);
router.post("/", addYouTubeArticle);
router.delete("/:id", deleteYouTubeArticle);

module.exports = router;