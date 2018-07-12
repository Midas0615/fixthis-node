#!/usr/bin/env node
"use strict";
var restify = require("restify");
var http_port = process.env.APP_HTTP_PORT || 3000;
var http_server = null;
http_server = restify.createServer();
http_server.listen(http_port);
require('dotenv').config()

console.log("server is running on "+ process.env.APP_HTTP_PORT+" now...");
new (require('./bootstrap'))(http_server);

// const config  = require('./config');
// var connection = config.db.get;
// connection.query('select * from employee', function (error, results, fields) {
//     if (error) throw error;
//     res.end(JSON.stringify(results));
//   });
// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });
  