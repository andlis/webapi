var httpModule = require('./modules/http-module');
var http = require('http');
var port = 8180;



http.createServer(httpModule.handle_request).listen(port, '127.0.0.1');
console.log('Started Node.js http server at http://127.0.0.1:' + port);