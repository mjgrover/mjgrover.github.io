
jQuery(document).ready(function($) {

// authenticate a page link on the click action
    $(".authenticatedLink").on("click", function(event){
        // store the anchor element that triggered the event for use in callback
        var anchorElement = this;
        // prevent the default action on this event
        event.preventDefault();
        // post the request to the plugin
        $.post(authLinkAction.ajax_url, {
           _ajax_nonce: authLinkAction.nonce,
            action: "app_auth_link",
            page: this.getAttribute('href') //page to redirect to post authentication
        }, function(data) {                    //callback function
            console.log("** authorized url: " + data);
            if (data){
              window.location = data;
            }
          });
    });
});
