/**
 * Created with JetBrains WebStorm.
 * User: karthikeyan.s
 * Date: 10/30/12
 * Time: 12:49 PM
 * To change this template use File | Settings | File Templates.
 */

window.onload = function() {
    document.getElementById("newuser").onclick = function() {
        mainController.addUserClicked(document.getElementById("twitterid").value);
    }
}

function createCheckBox(id) {
    var checkBoxElement = document.createElement("input");
    checkBoxElement.setAttribute("type", "checkbox");
    checkBoxElement.setAttribute("id", id);
    checkBoxElement.setAttribute("value", id);
    return checkBoxElement;
}

function createLabelForCheckBox(cbId, cbText) {
    var labelElement = document.createElement("label");
    labelElement.setAttribute("for", cbId);
    labelElement.appendChild(document.createTextNode(cbText));
    return labelElement;
}

function doesIdExists(id) {
    if(document.getElementById(id) === null)
        return false;
    return true;
}