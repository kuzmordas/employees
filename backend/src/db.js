const mongoose = require('mongoose');
const cfg = require('./config');

async function init () {
  return mongoose.connect(cfg.MONGO_URL, {
    autoIndex: false,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 500,
    bufferMaxEntries: 0,
    socketTimeoutMS: 0,
    keepAlive: true,
    useNewUrlParser: true
  });
}

module.exports = {
  init
};
