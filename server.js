const express = require('express');
const dotenv = require("dotenv").config();
const connectDB = require('./config/db');
const postRoutes  = require('./routes/post.route');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // allows us to accept json data in the req.body (middleware)

app.use("/api/posts", postRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log("server started at http://localhost:" + PORT);
})