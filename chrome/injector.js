var s = document.createElement('script');

s.src = chrome.extension.getURL('redirector.js');
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(s);

document.addEventListener('requestForData', function (e) {
    var e = document.createEvent('CustomEvent'),
        xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            e.initCustomEvent('respondWithData', true, true, xhr.responseText);
            document.dispatchEvent(e);
        }
    };
    xhr.open("GET", 'http://awesomeroots.com/redirector-config.json', true);
    xhr.send();
});

