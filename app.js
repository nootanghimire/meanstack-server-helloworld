process.env.NODE_ENV = process.env.NODE_ENV || 'development';


var express = require('express');
var app = express();



app.get('/', function (req, res) {
  res.send('Nootan Ghimire, Braggin: Hello World!');
});

app.enable('trust proxy');


var port = process.env.NODE_ENV == 'development' ? 9000 : 9001;

app.listen(port, function () {
  console.log('Example app listening on port '+port+'!');
});

