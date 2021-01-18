const db = require("../models");

module.exports = {
    findAndUpdate: function(req, res) {
        if (!req.user) return res.status(401).end('user isnt authenticated')

        db.User
        .findByIdAndUpdate({_id: req.user._id}, {$push: { saved: req.params.id}}, { new: true})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}