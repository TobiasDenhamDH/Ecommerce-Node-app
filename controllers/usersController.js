const usuarios = require("../db/usuarios")
let data = require("../db/usuarios")

let usersController = {
    register: function(req,res) {
        return res.render('register')
    },
    login: function (req,res) {
        return res.render('login')
    },
    profile: function (req,res) {
        return res.render('profile', {usuarios: usuarios.nombre, imagen: usuarios.imagen, productos: usuarios.productos, seguidores: usuarios.seguidores, comentarios: usuarios.comentarios})
    },
    profileEdit: function (req,res) {
        return res.render('profile-edit')
    }
  }
  
  module.exports = usersController;