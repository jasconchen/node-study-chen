/*
* @Author: USER
* @Date:   2016-07-03 11:22:13
* @Last Modified by:   USER
* @Last Modified time: 2016-07-03 11:31:13
*/

'use strict';

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World and NodeJs\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
    