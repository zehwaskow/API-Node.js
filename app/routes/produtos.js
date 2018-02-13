module.exports = (app) => {
    app.get('/produtos', (req, resp) => {
        var connection = app.infra.connectionFactory();
        var produtosBanco = new  app.infra.produtosDAO(connection);

        produtosBanco.lista((erros, resultados) => {
            resp.render('produtos/lista', {lista: resultados});
        });
        connection.end();
    });
};


// app.get('produtos/remove', () => {
//     var produto = produtosBanco.carrega(connection, id, callback);
//     if (produto) {
//         produtosBanco.remove(produto, callback);
//     }
// });

