const YouTubeVideo = require("../models/YouTubeVideo");

// Add YouTube Video
const addYouTubeVideo = async (req, res) => {
  try {
    const { title, description, videoUrl } = req.body;

    const newVideo = new YouTubeVideo({
      title,
      description,
      videoUrl,
    });

    await newVideo.save();

    res.status(201).json({
      success: true,
      message: "YouTube video added successfully",
      data: newVideo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All YouTube Videos
const getYouTubeVideos = async (req, res) => {
  try {
    const videos = await YouTubeVideo.find().sort({ createdAt: -1 });

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

// Delete YouTube Video
const deleteYouTubeVideo = async (req, res) => {
  try {
    await YouTubeVideo.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "YouTube video deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addYouTubeVideo,
  getYouTubeVideos,
  deleteYouTubeVideo,
};