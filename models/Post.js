
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
	username: { type: String, required: true },
	photo: { type: String, required: true },
	link: { type:String, required: true},
	discpription: { type: String, required: true},
	keywords: { type: String, required: true},
	date: { type: Date, default: Date.now },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
