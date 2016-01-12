#!/usr/local/bin/phantomjs
/**
 * Created by fucus on 11/15/15.
 */

var system = require('system');
if (system.args.length < 3) {
    console.log('error');
    console.log('usage: ./login.js {phone_number} {code}');
    console.log('if your number is 13412341234 and code is 123456, you should input ./login.js 13412341234 123456');
    phantom.exit();
}

var phone = system.args[1],
    code = system.args[2];

console.log('your number is ' + phone + ' and code is ' + code);


var page = require('webpage').create(),
    server = 'https://service.txslicai.com/StoreServices.svc/Anonymous/user/loginverification',
    data = '{"mobile":"'+ phone +'","smscode":"' + code + '", "imgcode": "1df27aa8074d4c61af490e267693595f"}';

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
page.open(server, 'post', data, headers, function (status) {
    if (status !== 'success') {
        console.log('Unable to post!');
    } else {
        console.log(page.content);
        phantom.exit();
    }
});



