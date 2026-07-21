const express = require("express");
const router = express.Router();

const {
  getWhatsAppArticles,
  addWhatsAppArticle,
  deleteWhatsAppArticle,
} = require("../controllers/whatsappController");

router.get("/", getWhatsAppArticles);
router.post("/", addWhatsAppArticle);
router.delete("/:id", deleteWhatsAppArticle);

module.exports = router;