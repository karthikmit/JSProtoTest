/**
 * Created with JetBrains WebStorm.
 * User: karthikeyan.s
 * Date: 10/23/12
 * Time: 9:28 AM
 * To change this template use File | Settings | File Templates.
 */
var MinTweet = MinTweet || {}

MinTweet.tweetsModel = {
    feeds : [],

    populateTweets : function(twitterId) {
        var numTweets = 5;
        if(this.isExists(twitterId) !== true) {
            tweetFetcher.fetchTweets(twitterId, numTweets, function(tweetsList) {
                tweetsList = tweetsList || [];
                if(tweetsList.tweetList.length > 0){
                    MinTweet.tweetsModel.feeds.push({key:tweetsList.screenName.toLowerCase(), value:tweetsList});
                    tweetsView.displayFeeds(MinTweet.tweetsModel.feeds);
                }
                else {
                    alert("No Messages received...")
                }
            });
        }
    },

    removeTweets : function(twitterId) {
        this.feeds = $.grep(this.feeds, function(element) {
            return element.key !== twitterId.toLowerCase();
        });
        tweetsView.displayFeeds(MinTweet.tweetsModel.feeds);
    },

    isExists : function(twitterId) {
        var isExistsFlag = false;
        $.grep(this.feeds, function(e) {
            isExistsFlag = e.key == twitterId.toLowerCase();
        });

        return isExistsFlag;
    }
}

