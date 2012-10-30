/**
 * Created with JetBrains WebStorm.
 * User: karthikeyan.s
 * Date: 10/30/12
 * Time: 5:39 PM
 * To change this template use File | Settings | File Templates.
 */

UsersListView = function() {

}

UsersListView.prototype.newUserAdded = function(twitterId) {
    this.addNewTweeterItem(twitterId);
}

UsersListView.prototype.createNewTweeterEntry = function(newTwitterId) {
    var checkBoxElement = createCheckBox(newTwitterId);
    checkBoxElement.checked = true;
    checkBoxElement.setAttribute("onchange", "updateFeeds(displayFeeds)");

    var labelElement = createLabelForCheckBox(newTwitterId, newTwitterId);

    var newListItem = document.createElement("li");
    newListItem.appendChild(checkBoxElement);
    newListItem.appendChild(labelElement);
    return newListItem;
}

UsersListView.prototype.addNewTweeterItem = function(newTwitterId) {

    if(doesIdExists(newTwitterId) == false) {

        document.getElementById("tweeterids").appendChild(this.createNewTweeterEntry(newTwitterId));
    }
}

var usersListView = new UsersListView();