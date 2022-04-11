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
        return res.render('profile', {usuarios: usuarios[0].nombre, imagen: usuarios[0].imagen, productos: usuarios[0].productos, seguidores: usuarios[0].seguidores, comentarios: usuarios[0].comentarios})
    },
    profileEdit: function (req,res) {
        return res.render('profile-edit', {usuarios: usuarios[0].nombre})
    }
  }
  
  module.exports = usersController;