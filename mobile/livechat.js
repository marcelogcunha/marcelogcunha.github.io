
function initEmbeddedMessaging() {
		try {
			embeddedservice_bootstrap.settings.language = 'en'; // For example, enter 'en' or 'en-US'
			embeddedservice_bootstrap.init(
				'00D3N000000HTnt',
				'Valeo_Live_Chat',
				'https://valeocare4u--sccp2dev.sandbox.my.site.com/ESWValeoLiveChat1708964206329',
				{
					scrt2URL: 'https://valeocare4u--sccp2dev.sandbox.my.salesforce-scrt.com'
				}
			);
		} catch (err) {
			console.error('Error loading Embedded Messaging: ', err);
		}
	};

function launchChat() {
        embeddedservice_bootstrap.utilAPI.launchChat();
}


window.addEventListener("onEmbeddedMessagingReady", () => {
  console.log("Received the onEmbeddedMessagingReady event…");
	setTimeout(function() {
		embeddedservice_bootstrap.utilAPI.launchChat()
		.then(() => {
			// do something
		});
		}, 500);
	
  // The JavaScrip API is ready for calls
});

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
