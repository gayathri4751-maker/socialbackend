const Facebook = require("../models/Facebook");

// Get All Facebook Articles
exports.getFacebookArticles = async (req, res) => {
  try {
    const articles = await Facebook.find().sort({ createdAt: -1 });
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch Facebook articles",
      error: error.message,
    });
  }
};

// Add Facebook Article
exports.addFacebookArticle = async (req, res) => {
  try {
    const { title, content } = req.body;

    const article = new Facebook({
      title,
      content,
    });

    await article.save();

    res.status(201).json({
      message: "Facebook article added successfully",
      article,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add Facebook article",
      error: error.message,
    });
  }
};

// Delete Facebook Article
exports.deleteFacebookArticle = async (req, res) => {
  try {
    await Facebook.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Facebook article deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete Facebook article",
      error: error.message,
    });
  }
};