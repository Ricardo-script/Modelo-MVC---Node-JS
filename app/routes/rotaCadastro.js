module.exports = function(app){
    app.get('/cadastro',function(req,res){
        app.app.controllers.controle.cadastro(app,req,res);
    });

    app.post('/salvar/dados',function(req,res){
        app.app.controllers.controle.salvar(app,req,res);
    });
}