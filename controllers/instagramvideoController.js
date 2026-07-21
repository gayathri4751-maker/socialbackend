const InstagramVideo = require("../models/InstagramVideo");

// Add Instagram Video
const addInstagramVideo = async (req, res) => {
  try {
    const { title, description, videoUrl } = req.body;

    const newVideo = new InstagramVideo({
      title,
      description,
      videoUrl,
    });

    await newVideo.save();

    res.status(201).json({
      success: true,
      message: "Instagram video added successfully",
      data: newVideo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Instagram Videos
const getInstagramVideos = async (req, res) => {
  try {
    const videos = await InstagramVideo.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: videos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Instagram Video
const deleteInstagramVideo = async (req, res) => {
  try {
    await InstagramVideo.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Instagram video deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addInstagramVideo,
  getInstagramVideos,
  deleteInstagramVideo,
};