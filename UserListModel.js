/**
 * Created with JetBrains WebStorm.
 * User: karthikeyan.s
 * Date: 10/30/12
 * Time: 5:12 PM
 * To change this template use File | Settings | File Templates.
 */

UserListModel = function() {
    this.usersList = [];
}

UserListModel.prototype.addNewUserToFollow = function(twitterId) {
    this.usersList.push(twitterId);
    usersListView.newUserAdded(twitterId);
    usersListModelChanged();
}

UserListModel.prototype.removeUser = function(twitterId) {
    this.usersList = $.grep(this.usersList, function(e) {
        return e !== twitterId;
    })
    usersListModelChanged();
}

var userListModel = new UserListModel();
