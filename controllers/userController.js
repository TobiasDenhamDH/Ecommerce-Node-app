const productos = require("../db/productos")
const usuarios = require("../db/usuarios")
let data = require("../db/usuarios")

let db = require ("../database/models");
let op = db.Sequelize.Op;
let bcrypt = require('bcrypt');

let userController = {
    register: function (req,res) {
        res.render('register')
    },
    storeRegister: function (req,res) {
        let errors = {}
        if (req.body.email == ""){
            errors.message = "El email es obligatorio"
            res.locals.errors = errors;
            return res.render('register')
        } else if (req.body.password == "") {
            errors.message = "La contraseña es obligatoria"
            res.locals.errors = errors;
            return res.render('register')
        } else if (req.body.retypePassword == "") {
            errors.message = "La contraseña es obligatoria"
            res.locals.errors = errors;
            return res.render('register')

        }else if (req.body.password.length < 3) {   
            errors.message = "La contraseña debe tener al menos tres caracteres"
            res.locals.errors = errors;
            return res.render('register')

        }else if (req.body.password != req.body.retypePassword) {
            errors.message = "Las contraseñas no coinciden"
            res.locals.errors = errors;
            return res.render('register')
        }else if (req.file.mimetype !== 'image/png' && req.file.mimetype !== 'image/jpg' && req.file.mimetype !== 'image/jpeg') {
            errors.message = "El archivo debe ser una imagen"
            res.locals.errors = errors;
            return res.render('register')
        } else {
            db.User.findOne({
                where: [{email: req.body.email}]
            })
            .then ( function (user){
                if(user != null){
                errors.message = "El email ya esta registrado por favor elija otro"
                res.locals.errors = errors;
                return res.render('register')
                } else {
                    let user = {
                        email: req.body.email,
                        name: req.body.name,
                        surname: req.body.surname,
                        document:req.body.document,
                        password: bcrypt.hashSync(req.body.password, 10),
                        birth_date: req.body.birth_date,
                        avatar: req.file.filename
                    }
                    db.User.create (user)
                        .then(userGuardado => {
                            return res.redirect('/users/login')
                        })
                        .catch(error => console.log(error))
                    
                    }

                })
            }
        },
    login: function (req,res) {
        return res.render('login')
    },
    storeLogin: function (req,res) {
        let errors = {}
       
        db.User.findOne({
            where: [{email: req.body.email}]
        })
        .then ( function (user){
            if(user == null) {
            // console.log(user)
            errors.message = "El usuario no existe"
            res.locals.errors = errors;
            return res.render('main')
        } else if (bcrypt.compareSync(req.body.password,user.password) == false ) {
            errors.message = "La contraseña es incorrecta"
            res.locals.errors = errors;
            return res.render('main')
        } else {
            req.session.user = user;
            return res.redirect('/')
        
        .catch(error => console.log(error))
        }
    })

    },
    profile: function (req,res) {
        return res.render('profile', {usuarios: usuarios, productos: productos})
        
    },
    profileEdit: function (req,res) {
        return res.render('profile-edit', {usuarios: usuarios})
    }
  }
  
  module.exports = userController;