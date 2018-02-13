module.exports = (app) => {
    app.get('/produtos', (req, resp) => {
        var connection = app.infra.connectionFactory();
        connection.query('select * from produtos', (err, result) => {
            resp.render('produtos/lista', {lista: result});
        });
        connection.end();
    });
}

