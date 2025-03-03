const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

// ✅ Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ API Routes
app.use("/api/articles", require("./routes/articles"));

// ✅ Basic Route
app.get("/", (req, res) => {
    res.send("Server is running. Use /api/articles to get news articles.");
});

// ✅ Start Server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
