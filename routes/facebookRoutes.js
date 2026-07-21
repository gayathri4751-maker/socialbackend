const express = require("express");
const router = express.Router();

const {
  getFacebookArticles,
  addFacebookArticle,
  deleteFacebookArticle,
} = require("../controllers/facebookController");

router.get("/", getFacebookArticles);
router.post("/", addFacebookArticle);
router.delete("/:id", deleteFacebookArticle);

module.exports = router;