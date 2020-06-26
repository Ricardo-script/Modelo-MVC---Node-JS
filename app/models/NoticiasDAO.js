function NoticiasDAO(conn){
    this._conn = conn;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._conn.query('SELECT * FROM noticias',callback);
}

NoticiasDAO.prototype.salvarDados = function(noticia,callback){
    this._conn.query('INSERT INTO noticias SET ?',noticia,callback);
}

module.exports = function(){
    return NoticiasDAO;
}