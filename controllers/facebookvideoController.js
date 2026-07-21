const FacebookVideo = require("../models/FacebookVideo");

// Add Facebook Video
const addFacebookVideo = async (req, res) => {
  try {
    const { title, description, videoUrl } = req.body;

    const newVideo = new FacebookVideo({
      title,
      description,
      videoUrl,
    });

    await newVideo.save();

    res.status(201).json({
      success: true,
      message: "Facebook video added successfully",
      data: newVideo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Facebook Videos
const getFacebookVideos = async (req, res) => {
  try {
    const videos = await FacebookVideo.find().sort({ createdAt: -1 });

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

// Delete Facebook Video
const deleteFacebookVideo = async (req, res) => {
  try {
    await FacebookVideo.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Video deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addFacebookVideo,
  getFacebookVideos,
  deleteFacebookVideo,
};