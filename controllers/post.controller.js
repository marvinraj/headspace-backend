const Post = require('../models/post.model')

const getPost = async (req, res) => {
    // catch error, if theres any, if not view all post
    try {
        const posts = await Post.find({})
        res.status(200).json({ success: true, data: posts })
    } catch(error) {
        console.log("error in fetching all posts")
        res.status(500).json({ success: false, message: "server error" });
    }
}

const createPost = async (req, res) => {

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
}

const updatePost = async (req, res) => {
    // destructure id
    const { id } = req.params;

    const post = req.body;

    // catch error, if theres any, if not update post
    try {
        const updatedPost = await Post.findByIdAndUpdate(id, post, {new:true});
        res.status(200).json({ success: true, data: updatedPost})
    } catch(error) {
        res.status(500).json({ success: false, message: "server error" })
    }
}

const deletePost = async (req, res) => {
    // destructure id
    const { id } = req.params;
    
    // catch error, if theres any, if not delete post
    try{
        await Post.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "post deleted" })
    } catch(error) {
        res.status(404).json({ success: false, message: "post not found" })
    }
}

module.exports = { getPost, createPost, updatePost, deletePost }