## Sprint Challenge Authentication

- [x] Fork and Clone this repository.
- [x] Answer questions in Answers.md
- [x] Decide how you will tackle the problem
- [x] CD into the root project, delete yarn lock and ```npm install``` bcrypt body-parser cors express jsonwebtoken mongoose node-fetch
- [x] Run ```npm start``` to run nodemon and run mongod, in separate windows.  
- [x] Create userSchema (username must be unique and required, and password).
- [ ] Bcrypt to set up a “pre” hook on “save” function.   
- [ ] Set up “checkPassword” method to compare the password.
- [ ] Implement api/controllers/user.js. Create user with encrypted password.
- [ ] Implement login
- [ ] Send GET request up to /api/jokes with the appropriate header and token.

### Stretch Problems
- [ ] Set up cors properly in server.js
- [ ] Using React and React Router, create a Sign up, Sign in and Jokes pages
- [ ] Style
