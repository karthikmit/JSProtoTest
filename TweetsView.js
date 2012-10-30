/**
 * Created with JetBrains WebStorm.
 * User: karthikeyan.s
 * Date: 10/30/12
 * Time: 5:49 PM
 * To change this template use File | Settings | File Templates.
 */

TweetsView = function() {

}

TweetsView.prototype.updateFeeds = function(onSuccessCallback) {
    FeedsQueue.feeds.length = 0;
    $('li').each(function(index, value) {
        var twitId = $(value).text();
        if(document.getElementById(twitId).checked) {
            FeedsQueue.getTweets(twitId, onSuccessCallback);
        }
        else
        {
            FeedsQueue.removeTweets(twitId, onSuccessCallback);
        }
    });
}

TweetsView.prototype.displayTweets = function(divisionId) {
    var html = '<div class="tweet">TWEET_TEXT<div class="time">AGO</div> <br>';

    for(var index = 0; index < FeedsQueue.feeds.length; index++)
    {
        var userfeeds = FeedsQueue.feeds[index];

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

TweetsView.prototype.displayFeeds = function(){
    $('#recenttweets').empty();
    tweetsView.displayTweets('#recentTweets');
}

var tweetsView = new TweetsView();
