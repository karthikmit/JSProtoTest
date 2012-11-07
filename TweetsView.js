/**
 * Created with JetBrains WebStorm.
 * User: karthikeyan.s
 * Date: 10/30/12
 * Time: 5:49 PM
 * To change this template use File | Settings | File Templates.
 */

(function() {
    var TweetsView = function() {
    }

    TweetsView.prototype.displayTweets = function(allFeeds) {
        var html = '<div class="tweet">TWEET_TEXT<div class="time">AGO</div> <br>';

        for(var index = 0; index < allFeeds.length; index++)
        {
            var userfeeds = allFeeds[index];

            var tweetList = userfeeds.value.tweetList;
            for(var i = 0; i < tweetList.length; i++) {
                $('#recenttweets').append(
                    html.replace('TWEET_TEXT', tweetList[i].tweetText)
                        .replace(/USER/g, userfeeds.value.screenName)
                        .replace('AGO', tweetList[i].creationDate)
                        .replace(/ID/g, userfeeds.value.strId)
                );
            }
        }
    }

    TweetsView.prototype.displayFeeds = function(allFeeds){
        $('#recenttweets').empty();
        tweetsView.displayTweets(allFeeds);
    }

    tweetsView = new TweetsView();
}());