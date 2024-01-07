const functions = require("firebase-functions");

// first http request
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Circles!");
});

