var express = require('express')
var path = require('path')
var port = process.env.PORT || 8080
var app = express()

app.use(express.static('./dist'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist', 'index.html'))
})

app.listen(port)
console.log('Server started on: ' + port)