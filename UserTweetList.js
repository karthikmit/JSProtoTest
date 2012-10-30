/**
 * Created with JetBrains WebStorm.
 * User: karthikeyan.s
 * Date: 10/30/12
 * Time: 3:31 PM
 * To change this template use File | Settings | File Templates.
 */
UserTweetList = function(screenName, strId) {
    this.tweetList = [];
    this.screenName = screenName;
    this.strId = strId;
}

UserTweetList.prototype.addTweet = function(tweet) {
    this.tweetList.push(tweet);
}

UserTweetList.prototype.copyTweets = function(data) {
    for(var index = 0; index < data.length; index++) {
        if(index == 0) {
            this.screenName = data[index].user.screen_name;
            this.strId = data[index].id_str;
        }
        var tweet = new Tweet();
        tweet.copyTwitterData(data[index]);
        this.addTweet(tweet);
    }
}