function loadScript(url, callback) {
        var script = document.createElement("script");
        script.type = "text/javascript";

        if (script.readyState) { // IE
            script.onreadystatechange = function() {
                if (script.readyState === "loaded" || script.readyState === "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else { // Others
            script.onload = function() {
                callback();
            };
        }

        script.src = 'https://valeocare4u--sccp2dev.sandbox.my.site.com/ESWValeoLiveChat1708964206329/assets/js/bootstrap.min.js';
        document.getElementsByTagName("head")[0].appendChild(script);
    }

    loadScript("livechat.js", function() {
        // Call your function from livechat.js here
        initEmbeddedMessaging();
    });
