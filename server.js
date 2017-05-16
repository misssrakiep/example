const greet = require('./greet');

var express = require('express');
var app =  express();

app.get('/greet', function (req, res){
  var name = 'Rushdi';
  res.send('Hello, ' + name);
});

var server = app.listen(3000, function (){
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s, host, port')
});
