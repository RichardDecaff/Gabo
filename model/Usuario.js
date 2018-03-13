var pool = require("../config/connectionPool.js");

class Usuario {

  constructor(usuario_id, correo, login, nivel){
    this.usuario_id = usuario_id;
    this.correo = correo;
    this.login = login;
    this.nivel = nivel;
  }

  static getUsuarioPorId(id, callback){
    var con = pool.getConnection(function(err, connection) {
      if (err) {
        connection.release();
        res.json({ "code": 100, "status": "Error in connection database" });
        return;
      }
      var user_query = "select * from tabla_usuario where usuario_id = "+connection.escape(parseInt(id));
      connection.query(user_query, function(err, result, fields) {
        if (err) throw(err);
        callback(null, result)
    });
  });
}
}

module.exports = Usuario;
