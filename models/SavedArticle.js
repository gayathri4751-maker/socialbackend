const mongoose = require("mongoose");

const savedArticleSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    category: {
      type: String,
    },

    image: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SavedArticle", savedArticleSchema);