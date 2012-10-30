/**
 * Created with JetBrains WebStorm.
 * User: karthikeyan.s
 * Date: 10/30/12
 * Time: 5:59 PM
 * To change this template use File | Settings | File Templates.
 */

NewUserAddController = function() {

}

NewUserAddController.prototype.addUserClicked = function() {
    userListModel.addNewUserToFollow(document.getElementById("twitterid").value);
}

var newUserAddController = new NewUserAddController();
