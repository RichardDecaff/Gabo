var pool = require("../config/connectionPool.js");

class Cliente {

  constructor(cliente_id, nombre, telefono, estado, fecha_registro){
    this.cliente_id = cliente_id;
    this.nombre = nombre;
    this.telefono = telefono;
    this.estado = estado;
    this.fecha_registro = fecha_registro;
  }

  static getClientePorId(id, callback){
    var con = pool.getConnection(function(err, connection) {
      if (err) {
        throw err;
        connection.release();

        res.json({ "code": 100, "status": "Error in connection database" });
        return;
      }
      var user_query = "select * from tabla_cliente where cliente_id = "+connection.escape(parseInt(id));
      connection.query(user_query, function(err, result, fields) {
        if (err) throw(err);
        callback(null, result)
      });
    });
  }

  static crearCliente(cliente, callback){
    var con = pool.getConnection(function(err, connection) {
      if (err) {
        throw err;
        connection.release();

        res.json({ "code": 100, "status": "Error in connection database" });
        return;
      }
      connection.query('INSERT INTO tabla_cliente SET ?', cliente, function(error, result) {
        if (err) throw(err);
        callback(null,{"insertId" : result.insertId});
      });
    });
  }

  static getClientes(callback){
    var con = pool.getConnection(function(err, connection) {
      if (err) {
        throw err;
        connection.release();

        res.json({ "code": 100, "status": "Error in connection database" });
        return;
      }
      var user_query = "select * from tabla_cliente";
      connection.query(user_query, function(err, result, fields) {
        if (err) throw(err);
        callback(null, result)
      });
    });
  }
}

module.exports = Cliente;
