const express = require("express");
const router = express.Router();

const {
  addYouTubeVideo,
  getYouTubeVideos,
  deleteYouTubeVideo,
} = require("../controllers/youtubeVideoController");

// Add YouTube Video
router.post("/", addYouTubeVideo);

// Get All YouTube Videos
router.get("/", getYouTubeVideos);

// Delete YouTube Video
router.delete("/:id", deleteYouTubeVideo);

module.exports = router;