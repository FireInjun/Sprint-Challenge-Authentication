const mongoose = require( 'mongoose' );
const bcrypt = require( 'bcrypt' );
const Schema = mongoose.Schema;

const SALT_ROUNDS = 64;

const UserSchema = Schema( {
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
} );


module.exports = mongoose.model( 'User', UserSchema );
