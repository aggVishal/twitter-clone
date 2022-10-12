const router = require("express").Router();
const { tweet, replyToTweet, replyToTweets } = require("./replyToTweets.controller");


router.post("/reply/:tweetId/:replyMessage", replyToTweet);
router.post("/:message", tweet);
router.post("/replyToTweets/:query/:n/:replyMessage", replyToTweets);

module.exports = router;