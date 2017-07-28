const express = require('express')
const app = express()

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

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})