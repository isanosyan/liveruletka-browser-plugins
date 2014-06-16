var xhr = new XMLHttpRequest(),
    sendResponse = function () {},
    config = undefined,
    listener = function (e) {
        if (
            'request-config' === e.name
            && 'undefined' !== typeof config
            && 'undefined' !== e.target.page
        ) {
            e.target.page.dispatchMessage('return-config', config);
        }
    };

safari.application.addEventListener('message', listener, false);

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        config = new Function('return ' + xhr.responseText)();
    }
};
xhr.open('GET', 'http://awesomeroots.com/redirector-config.json', true);
xhr.send();
