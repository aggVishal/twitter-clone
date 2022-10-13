const twitterClient = require("../../twitter");



module.exports = {
    searchTweets: (query, callback) => {
        const tweet = async() => {
            try {
                const tweets = await twitterClient.v2.search(query);
                callback(null, tweets);
            } catch (e) {
                callback(e, null);
            }
        }
        tweet();
    },


    tweet: (message, callback) => {
        const tweet = async() => {
            try {
                await twitterClient.v2.tweet(message);
                callback(null, "success");
            } catch (e) {
                callback(e, null);
            }
        }
        tweet();
    },
    replyToTweet: (tweetId, replyMessage, callback) => {
        const tweet = async() => {
            try {
                await twitterClient.v2.reply(replyMessage, tweetId);
                callback(null, "success");
            } catch (e) {
                callback(e, null);
            }
        }
        tweet();
    }
}