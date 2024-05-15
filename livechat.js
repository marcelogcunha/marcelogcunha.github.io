function initEmbeddedMessaging() {
    try {
      embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'
      embeddedservice_bootstrap.settings.hideChatButtonOnLoad = true;
      embeddedservice_bootstrap.init(
				'00D3N000000HTnt',
				'Valeo_Live_Chat_External_Github_Pages_mobile',
				'https://valeocare4u--sccp2dev.sandbox.my.site.com/ESWValeoLiveChatExtern1710106536106',
				{
					scrt2URL: 'https://valeocare4u--sccp2dev.sandbox.my.salesforce-scrt.com'
				}
			);
    } catch (err) {
      console.error('Error loading Embedded Messaging: ', err);
    }
  };

function launchChat() {
    embeddedservice_bootstrap.utilAPI.launchChat()
        .then(function (success) {
            // Add actions to run after the chat client launches successfully.
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            // Add actions to run whether the chat client launches
            // successfully or not.
        });
}


/*window.addEventListener("onEmbeddedMessagingReady", () => {
	function launchChat() {
	try {
        	embeddedservice_bootstrap.utilAPI.launchChat();
    	} catch (err) {
        	console.error('Error launching chat: ', err);
    	}
}
});*/

// Listen for messages from the iframe
window.addEventListener('message', (event) => {
    // Check the message sent by the iframe
    if (event.data === 'getURLParams') {
        // Get the URL parameters from the parent window's URL
        const params = new URLSearchParams(window.location.search);
        // Respond to the iframe with the URL parameters
        event.source.postMessage({
            type: 'URLParams',
            params: Object.fromEntries(params.entries())
        }, event.origin);
    }
});
    


