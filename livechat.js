chatLoaded = false;
window.addEventListener("onEmbeddedMessagingReady", () => {
    console.log("Received the onEmbeddedMessagingReady event…");
  
    this.chatLoaded = true;
  });

function initEmbeddedMessaging() {
    try {
      embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'
      embeddedservice_bootstrap.settings.hideChatButtonOnLoad = true;

      embeddedservice_bootstrap.init(
        '00D3N000000HTnt',
        'Valeo_Live_Chat_External_Github_Pages',
		'https://valeocare4u--sccp2dev.sandbox.my.site.com/ESWValeoLiveChatExtern1710104728631',
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

  initEmbeddedMessaging();
    


