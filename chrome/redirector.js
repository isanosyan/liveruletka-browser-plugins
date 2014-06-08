document.addEventListener('respondWithData', function (e) {
    var config = e.detail;

    for (var i in config.sites) {
        if (config.sites.hasOwnProperty(i) && (config.sites[i] === window.location.href)) {
            if (-1 === document.getElementsByTagName('html')[0].innerHTML.search(config.test)) {
                window.location = config.sites[(i + 1) % config.sites.length];
            }
        }
    }
});

var e = document.createEvent('CustomEvent');
e.initCustomEvent('requestForData', true, true, {});

setTimeout(function() {
    document.dispatchEvent(e);
}, 0);
