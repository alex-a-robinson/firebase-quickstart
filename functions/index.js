const config = require('./etc/config.js');
const utils = require('./lib/utils.js');
const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const app = require('express')();

app.get('/api/hello', (req, res) => {

  if (!req.query.message) {
    utils.failure(res, 'Message parm is required');
  }

  utils.success(res, req.query.message);
});

exports.api = functions.https.onRequest(app);
