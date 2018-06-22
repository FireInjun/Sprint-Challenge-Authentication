const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  if ( !username || !password )
  {
    res.status( 400 ).json( { message: "Some Required fields haven't been filled out." } )
  }
  const user = new User( { username, password } );
  user
    .save()
    .then( response =>
    {
      res.status( 201 ).json( user );
    } )
    .catch( err =>
    {
      res.status( 500 ).json( { error: err.message } );
    } );
};

module.exports = {
  createUser
};
