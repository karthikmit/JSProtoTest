/**
 * Created with JetBrains WebStorm.
 * User: karthikeyan.s
 * Date: 10/30/12
 * Time: 4:40 PM
 * To change this template use File | Settings | File Templates.
 */
TweetFetcher = function() {
    this.feedsCache = [];
}

TweetFetcher.prototype.fetchTweets = function(twitterId, numTweets, onSuccess) {
    if(this.isExistsInCache(twitterId) !== true) {
        $.ajax({
                url: 'http://api.twitter.com/1/statuses/user_timeline.json/',
                type: 'GET',
                dataType: 'jsonp',
                data: {
                    screen_name: twitterId,
                    include_rts: true,
                    count: numTweets,
                    include_entities: true
                },

                success: function(data, textStatus, xhr){
                    // append tweets into feeds queue.
                    var tweetsList = new UserTweetList();
                    tweetsList.copyTweets(data);
                    tweetFetcher.feedsCache.push({key:tweetsList.screenName, value:tweetsList});

                    onSuccess(tweetsList);
                },
                error : function()
                {
                    alert("error");
                }
            }
        )
    }
    else {
        var keyValObj = this.retrieveFromCache(twitterId);
        var tweetsList = new UserTweetList();
        tweetsList.copyTweets(keyValObj.value);
        onSuccess(tweetsList);
    }
}

TweetFetcher.prototype.retrieveFromCache = function(twitterId) {
    return this.feedsCache.filter(function(element) {
        return element.key === twitterId.toLowerCase();
    })[0];
}

TweetFetcher.prototype.isExistsInCache = function(twitterId) {
    var isExistsFlag = false;
    $.grep(this.feedsCache, function(e) {
        isExistsFlag = e.key == twitterId.toLowerCase();
    });

    return isExistsFlag;
}

var tweetFetcher = new TweetFetcher();
