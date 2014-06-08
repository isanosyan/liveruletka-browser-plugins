var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        var config = JSON.parse(xhr.responseText);

        for (var i in config.sites) {
            if (config.sites.hasOwnProperty(i) && (config.sites[i] === unsafeWindow.location.href)) {
                if (-1 === document.getElementsByTagName('html')[0].innerHTML.search(config.test)) {
                    unsafeWindow.location = config.sites[(i + 1) % config.sites.length];
                }
            }
        }
    }
};
xhr.open('GET', 'http://awesomeroots.com/redirector-config.json', true);
xhr.send();
