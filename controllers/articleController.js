const Article = require("../models/Article");

// Get All Articles
const getArticles = async (req, res) => {
  try {
    const articles = await Article.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      articles
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get Single Article
const getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Article not found"
      });
    }

    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create Article
const createArticle = async (req, res) => {
  try {
    const article = await Article.create(req.body);

    res.status(201).json({
      success: true,
      article
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Update Article
const updateArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      article
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Delete Article
const deleteArticle = async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Article deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle
};