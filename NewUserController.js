/**
 * Created with JetBrains WebStorm.
 * User: karthikeyan.s
 * Date: 10/30/12
 * Time: 5:59 PM
 * To change this template use File | Settings | File Templates.
 */
(function() {
    var NewUserAddController = function() {

    }

    NewUserAddController.prototype.addUserClicked = function(newtwitterid) {
        newtwitterid = newtwitterid || "";
        if(newtwitterid !== "") {
            userListModel.addNewUserToFollow(newtwitterid);
        }
    }

    newUserAddController = new NewUserAddController();
}());
