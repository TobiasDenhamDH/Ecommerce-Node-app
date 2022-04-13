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
        return res.render('profile', {usuarios: usuarios})
        
    },
    profileEdit: function (req,res) {
        return res.render('profile-edit', {usuarios: usuarios})
    }
  }
  
  module.exports = usersController;