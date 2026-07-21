const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes"); // 👈 Add this
const articleRoutes = require("./routes/articleRoutes");
const videoRoutes = require("./routes/videoRoutes");
const quizRoutes = require("./routes/quizRoutes");
const savedRoutes = require("./routes/savedRoutes");
const facebookRoutes = require("./routes/facebookRoutes");
const whatsappRoutes = require("./routes/whatsappRoutes");
const instagramRoutes = require("./routes/instagramRoutes");
const youtubeRoutes = require("./routes/youtubeRoutes");
const facebookvideoRoutes = require("./routes/facebookvideoRoutes");
const whatsappvideoRoutes = require("./routes/whatsappvideoRoutes");
const instagramvideoRoutes = require("./routes/instagramvideoRoutes");
const youtubevideoRoutes = require("./routes/youtubevideoRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes); 
app.use("/api/articles", articleRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/saved", savedRoutes);
app.use("/api/facebook", facebookRoutes);
app.use("/api/whatsapp", whatsappRoutes);
app.use("/api/instagram", instagramRoutes);
app.use("/api/youtube", youtubeRoutes);
app.use("/api/facebook-videos", facebookvideoRoutes);
app.use("/api/whatsapp-videos", whatsappvideoRoutes);
app.use("/api/instagram-videos", instagramvideoRoutes);
app.use("/api/youtubevideo", youtubevideoRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Social Media Awareness API",
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});