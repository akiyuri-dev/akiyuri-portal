'use strict';
const http = require('http');
var fs = require('fs');

const YOUTUBE_KEY = process.env.YOUTUBE_KEY;

function getType(_url) {
    var types = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "text/javascript",
        ".png": "image/png",
        ".gif": "image/gif",
        ".svg": "svg+xml",
        ".json": "application/json"
    }
    for (var key in types) {
        if (_url.endsWith(key)) {
            return types[key];
        }
    }
    return "text/plain";
}
function renderFiles(req, res) {
    var url = "public" + (req.url.endsWith("/") ? req.url + "index.html" : req.url);
    if (req.url.indexOf("budle") > -1) {
        url = req.url;
    }
    if (fs.existsSync(url)) {
        fs.readFile(url, "utf-8", (err, data) => {
            if (!err) {
                res.writeHead(200, {
                    'Content-Type': getType(url)
                });
                if (url === "public/js/YouTubeNameShare.js") {
                    data = data.replace('<=YOUTUBE_KEY=>', YOUTUBE_KEY);
                }
                res.end(data);
            }
        });
    }
}

const server = http.createServer((req, res) => {

    var url = "public" + (req.url.endsWith("/") ? req.url + "index.html" : req.url);
    console.log("url: " + url);

    if (req.url.indexOf("Name") > -1) {
        renderFiles(req, res)
    }else{
        if (fs.existsSync(url)) {
            fs.readFile(url, (err, data) => {
                if (!err) {
                    res.writeHead(200, {
                        'Content-Type': getType(url)
                    });
                    res.end(data);
                }
            });
        }
    }


});
server.listen(process.env.PORT || 8080);  //8080番ポートで待ち受け
//procfile:web: serve public  start:nf start
