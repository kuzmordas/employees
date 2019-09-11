const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const routes = require('./routes');
const {APP_PORT} = require('./config');

module.exports = async function() {

  await db.init();
  const app = express();

  app.use(function (req, res, next) {
    const allowedOrigins = ['http://127.0.0.1:8080', 'http://localhost:8080'];
    const origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) > -1){
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    return next();
  });

  app.get('/healthcheck', (req, res) => res.send('ok'));
  app.use('/api', bodyParser.json(), routes);
  app.listen(APP_PORT, () => console.log(`Server listening on ${APP_PORT}`));
};
