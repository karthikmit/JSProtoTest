/**
 * Created with JetBrains WebStorm.
 * User: karthikeyan.s
 * Date: 10/30/12
 * Time: 5:12 PM
 * To change this template use File | Settings | File Templates.
 */

UserListModel = function() {
    this.usersList = [];
    this.subscribers = [];
}

UserListModel.prototype.addNewUserToFollow = function(twitterId) {
    this.usersList.push(twitterId);
    this.publish(twitterId);
}

UserListModel.prototype.removeUser = function(twitterId) {
    this.usersList = $.grep(this.usersList, function(e) {
        return e !== twitterId;
    })
    tweetsView.updateFeeds(tweetsView.displayFeeds);
}

UserListModel.prototype.subscribe = function(observer) {
    this.subscribers.push(observer);
}

UserListModel.prototype.publish = function(newTweeterIdEntered) {
    var i,
        numbers = this.subscribers.length;

    for(i = 0; i < numbers; i += 1) {
        this.subscribers[i](newTweeterIdEntered);
    }
}

var userListModel = new UserListModel();
