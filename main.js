const express = require("express");
const app = express();
app.use(express.json());
var cors = require('cors');
const replyToTweets = require("./api/tweets/replyToTweets.router");


app.use(cors({
    credentials: true
}));







app.use("/api/replyToTweets", replyToTweets);





app.listen(3000, () => {
    console.log("server running on port:", 3000);
})