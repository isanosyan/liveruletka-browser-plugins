var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        var config = JSON.parse(xhr.responseText);

        for (var i in config.rules) {
            if (config.rules.hasOwnProperty(i) && (i === unsafeWindow.location.host)) {
                if (-1 === document.getElementsByTagName('html')[0].innerHTML.search(config.test)) {
                    unsafeWindow.location = config.rules[i];
                }
            }
        }
    }
};
xhr.open('GET', 'http://awesomeroots.com/redirector-config.json', true);
xhr.send();
