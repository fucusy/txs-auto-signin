# txslicai.com-auto-signin

## system requirement:
- mac os, test on version 10.11.1 (15B42)


## dependency

- [phantomjs](http://phantomjs.org/), you need install the binary file to /usr/local/bin/phantomjs or link to this path,
if you do not want install to this path, you need to update the first line to specify your binary path in every .js file

**the phantomjs binary on official website does not work, you can download  phantomjs from [github](https://github.com/eugene1g/phantomjs/releases)**

## usage

###if you are already login:

`./signin.js week` to sign in one week  or `./signin.js day` to sign in today

###if you are not login:

1. send code to your mobile, `./send_code.js {your_mobile_number}`
2. after receiving the code, `./signin.js {your_mobile_number} {code}`
3. after login, `./signin.js week` to sign in one week  or `./signin.js day` to sign in today


ps:when you are login, your login state will store in cookiejar.json and you do not need to login when next sign in,
pay attention to this file, **do not upload it to github or anyother website, keep it yourself**

**sign in every day**:
you can auto sign in everyday after setting cookie when login.
using command line `crontab -e` to edit crontab task.
for example: you can input
`50 13 * * * {path_to_your_signin.js} day`
this means you will sign in at 13:50 every day

