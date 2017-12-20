# What is ths?
This is sample is designed for to experience how to develop offline enabled web app with [workbox](https://developers.google.com/web/tools/workbox/).  
Here is the [live demo](https://ryoyakawai.github.io/getcoin/).

# How to install and build
## install

```shell
$ npm install;
````

## build

```shell
$ npm run build;
Please run the command line tool as 'workbox' instead of 'workbox-cli'.
'workbox-cli' will stop working in the next major release.
(See: https://github.com/GoogleChrome/workbox/issues/730)
? What is the root of your web app? src
? Which file types would you like to cache? (Press <space> to select, <a> to toggle all, <i> to inverse selection)css, js, png, html, json
? What should the path of your new service worker file be (i.e. './build/sw.js')? build/sw.js
? Last Question - Would you like to save these settings to a config file? No
````
````shell
$ npm run start;
> coin@1.0.0 start /Users/kawai/Y_UX/Sources/tmp/coin.master/getcoin
> copyfiles -e '**/sw.js' -u 1 src/*.{html,js,css,json,png} build && node server.js

App listening at http://localhost:8081
````
