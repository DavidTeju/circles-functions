import {onRequest} from "firebase-functions/v2/https";
import express from "express";


const app = express();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.get("/circles/:username/feed", (req, res) => {
});

exports.helloWorld = onRequest(app);
