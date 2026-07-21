const express = require("express");
const router = express.Router();

const {
  addWhatsAppVideo,
  getWhatsAppVideos,
  deleteWhatsAppVideo,
} = require("../controllers/whatsappVideoController");

// Add WhatsApp Video
router.post("/", addWhatsAppVideo);

// Get All WhatsApp Videos
router.get("/", getWhatsAppVideos);

// Delete WhatsApp Video
router.delete("/:id", deleteWhatsAppVideo);

module.exports = router;