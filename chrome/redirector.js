document.addEventListener('respondWithData', function (e) {
    var config = e.detail;

    for (var i in config.rules) {
        if (config.rules.hasOwnProperty(i) && (i === window.location.host)) {
            if (-1 === document.getElementsByTagName('html')[0].innerHTML.search(config.test)) {
                window.location = config.rules[i];
            }
        }
    }
});

var e = document.createEvent('CustomEvent');
e.initCustomEvent('requestForData', true, true, {});

setTimeout(function() {
    document.dispatchEvent(e);
}, 0);
