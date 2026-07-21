const express = require("express");
const router = express.Router();

const {
  addFacebookVideo,
  getFacebookVideos,
  deleteFacebookVideo,
} = require("../controllers/facebookVideoController");

// Add Facebook Video
router.post("/", addFacebookVideo);

// Get All Facebook Videos
router.get("/", getFacebookVideos);

// Delete Facebook Video
router.delete("/:id", deleteFacebookVideo);

module.exports = router;