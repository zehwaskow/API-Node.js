var connectionFactory = require('../infra/connectionFactory');

module.exports = (app) => {
    app.get('/produtos', (req, resp) => {
        var connection = connectionFactory();
        connection.query('select * from produtos', (err, result) => {
            resp.render('produtos/lista', {lista: result});
        });
        connection.end();
    });
}

