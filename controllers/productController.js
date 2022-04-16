const req = require("express/lib/request");
let usuarios = require("../db/usuarios");
let comentarios = require('../db/comentarios');
const productos = require("../db/productos");



let productController = {
    index: function(req,res) {
      return res.render('product', {comentarios: comentarios.lista})
    },
    add: function(req,res) {
        return res.render('product-add', {usuarios: usuarios})
    }}

  module.exports = productController;
