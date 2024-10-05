const express = require('express');
const dotenv = require("dotenv");
const connectDB = require('./config/db');
const Post = require('./models/post.model')

dotenv.config();

const app = express();
const port = 5000;

app.use(express.json()); // allows us to accept json data in the req.body (middleware)

// homepage
app.get("/", (req, res) => {
    res.send("server is up and running!")
})

// user views all post
app.get("/api/posts", async (req, res) => {
    // catch error, if theres any, if not view all post
    try {
        const posts = await Post.find({})
        res.status(200).json({ success: true, data: posts })
    } catch(error) {
        console.log("error in fetching all posts")
        res.status(500).json({ success: false, message: "server error" });
    }
})

// for user create post
app.post("/api/posts", async (req, res) => {

    // user sends this
    const post = req.body; 

    // checks if user fills in all field
    if(!post.thoughts || !post.emotion || !post.image) {
        return res.status(400).json({ success: false, message: "please provide details for all fields." });
    }

    // create new post
    const newPost = new Post(post);

    // catch error, if theres any, if not create post
    try {
        await newPost.save();
        res.status(201).json({ success: true, data: newPost });
    } catch (error) {
        console.error("error in create post: ", error.message);
        res.status(500).json({ success: false, message: "server error" });
    }
});

// for user delete post
app.delete("/api/posts/:id",  async (req, res) => {
    // destructure id
    const { id } = req.params;
    
    // catch error, if theres any, if not delete post
    try{
        await Post.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "post deleted" })
    } catch(error) {
        res.status(404).json({ success: false, message: "post not found" })
    }
})

app.listen(port, () => {
    connectDB();
    console.log("server started at http://localhost:5000");
})