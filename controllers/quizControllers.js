const Quiz = require("../models/Quiz");

// Get All Quiz Questions
const getQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.find();

    res.status(200).json({
      success: true,
      quiz
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get Single Question
const getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: "Question not found"
      });
    }

    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Add Question
const createQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.create(req.body);

    res.status(201).json({
      success: true,
      quiz
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Update Question
const updateQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      quiz
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Delete Question
const deleteQuiz = async (req, res) => {
  try {
    await Quiz.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Quiz deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  getQuiz,
  getQuizById,
  createQuiz,
  updateQuiz,
  deleteQuiz
};