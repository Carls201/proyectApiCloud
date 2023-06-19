const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/index.js');

require('./db.js');
const app = express();

// Configura el middleware Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configura CORS
app.use(cors());
app.use('/', routes);



module.exports = app;
