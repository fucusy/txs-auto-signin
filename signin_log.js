#!/usr/local/bin/phantomjs
/**
 * Created by fucus on 11/15/15.
 */


var page = require('webpage').create(),
    sign_in_server =  'https://service.txslicai.com/StoreServices.svc/user/signlist',
    data = '{"signtime": "2016-01-12"}';

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


page.open(sign_in_server, 'post', data, headers, function (status) {
    if (status !== 'success') {
        console.log('Unable to post!');
    } else {
        console.log(page.content);
        page.render('sign.png');
    }
    phantom.exit();
});



