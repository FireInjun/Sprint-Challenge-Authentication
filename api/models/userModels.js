const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const SALT_ROUNDS = 15;

const UserSchema = Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minlength: 8
  },
  password: {
    type: String,
    required: true,
    minlength: 17 // make this at least 12 in production
  }
});

UserSchema.pre("save", function(next) {
  return bcrypt
    .hash(this.password, SALT_ROUNDS)
    .then(hash => {
      this.password = hash;
      return next();
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

UserSchema.methods.checkPassword = function(plainTextPW, callBack) {
  bcrypt.compare(plainTextPW, this.password, function(err, match) {
    if (err) {
      return callBack(err.message);
    }
    callBack(null, match);
  });
};
module.exports = mongoose.model("User", UserSchema);
