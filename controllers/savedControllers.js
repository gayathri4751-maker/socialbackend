const SavedArticle = require("../models/SavedArticle");

exports.saveArticle = async (req, res) => {
  try {
    const article = new SavedArticle({
      userId: req.user.id,
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      image: req.body.image,
    });

    await article.save();

    res.status(201).json({ message: "Article Saved" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSavedArticles = async (req, res) => {
  try {
    const articles = await SavedArticle.find({
      userId: req.user.id,
    });

    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};