const { TwitterApi } = require("twitter-api-v2")

var client = new TwitterApi({
    appKey: "nxXANhCLJIpKVQYULMH9PzAT1",
    appSecret: "Ga1apShQmDFme8TSNjoHUvN5jZ4iABFJoVJTmZoYNduXkjx0ji",
    accessToken: "1580096750031101953-jp3VmM6sXNl2AuoxYwn2sH3x7e54xS",
    accessSecret: "1JpSPSZiffjyZg6j3x8FYWsdzHARroV3OWDU6ACF7khTD"
});

module.exports = client.readWrite;