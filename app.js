var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
  res.send("Hello :D");
});

app.post('/', function(req, res, next) {
  
  var content = {
      "response_type": "in_channel",
      "text": "Wooowwww"
  }
  
  res.header(200, {"Content-Type": "text/javascript"});
  res.send(JSON.stringify(content));
  
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});