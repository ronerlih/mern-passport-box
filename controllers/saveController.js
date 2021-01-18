const db = require("../models");

module.exports = {
    findByUser: function(req, res) {
        db.User
        .findById({_id: req.user._id})
        .then(d => res.json(d.saved))
        .catch(err => res.status(422).json(err));
    },
    findAndUpdate: function(req, res) {
        if (!req.user) return res.status(401).end('user isnt authenticated')

        db.User
        .findByIdAndUpdate({_id: req.user._id}, {$push: { saved: req.params.id}}, { new: true})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}