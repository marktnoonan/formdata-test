var express = require('express')
var app = express()

app.get('/from', (req, res) => {
  res.redirect(302, '/to')
})
app.get('/to', (req, res) => res.send('Redirected'))

app.get('/index.html', (req, res) => {
  res.send('<button onclick="fetch(\'http://localhost:3000/from\')" ></button>')
})
var server = app.listen(3000, function () {
  var port = server.address().port
  console.log('Example app listening at port %s', port)
})
module.exports = server
