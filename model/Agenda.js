var pool = require("../config/connectionPool.js");

class Agenda {

  constructor(agenda_id, usuario_id, titulo, notas, fecha_creada, ubicacion, visibilidad, cliente_id, resultado){
    this.agenda_id = agenda_id;
    this.usuario_id = usuario_id;
    this.titulo = titulo;
    this.notas = notas;
    this.fecha_creada = fecha_creada;
    this.ubicacion = ubicacion;
    this.visibilidad = visibilidad;
    this.cliente_id = cliente_id;
    this.resultado = resultado;
  }

  static getAgendaPorId(id, callback){
    var con = pool.getConnection(function(err, connection) {
      if (err) {
        throw err;
        connection.release();

        res.json({ "code": 100, "status": "Error in connection database" });
        return;
      }
      var user_query = "select * from tabla_agenda where agenda_id = "+connection.escape(parseInt(id));
      connection.query(user_query, function(err, result, fields) {
        if (err) throw(err);
        callback(null, result)
      });
    });
  }

  static getAgendas(callback){
    var con = pool.getConnection(function(err, connection) {
      if (err) {
        throw err;
        connection.release();

        res.json({ "code": 100, "status": "Error in connection database" });
        return;
      }
      var user_query = "select * from tabla_agenda";
      connection.query(user_query, function(err, result, fields) {
        if (err) throw(err);
        callback(null, result)
      });
    });
  }

  static crearAgenda(agenda, callback){
    var con = pool.getConnection(function(err, connection) {
      if (err) {
        throw err;
        connection.release();

        res.json({ "code": 100, "status": "Error in connection database" });
        return;
      }
      connection.query('INSERT INTO tabla_agenda SET ?', agenda, function(error, result) {
        if (err) throw(err);
        callback(null,{"insertId" : result.insertId});
      });
    });
  }
}

module.exports = Agenda;
