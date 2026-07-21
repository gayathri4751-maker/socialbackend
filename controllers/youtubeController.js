const YouTube = require("../models/YouTube");

// Get All YouTube Articles
exports.getYouTubeArticles = async (req, res) => {
  try {
    const articles = await YouTube.find().sort({ createdAt: -1 });

    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch YouTube articles",
      error: error.message,
    });
  }
};

// Add YouTube Article
exports.addYouTubeArticle = async (req, res) => {
  try {
    const { title, content } = req.body;

    const article = new YouTube({
      title,
      content,
    });

    await article.save();

    res.status(201).json({
      message: "YouTube article added successfully",
      article,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add YouTube article",
      error: error.message,
    });
  }
};

// Delete YouTube Article
exports.deleteYouTubeArticle = async (req, res) => {
  try {
    await YouTube.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "YouTube article deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete YouTube article",
      error: error.message,
    });
  }
};