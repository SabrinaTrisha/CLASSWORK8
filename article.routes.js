module.exports = function(app){
    var articleController = require('./../controllers/article.controllers')
    
    app.get('/for', articleController.form)
    app.post('/new_article', articleController.new)
    app.get('/article/:id', articleController.read)
    
}
