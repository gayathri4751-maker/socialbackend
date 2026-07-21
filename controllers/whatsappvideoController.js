const WhatsAppVideo = require("../models/WhatsAppVideo");

// Add WhatsApp Video
const addWhatsAppVideo = async (req, res) => {
  try {
    const { title, description, videoUrl } = req.body;

    const newVideo = new WhatsAppVideo({
      title,
      description,
      videoUrl,
    });

    await newVideo.save();

    res.status(201).json({
      success: true,
      message: "WhatsApp video added successfully",
      data: newVideo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All WhatsApp Videos
const getWhatsAppVideos = async (req, res) => {
  try {
    const videos = await WhatsAppVideo.find().sort({ createdAt: -1 });

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

// Delete WhatsApp Video
const deleteWhatsAppVideo = async (req, res) => {
  try {
    await WhatsAppVideo.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "WhatsApp video deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addWhatsAppVideo,
  getWhatsAppVideos,
  deleteWhatsAppVideo,
};