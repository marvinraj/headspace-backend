const express = require('express');
const { getPost, createPost, updatePost, deletePost } = require('../controllers/post.controller');

const router = express.Router();

// user views all post
router.get("/", getPost);

// for user create post
router.post("/", createPost);

// for user to update a post
router.put("/:id", updatePost);

// for user delete post
router.delete("/:id",  deletePost);

module.exports = router;