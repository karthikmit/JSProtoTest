/**
 * Created with JetBrains WebStorm.
 * User: karthikeyan.s
 * Date: 10/30/12
 * Time: 1:19 PM
 * To change this template use File | Settings | File Templates.
 */
updateTweeterList = function() {
    addNewTweeterItem(document.getElementById("twitterid").value);
    updateFeeds(displayFeeds);
}

function createNewTweeterEntry(newTwitterId) {
    var checkBoxElement = createCheckBox(newTwitterId);
    checkBoxElement.checked = true;

    var labelElement = createLabelForCheckBox(newTwitterId, newTwitterId);

    var newListItem = document.createElement("li");
    newListItem.appendChild(checkBoxElement);
    newListItem.appendChild(labelElement);
    return newListItem;
}

addNewTweeterItem = function(newTwitterId) {

    if(doesIdExists(newTwitterId) == false) {

        document.getElementById("tweeterids").appendChild(createNewTweeterEntry(newTwitterId));
    }
}

updateFeeds = function(onSuccessCallback) {
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

displayTweets = function(divisionId) {
    var html = '<div class="tweet">TWEET_TEXT<div class="time">AGO</div> <br>';

    for(var index = 0; index < FeedsQueue.feeds.length; index++)
    {
        var userfeeds = FeedsQueue.feeds[index];
        for(var i = 0; i < userfeeds.value.length; i++) {
            var feed = userfeeds.value[i];

            $('#recenttweets').append(
                html.replace('TWEET_TEXT', feed.text)
                    .replace(/USER/g, feed.user.screen_name)
                    .replace('AGO', feed.created_at)
                    .replace(/ID/g, feed.id_str)
            );
        }
    }
}

displayFeeds = function(){
    $('#recenttweets').empty();
    displayTweets('#recentTweets');
}