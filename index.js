// const express = require('express');

// const app = express();
// let requestCount = 0;

// // You have been given an express server which has a few endpoints.
// // Your task is to create a global middleware (app.use) which will
// // maintain a count of the number of requests made to the server in the global
// // requestCount variable

// app.use(function(req, res, next) {
//   requestCount = requestCount + 1;
//   next();
// });

// app.get('/user', function(req, res) {
//   res.status(200).json({ name: 'john' });
// });

// app.post('/user', function(req, res) {
//   res.status(200).json({ msg: 'created dummy user' });
// });

// app.get('/requestCount', function(req, res) {
//   res.status(200).json({ requestCount });
// });

// module.exports = app;

const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(8);

function signJwt(username, password) {
  try {
    const validatedEmail = emailSchema.parse(username);
    const validatedPassword = passwordSchema.parse(password);

    const signature = jwt.sign({ username: validatedEmail }, jwtPassword);
    return signature;
  } catch (error) {
    console.error("Error signing JWT:", error.message);
    return null;
  }
}

const ans = signJwt("tugrpexample.com", "password");

console.log(ans);

function decodeJwt() {
  const decoded = jwt.decode(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InR1Z3JwQGV4YW1wbGUuY29tIiwiaWF0IjoxNzEzNjcyNDk4fQ.YoX86s1_QUVBfSDEpZxBj3t8187v5cTM0iurXOg7qAQ",
  );

  if (decoded) {
    return true;
  } else {
    return false;
  }
}

console.log(decodeJwt());
function verfiyJwt(token) {
  const verified = jwt.verify(token, jwtPassword);
  if (verified) {
    return true;
  } else {
    return false;
  }
}

console.log(verfiyJwt);
