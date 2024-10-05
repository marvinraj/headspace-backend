const express = require('express');
const dotenv = require("dotenv");
const connectDB = require('./config/db');

dotenv.config();

const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("server is up and running!")
})

app.listen(5000, () => {
    connectDB();
    console.log("server started at http://localhost:5000");
})