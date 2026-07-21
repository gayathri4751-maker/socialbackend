const Instagram = require("../models/Instagram");

// Get All Instagram Articles
exports.getInstagramArticles = async (req, res) => {
  try {
    const articles = await Instagram.find().sort({ createdAt: -1 });

    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch Instagram articles",
      error: error.message,
    });
  }
};

// Add Instagram Article
exports.addInstagramArticle = async (req, res) => {
  try {
    const { title, content } = req.body;

    const article = new Instagram({
      title,
      content,
    });

    await article.save();

    res.status(201).json({
      message: "Instagram article added successfully",
      article,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add Instagram article",
      error: error.message,
    });
  }
};

// Delete Instagram Article
exports.deleteInstagramArticle = async (req, res) => {
  try {
    await Instagram.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Instagram article deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete Instagram article",
      error: error.message,
    });
  }
};