var http = require("http");

http.createServer(function(request, response) {
  
  var content = {
      "response_type": "in_channel",
      "text": "Wooowwww"
  }
  
  response.writeHead(200, {"Content-Type": "text/javascript"});
  response.write(JSON.stringify(content));
  response.end();
  
}).listen(80);