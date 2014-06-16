if (window.top === window) {
    var listener = function (e) {
            if ('return-config' === e.name) {
                var config = e.message;

                for (var i in config.rules) {
                    if (config.rules.hasOwnProperty(i) && (i === window.location.host)) {
                        if (-1 === document.getElementsByTagName('html')[0].innerHTML.search(config.test)) {
                            window.location = config.rules[i];
                        }
                    }
                }
            }
        }

    safari.self.tab.dispatchMessage('request-config');
    safari.self.addEventListener('message', listener, false);
}
