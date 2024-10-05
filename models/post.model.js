const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    thoughts:{
        type: String,
        required: true
    },
    emotion:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Post", postSchema)