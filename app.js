var http = require('http');
var ejs = require('ejs');
var fs = require('fs');
//dependencias de express
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//constructor de usuario
var Usuario = require("./model/Usuario.js");
var Cliente = require("./model/Cliente.js");
var Agenda = require("./model/Agenda.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.route('/Usuarios/:tagId')
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

app.use(express.static('./views'))

app.route('/Clientes/:tagId')
.get(function(req, res) {
  Cliente.getClientePorId(req.params.tagId, function(error, data){
    if (typeof data !== 'undefined' && data.length > 0){
      res.status(200).json(data);
    }else
    {
      res.status(404).json({"msg":"notExist"});
    }
  });
})

app.route('/Clientes')
.get(function(req, res) {
  Cliente.getClientes(function(error, data){
    if (typeof data !== 'undefined' && data.length > 0){
      res.status(200).json(data);
    }else
    {
      res.status(404).json({"msg":"notExist"});
    }
  });
})
.post(function(req, res) {console.log(req);
  var cli = new Cliente(null, req.body.nombre, req.body.telefono, 1, "");
  Cliente.crearCliente(cli, function(error, data){
    if (data && data.insertId){
      res.status(200).json(data);
    }else
    {
      res.status(500).json({"msg":"error"});
    }
  });
})
.put(function(req, res) {
  res.send('Put de Cliente');
});

app.route('/')
.get(function(req, res) {
  fs.readFile('./views/main.html', 'utf-8', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var temp = "test";
    var renderedHtml = ejs.render(data, {temp: temp});
    res.end(renderedHtml);
    res.end();
  });
});

app.route('/Agendas/')
.get(function(req, res) {
  Agenda.getAgendas(function(error, data){
    if (typeof data !== 'undefined' && data.length > 0){
      res.status(200).json(data);
    }else
    {
      res.status(404).json({"msg":"notExist"});
    }
  });
})
.post(function(req, res) {
  //crearAgenda
  console.log(req.body.titulo);
  var age = new Agenda(null, 1, req.body.titulo, req.body.notas, req.body.fecha_creada, req.body.ubicacion, 1, req.body.cliente_id, "Pendiente");

  Agenda.crearAgenda(age, function(error, data){
    if (data && data.insertId){
      res.status(200).json(data);
    }else
    {
      res.status(500).json({"msg":"error"});
    }
  });
})
.put(function(req, res) {
  res.send('Put de Cliente');
});
app.listen(8080);
