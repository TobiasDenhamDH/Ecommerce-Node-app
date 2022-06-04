let productos = require ("../db/productos");

let db = require ("../database/models");
let op = db.Sequelize.Op;


let searchController = {
    index: function(req,res) {
      return res.render('search-results', {productos:productos})
    }
  }
 
  module.exports = searchController;