## Sprint Challenge Authentication

- [ ] Answer questions in Answers.md
- [ ] Decide how you will tackle the problem
- [ ] Fork and Clone this repository.
- [ ] CD into the root project, delete yarn lock and ```npm install``` bcrypt body-parser cors express jsonwebtoken mongoose node-fetch
- [ ] Run ```npm start``` to run nodemon and run mongod, in separate windows.  
- [ ] Create userSchema (username must be unique and required, and password).
- [ ] Bcrypt to set up a “pre” hook on “save” function.   
- [ ] Set up “checkPassword” method to compare the password.
- [ ] Implement api/controllers/user.js. Create user with encrypted password.
- [ ] Implement login
- [ ] Send GET request up to /api/jokes with the appropriate header and token.

### Stretch Problems
- [ ] Set up cors properly in server.js
- [ ] Using React and React Router, create a Sign up, Sign in and Jokes pages
- [ ] Style
