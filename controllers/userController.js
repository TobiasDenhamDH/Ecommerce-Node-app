const productos = require("../db/productos")
const usuarios = require("../db/usuarios")
let data = require("../db/usuarios")

let db = require ("../database/models");
let op = db.Sequelize.Op;
let bcrypt = require('bcrypt');

let userController = {
    register: function(req,res) {
        return res.render('register')
    },
    store: function(req,res) {

    },
    login: function (req,res) {
        return res.render('login')
    },
    profile: function (req,res) {
        return res.render('profile', {usuarios: usuarios, productos: productos})
        
    },
    profileEdit: function (req,res) {
        return res.render('profile-edit', {usuarios: usuarios})
    }
  }
  
  module.exports = userController;