/**
 * Created with JetBrains WebStorm.
 * User: karthikeyan.s
 * Date: 10/30/12
 * Time: 3:04 PM
 * To change this template use File | Settings | File Templates.
 */

Tweet = function(tweetText, creationDate) {
    this.tweetText = tweetText;
    this.creationDate = creationDate;
}

Tweet.prototype.copyTwitterData = function(data) {
    this.tweetText = data.text;
    this.creationDate = data.created_at;
}
