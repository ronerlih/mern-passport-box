const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recoSchema = new Schema ({
    reco_name: { type: String, required: true },
    reco_pic: { type: String, required: true },
    reco_link: { type: String, required: true },
    reco_description: { type: String, required: true },
    reco_keywords: { type: String, required: true },
    reco_username: { type: String, required: true }
})

const Recommendation = mongoose.model("Recommendation", recoSchema);

module.exports = Recommendation;

