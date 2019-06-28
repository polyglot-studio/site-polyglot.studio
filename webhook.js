require('dotenv').config()

const secret = process.env.APP_DEPLOY_SECRET;
const repo = "/var/www/polyglot.studio/";

const fs = require('fs');
const http = require('http');
const https = require('https');
const crypto = require('crypto');
const exec = require('child_process').exec;

//http.createServer(function (req, res) {
//    req.on('/webhooks/github/deploy', function(chunk) {
//        let sig = "sha1=" + crypto.createHmac('sha1', secret).update(chunk.toString()).digest('hex');

//        if (req.headers['x-hub-signature'] == sig) {
//            exec('cd ' + repo + ' && chmod -R 775 . && ./deploy.sh && chmod -R 775 .');
//        }
//    });

//    res.end();
//}).listen(6969);

var options = {
  key: fs.readFileSync('/etc/letsencrypt/live/polyglot.studio/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/polyglot.studio/cert.pem')
};

https.createServer(options, function (req, res) {
    req.on('/webhooks/github/deploy', function(chunk) {
        let sig = "sha1=" + crypto.createHmac('sha1', secret).update(chunk.toString()).digest('hex');

        if (req.headers['x-hub-signature'] == sig) {
            exec('cd ' + repo + ' && && ./deploy.sh');
        }
    });

    res.end();
}).listen(6969);
