const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recosSchema = new Schema({
	reco_pic: { data: Buffer, contentType: String },
});

const Image = mongoose.model("Image", recosSchema);

module.exports = Image;