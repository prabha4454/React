const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = 5000;

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// MongoDB Schema and Model
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  phoneNumber: String,
  userImage: String, // Store the file path or URL of the uploaded image
});

const User = mongoose.model("User", userSchema);

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use("/uploads", express.static("uploads")); // Serve uploaded files statically

// Multer Configuration for File Upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory to store uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Unique file name
  },
});

const upload = multer({ storage });

// Route to handle form submission
app.post("/submit", upload.single("userImage"), async (req, res) => {
  const { name, age, phoneNumber } = req.body;
  const userImage = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    // Save data to MongoDB
    const newUser = new User({
      name,
      age,
      phoneNumber,
      userImage,
    });

    const savedUser = await newUser.save();

    res.status(201).json({
      message: "Form submitted and data saved to MongoDB successfully!",
      data: savedUser,
    });
  } catch (error) {
    console.error("Error saving data to MongoDB:", error);
    res.status(500).json({ message: "Error saving data", error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
