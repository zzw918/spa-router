var express = require('express');
var path = require('path')
var app = express();
 
app.get('/', function (req, res) {
   res.sendFile(path.resolve(__dirname,  './www/history.html'));
})

app.get('*', function (req, res) {
   res.sendFile(path.resolve(__dirname,  './www/history.html'));
});

const port = 8088;

var server = app.listen(port, function () {
  console.log("访问地址为 http://localhost:" + port)
});