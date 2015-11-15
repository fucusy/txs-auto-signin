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
    server = 'https://service.txslicai.com/Service.svc/Anonymous/AnonymousSendMobileYzm',
    data = '{"LoginName":"' + phone + '","IsRegister":true}';

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

