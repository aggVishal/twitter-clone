const { tweet, replyToTweet, searchTweets } = require("./replyToTweets.service")


module.exports = {
    replyToTweets: (req, res) => {
        const query = req.params.query;
        const n = req.params.n;
        const replyMessage = req.params.replyMessage;

        var myRes = [];

        searchTweets(query, async(err, tweets) => {
            if (err) {
                console.log(err);
            }

            var i = 0;

            for await (const tweet of tweets) {

                if (i == n) break;
                myRes.push(tweet.id);

                replyToTweet(tweet.id, replyMessage, (err, result) => {
                    if (err) {
                        console.log(err);
                    }
                })
                i++;
            }
            return res.status(200).json({
                message: myRes
            })
        })

    },
    tweet: (req, res) => {
        const message = req.params.message;

        tweet(message, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                return res.status(200).json({
                    message: result
                })
            }
        })
    },
    replyToTweet: (req, res) => {
        const tweetId = req.params.tweetId;
        const replyMessage = req.params.replyMessage;

        replyToTweet(tweetId, replyMessage, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                return res.status(200).json({
                    message: result
                })
            }
        })
    },


}