var express = require('express');
var app = express();

app.post('/test/post', function (req, res) {
    res.set('Content-Type', 'application/json')
    res.send('{}');
  })

  var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at port %s', port);
});
module.exports = server;