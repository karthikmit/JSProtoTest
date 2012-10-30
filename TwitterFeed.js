/**
 * Created with JetBrains WebStorm.
 * User: karthikeyan.s
 * Date: 10/23/12
 * Time: 9:28 AM
 * To change this template use File | Settings | File Templates.
 */
FeedsQueue = {
    feeds : [],
    feedsCache : [],

    getTweets : function(twitterId, onSuccess) {
        var numTweets = 5;
        if(this.isExists(twitterId) !== true) {
            this.collectTwitterFeed(twitterId, numTweets, onSuccess);
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
    },

    isExistsInCache : function(twitterId) {
        var isExistsFlag = false;
        $.grep(this.feedsCache, function(e) {
            isExistsFlag = e.key == twitterId.toLowerCase();
        });

        return isExistsFlag;
    },

    retrieveFromCache : function(twitterId) {
        return this.feedsCache.filter(function(element) {
            return element.key === twitterId.toLowerCase();
        })[0];
    },

    collectTwitterFeed : function(twitterId, numTweets, onSuccess) {
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
                        FeedsQueue.feeds.push({key:data[0].user.screen_name.toLowerCase(), value:data});
                        FeedsQueue.feedsCache.push({key:data[0].user.screen_name.toLowerCase(), value:data});

                        onSuccess();
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
            FeedsQueue.feeds.push(keyValObj);
            //FeedsQueue.feeds.push({key:keyValObj.key, value : keyValObj.value});
            onSuccess();
        }
    }
}

