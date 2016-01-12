#!/usr/local/bin/phantomjs
/**
 * Created by fucus on 11/15/15.
 */


var page = require('webpage').create();
var sign_in_server =  'https://service.txslicai.com/StoreServices.svc/user/signweek';
var system = require('system');


if (system.args.length > 1 && system.args[1] != 'week' && system.args[1] != 'day') {
    console.log('usage: ');
    console.log('./signin.js week');
    console.log('or')
    console.log('./signin.js day');
    phantom.exit();
}
if(system.args.length === 1){
    console.log('warning: set default args to day');
    sign_times = 'day';
}else{
    sign_times = system.args[1];
}

if(sign_times == 'day'){
    sign_in_server = 'https://service.txslicai.com/StoreServices.svc/user/signday';
}

var headers = {
    "Content-Type": "application/json"
}
var fs = require('fs');
var CookieJar = "cookiejar.json";
var pageResponses = {};
page.onResourceReceived = function(response) {
    pageResponses[response.url] = response.status;
    fs.write(CookieJar, JSON.stringify(phantom.cookies), "w");
};
if(fs.isFile(CookieJar))
Array.prototype.forEach.call(JSON.parse(fs.read(CookieJar)), function(x){
    phantom.addCookie(x);
});




page.open(sign_in_server, 'post', function (status) {
    if (status !== 'success') {
        console.log('Unable to post!');
    } else {
        console.log(page.content);
    }
    phantom.exit();
});



