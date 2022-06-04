let productos = require ("../db/productos");
// let db = require ("../database/models");

let mainController = {
  index: function(req,res) {
    return res.render('main', {productos:productos})
  }
  
}

module.exports = mainController;