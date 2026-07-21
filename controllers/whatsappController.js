const WhatsApp = require("../models/WhatsApp");

// Get All WhatsApp Articles
exports.getWhatsAppArticles = async (req, res) => {
  try {
    const articles = await WhatsApp.find().sort({ createdAt: -1 });

    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch WhatsApp articles",
      error: error.message,
    });
  }
};

// Add WhatsApp Article
exports.addWhatsAppArticle = async (req, res) => {
  try {
    const { title, content } = req.body;

    const article = new WhatsApp({
      title,
      content,
    });

    await article.save();

    res.status(201).json({
      message: "WhatsApp article added successfully",
      article,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add WhatsApp article",
      error: error.message,
    });
  }
};

// Delete WhatsApp Article
exports.deleteWhatsAppArticle = async (req, res) => {
  try {
    await WhatsApp.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "WhatsApp article deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete WhatsApp article",
      error: error.message,
    });
  }
};