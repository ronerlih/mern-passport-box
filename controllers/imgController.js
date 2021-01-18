const db = require("../models");

module.exports = {
    create: function (req, res) {
        if (req.files === null) {
            return res.status(400).json({ msg: 'No file uploaded' });
          }
          
        db.Image
        .create({reco_pic: { data:req.files.file.data, contentType:req.files.file.mimetype } })
        // .then(({_id}) => db.User.findById({_id: req.user._id}).then(d => db.Recos.find({username: d.username}).limit(1).sort({$natural:-1}).updateOne({ $push: { reco_pic: _id } })))
        .then(({_id}) => db.User.findById({_id: req.user._id}).then(d => db.Recos.find({username: d.username}).limit(1).sort({$natural:-1})).then(d => db.Recos.findByIdAndUpdate({_id: d[0]._id}, {$set:{reco_pic: _id}}, {new: true})))
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}