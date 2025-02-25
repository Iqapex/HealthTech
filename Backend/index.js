require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true,
    }
)); // Enable CORS
app.use(express.json()); // Parse JSON bodies
app.use(morgan("common")); // Logging
app.use(helmet()); // Security headers
app.use(fileUpload()); // File upload handling

// Database Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB connection error:", err));


// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
 // Authentication routes
// Add other routes here (e.g., users, posts, etc.)

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});