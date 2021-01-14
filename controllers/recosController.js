const db = require("../models");

// Defining methods for the commentsController
module.exports = {
  findAll: function(req, res) {
    db.Recos
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
     console.log(req.params.id)
    db.Recos
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByKeywords: function(req, res) {
    db.Recos
      .find({ reco_keywords: req.params.keywords})
      .then(d => console.log(d))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
     // if no user on the session
     console.log("worked")
     if(!req.user) return res.status(401).end('user isnt authenticated')
    console.log(req.body)
     db.Recos
      .create({username: req.username, reco_name: req.reco_name, reco_pic: req.reco_pic, reco_link: req.reco_link, reco_discription: req.reco_discription, reco_keywords: req.reco_keywords, email: req.user.email})
      .then(({_id}) => db.User.findOneAndUpdate({_id: req.user._id}, { $push: { recos: _id } }, { new: true }))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // update: function(req, res) {
  //    db.Comment
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //    db.Comment
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
  // TO-DO: find by user
};
