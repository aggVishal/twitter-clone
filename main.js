const express = require("express");
const app = express();
app.use(express.json());
var cors = require('cors');
const replyToTweets = require("./api/replyToTweets/replyToTweets.router");


app.use(cors({
    credentials: true
}));







app.use("/api", replyToTweets);





app.listen(3000, () => {
    console.log("server running on port:", 3000);
})