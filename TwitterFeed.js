/**
 * Created with JetBrains WebStorm.
 * User: karthikeyan.s
 * Date: 10/23/12
 * Time: 9:28 AM
 * To change this template use File | Settings | File Templates.
 */

FeedsQueue = {
    feeds : [],

    getTweets : function(twitterId) {
        var numTweets = 5;
        this.collectTwitterFeed(twitterId, numTweets);
    },

    collectTwitterFeed : function(twitterId, numTweets) {
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
                    for (var i = 0; i < data.length; i++) {
                        FeedsQueue.feeds.push(data[i]);
                    }
                },
                error : function()
                {
                    alert("error");
                }
            }
        )
    }
}

