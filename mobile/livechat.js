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
window.addEventListener("onEmbeddedMessagingReady", () => {
		console.log("Received the onEmbeddedMessagingReady event.");
	setTimeout(function() {
		embeddedservice_bootstrap.utilAPI.launchChat();
		}, 500);
	});
