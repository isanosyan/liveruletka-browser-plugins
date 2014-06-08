// inject redirector script
var data = require('sdk/self').data;

require('sdk/page-mod').PageMod({
    include: '*',
    contentScriptFile: data.url('redirector.js')
});
