
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recosSchema = new Schema({
	username: { type: String, required: true },
	photo: { type: String, required: true, trim: true },
	link: { type:String, required: true, trim: true },
	discpription: { type: String, required: true, trim: true },
	keywords: { type: String, required: true, trim: true },
	date: { type: Date, default: Date.now },
});

const Recos = mongoose.model("Recos", recosSchema);

module.exports = Recos;
