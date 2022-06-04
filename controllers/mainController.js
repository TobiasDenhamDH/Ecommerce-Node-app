let productos = require ("../db/productos");

let db = require ("../database/models");
let op = db.Sequelize.Op;


let mainController = {
  index: function(req,res) {
    return res.render('main', {productos:productos})
  }
  
}

module.exports = mainController;