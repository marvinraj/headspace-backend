const express = require('express');
const dotenv = require("dotenv");
const connectDB = require('./config/db');
const postRoutes  = require('./routes/post.route');

dotenv.config();

const app = express();
const port = 5000;

app.use(express.json()); // allows us to accept json data in the req.body (middleware)

app.use("/api/posts", postRoutes)

app.listen(port, () => {
    connectDB();
    console.log("server started at http://localhost:5000");
})