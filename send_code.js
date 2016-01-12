#!/usr/local/bin/phantomjs
// Example using HTTP POST operation

var system = require('system');
phone = ''
if (system.args.length === 1) {
    console.log('usage: ');
    console.log('./send_code.js {phone_number}');
    phantom.exit();
}
phone = system.args[1];
var page = require('webpage').create(),
    server = 'https://service.txslicai.com/StoreServices.svc/Anonymous/user/sendusersms',
    data = '{"mobile":"' + phone + '","imgcode":"4164", "imgkey": "f5af23445a524594b4b534cbf95d194a"}';

var headers = {
    "Content-Type": "application/json"
}

page.open(server, 'post', data, headers, function (status) {
    if (status !== 'success') {
        console.log('Unable to post!');
    } else {
        console.log(page.content);
    }
    phantom.exit();
});

