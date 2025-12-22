const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json()); // allow JSON in requests

mongoose.connect("YOUR_MONGODB_CONNECTION_STRING")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Database connection error:", err));


const coursesRouter = require('./routes/courses');
app.use('/courses', coursesRouter);

app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
