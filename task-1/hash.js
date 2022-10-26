'use strict';

const crypto = require('node:crypto');
const config = require('./config');

const hash = (password) => new Promise((resolve, reject) => {
  const salt = crypto.randomBytes(config.crypto.size).toString(config.crypto.encoding);
  crypto.scrypt(password, salt, config.crypto.keylen, (err, result) => {
    if (err) reject(err);
    resolve(salt + ':' + result.toString(config.crypto.encoding));
  });
});

module.exports = hash;
