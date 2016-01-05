var http = require('http');
var thirdmod = require('./thirdmodule');

http.createServer(function(request, response){
  response.writeHead(200);
  response.write(thirdmod.txtreturn());
  response.write(thirdmod.rannum());
  response.end();
}).listen(9000);
