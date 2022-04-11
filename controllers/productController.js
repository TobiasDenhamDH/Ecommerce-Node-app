let usuarios = require("../db/usuarios");

let productController = {
    index: function(req,res) {
      return res.render('product')
    },
    add: function(req,res) {
        return res.render('product-add', {usuarios: usuarios[0].nombre})
    }
  }
  
  module.exports = productController;