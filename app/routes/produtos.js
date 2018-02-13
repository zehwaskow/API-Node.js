var dbConnection = require('../infra/dbConnection');

module.exports = (app) => {
    app.get('/produtos', (req, resp) => {
        var connection = dbConnection();
        connection.query('select * from produtos', (err, result) => {
            resp.render('produtos/lista', {lista: result});
        });
        connection.end();
    });
}

