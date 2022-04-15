let productos = require ("../db/productos");
let searchController = {
    index: function(req,res) {
      return res.render('search-results', {productos:productos})
    }
  }
 
  module.exports = searchController;