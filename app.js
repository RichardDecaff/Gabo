var http = require('http');
//dependencias de express
var express = require('express');
var app = express();
//constructor de usuario
var Usuario = require("./model/Usuario.js");

app.route('/Usuario/:tagId')
.get(function(req, res) {
  Usuario.getUsuarioPorId(req.params.tagId, function(error, data){
    if (typeof data !== 'undefined' && data.length > 0){
      res.status(200).json(data);
    }else
    {
      res.status(404).json({"msg":"notExist"});
    }
  });
})
.post(function(req, res) {
  res.send('Post de Test');
})
.put(function(req, res) {
  res.send('Put de Test');
});

app.route('/Cliente')
.get(function(req, res) {
  res.send('Get de Cliente');
})
.post(function(req, res) {
  res.send('Post de Cliente');
})
.put(function(req, res) {
  res.send('Put de Cliente');
});
app.listen(8080);
