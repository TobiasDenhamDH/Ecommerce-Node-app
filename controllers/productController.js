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
      let errors = {}
      if (req.body.name == ""){
        errors.message = "El nombre es obligatorio"
        res.locals.errors = errors;
        return res.render('product-add')
      } else if (req.file.mimetype !== 'image/png' && req.file.mimetype !== 'image/jpg' && req.file.mimetype !== 'image/jpeg') {
        errors.message = "El archivo debe ser una imagen"
        res.locals.errors = errors;
        return res.render('product-add')
      } 
      else{
        let product = {
          users_id: 1,
          image: req.file.filename,
          name: req.body.name,
          description: req.body.description,
        }
        db.Product.create (product)
        .then( productGuardado=> {
          return res.redirect('/')
      })
      .catch(error => console.log(error))
    }
      

      

}}


  module.exports = productController
