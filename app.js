var app = require('./config/express')();
var rotasProdutos = require('./app/routes/produtos')(app);
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log("Servidor Rodando");
});
