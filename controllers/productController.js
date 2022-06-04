const req = require("express/lib/request");
let usuarios = require("../db/usuarios");
let comentarios = require('../db/comentarios');

let db = require ("../database/models");
let op = db.Sequelize.Op;


let productController = {
    index: function(req,res) {
      return res.render('product', {comentarios: comentarios.lista})
    },

    add: function(req,res) {
        return res.render('product-add', {usuarios: usuarios})
    },

    store: function(req,res) {
      return res.render('product-add', {usuarios: usuarios})
  }

  }


  module.exports = productController;
