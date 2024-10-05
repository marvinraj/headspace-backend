const express = require('express');

const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("server is up and running!")
})

app.listen(5000, () => {
    console.log("server started at http://localhost:5000");
})