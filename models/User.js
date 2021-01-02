const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    required: true,
    type: String,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  comments: [
   {
     type: mongoose.Types.ObjectId,
     ref: "Comment"
   }
 ]
  // ..anything else you want on your user
});

//hashing a password before saving it to the database
UserSchema.pre('save', function (next) {
  const user = this;
  bcrypt.hash(user.password, 14, function (err, hash){
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

// Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
UserSchema.methods.validPassword = function (password) {
   return bcrypt.compareSync(password, this.password);
};
const User = mongoose.model('User', UserSchema);
User.createIndexes();

module.exports = User;