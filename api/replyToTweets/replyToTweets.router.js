const router = require("express").Router();
const { tweet, replyToTweet, replyToTweets } = require("./replyToTweets.controller");


router.post("/reply/:tweetId/:replyMessage", replyToTweet);
router.post("/tweet/:message", tweet);
router.post("/replyToTweets", replyToTweets);

module.exports = router;