require('dotenv').config({ path: '/var/www/polyglot-studios/.env' })

const secret = process.env.APP_DEPLOY_SECRET;
const headerKey = 'x-hub-signature';
const repo = "/var/www/polyglot-studios/";

const fs = require('fs');
const http = require('http');
const https = require('https');
const crypto = require('crypto');
const exec = require('child_process').exec;
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

function verifyPostData(req, res, next) {
  const payload = JSON.stringify(req.body)
  if (!payload) {
    return next('Request body empty')
  }
  const hmac = crypto.createHmac('sha1', secret)
  const digest = 'sha1=' + hmac.update(payload).digest('hex')
  const checksum = req.headers[headerKey]
  if (!checksum || !digest || checksum !== digest) {
    return next(`Request body digest (${digest}) did not match ${headerKey} (${checksum})`)
  }
  return next()
}

var options = {
  key: fs.readFileSync('/etc/letsencrypt/live/polyglot.studio/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/polyglot.studio/cert.pem'),
  ca: fs.readFileSync('/etc/letsencrypt/live/polyglot.studio/chain.pem')
};

app.post('/webhooks/github/deploy', verifyPostData, function (req, res) {
  exec('cd ' + repo + ' && ./deploy.sh');
  res.status(200).send('Request body was signed')
})


app.use((err, req, res, next) => {
  res.status(403).send('Request body was not signed or verification failed' + err)
})

//app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));
https.createServer(options, app).listen(6969);

//https.createServer(options, function (req, res) {
//    const chunk = JSON.stringify(req.body)
//    if (!chunk) {
//      return res.end('Request body empty')
//    }
//
//    req.on('/webhooks/github/deploy', function(chunk) {
//        let sig = "sha1=" + crypto.createHmac('sha1', secret).update(chunk.toString()).digest('hex');
//
//        if (req.headers['x-hub-signature'] == sig) {
//            exec('cd ' + repo + ' && ./deploy.sh');
//            res.send('validated and started');
//        }
//	else {
//            res.send('invalid');
//	}
//    });
//
//    res.end();
//}).listen(6969);
