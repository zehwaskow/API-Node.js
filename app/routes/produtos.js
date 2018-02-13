module.exports = (app) => {
    app.get('/produtos', (req, resp) => {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'admin',
            database: 'casadocodigo'
        });

        connection.query('select * from produtos', (err, result) => {
            resp.send(result);
        });
        connection.end();
    });
}

