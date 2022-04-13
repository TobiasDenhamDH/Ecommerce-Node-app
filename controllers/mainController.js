let productos = require ("../db/productos");

let mainController = {
  index: function(req,res) {
    return res.render('main', {productos:productos})
  }
  
}

module.exports = mainController;