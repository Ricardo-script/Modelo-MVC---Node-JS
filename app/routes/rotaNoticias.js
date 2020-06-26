module.exports = function(app){
    app.get('/noticias',function(req,res){
        app.app.controllers.controle.noticias(app,req,res);
    });
}