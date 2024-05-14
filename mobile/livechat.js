function initEmbeddedMessaging() {
		try {
			embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'
			

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
initEmbeddedMessaging();
// Listen for messages from the iframe
window.addEventListener('message', (event) => {
    // Check the origin of the message to ensure it's coming from a trusted source
    if (event.origin !== 'https://valeocare4u--sccp2dev.sandbox.my.site.com') {
	    console.log('github console.log - event.origin = ', event.origin);
        return;
    }

    // Check the message sent by the iframe
    if (event.data === 'getURLParams') {
	    console.log("gitlog - event.origin = ", event.origin);
        // Get the URL parameters from the parent window's URL
        const params = new URLSearchParams(window.location.search);
        
        // Respond to the iframe with the URL parameters
        event.source.postMessage({
            type: 'URLParams',
            params: Object.fromEntries(params.entries())
        }, event.origin);
    }
});
