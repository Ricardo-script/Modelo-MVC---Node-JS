module.exports.index = function(app,req,res){
    res.render('index');
}

module.exports.cadastro = function(app,req,res){
    res.render('cadastro');
}

module.exports.noticias = function(app,req,res){
    var conn = app.config.bdConnection();
    var NoticiasDAO = new app.app.models.NoticiasDAO(conn);
    NoticiasDAO.getNoticias(function(erro,resultado){
        res.render('noticias',{noticias:resultado});
    });
}

module.exports.salvar = function(app,req,res){
    var noticia = req.body;
    var conn = app.config.bdConnection();
    var NoticiasDAO = new app.app.models.NoticiasDAO(conn);
    NoticiasDAO.salvarDados(noticia,function(erro,resultado){
        res.redirect('/noticias');
    });
}