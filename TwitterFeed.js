/**
 * Created with JetBrains WebStorm.
 * User: karthikeyan.s
 * Date: 10/23/12
 * Time: 9:28 AM
 * To change this template use File | Settings | File Templates.
 */

FeedsQueue = {
    feeds : [],

    getTweets : function(twitterId, onSuccess) {
        var numTweets = 5;
        if(this.isExists(twitterId) !== true) {
            tweetFetcher.fetchTweets(twitterId, numTweets, function(tweetsList) {
                FeedsQueue.feeds.push({key:tweetsList.screenName.toLowerCase(), value:tweetsList});
                onSuccess();
            });
        }
    },

    removeTweets : function(twitterId, onSuccess) {
        this.feeds = $.grep(this.feeds, function(element) {
            return element.key !== twitterId.toLowerCase();
        });
        onSuccess();
    },

    isExists : function(twitterId) {
        var isExistsFlag = false;
        $.grep(this.feeds, function(e) {
            isExistsFlag = e.key == twitterId.toLowerCase();
        });

        return isExistsFlag;
    }
}

