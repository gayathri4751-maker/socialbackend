const express = require("express");
const router = express.Router();

const {
  addInstagramVideo,
  getInstagramVideos,
  deleteInstagramVideo,
} = require("../controllers/instagramVideoController");

// Add Instagram Video
router.post("/", addInstagramVideo);

// Get All Instagram Videos
router.get("/", getInstagramVideos);

// Delete Instagram Video
router.delete("/:id", deleteInstagramVideo);

module.exports = router;