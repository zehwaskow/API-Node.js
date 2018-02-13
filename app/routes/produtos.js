

module.exports = (app) => {
    app.get('/produtos', (req, resp) => {
        resp.render("produtos/lista");
    });
}

