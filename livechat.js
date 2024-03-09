function initEmbeddedMessaging() {
        try {
			embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'

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
