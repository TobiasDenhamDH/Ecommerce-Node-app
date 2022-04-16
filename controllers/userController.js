const productos = require("../db/productos")
const usuarios = require("../db/usuarios")
let data = require("../db/usuarios")

let userController = {
    register: function(req,res) {
        return res.render('register')
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