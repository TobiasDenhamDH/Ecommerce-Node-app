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
            errors.message = "El usuario no existe"
            res.locals.errors = errors;
            return res.render('login')
        } else if (bcrypt.compareSync(req.body.password,user.password) == false ) {
            errors.message = "La contraseña es incorrecta"
            res.locals.errors = errors;
            return res.render('login')
        } else {
            if (req.body.recordarme !== undefined) {
                res.cookie('userId', user.id, {maxAge: 1000*60*5} )
            }
            req.session.user = user;
            return res.redirect('/')
        
        
        }
    })
    .catch(error => console.log(error))

    },

    logout: function(req,res) {
        req.session.destroy()
        res.clearCookie('userId')
        res.redirect('/')
    },

    profile: function (req,res) {
        const id = req.params.id

        db.User.findByPk(id,{
            include:[
                {
                    association: 'comments',
                    include: {
                        association: 'users'
                    }
                },
                {
                    association: 'products',
                    include: {
                        association: "comments"
                    }
                },
                {
                    association: 'followers'
                }
            ]
        })
        .then( (data) => {
            if (data == null) {
                return res.redirect('/')
            } else {
                return res.render('profile', { data:data })
            }
        })
        .catch((err)=>{
            console.log(err)
        })
        
    },
    profileEdit: function (req,res) {
        const id = req.params.id

        if(req.session.user){
            if(id != req.session.user.id){
                return res.redirect(`/users/profileedit/${req.session.user.id}`) /* Forma hacer que solo el duenio del perfil pueda editar sus datos */
            }else{
                db.User.findByPk(id, {
                    include: [
                        {association: 'products'},/* Relacion de productos con usuarios */
                        {association: 'comments'} /* Relacion de productos con comentarios */
                    ]
                })
                .then((data)=>{
                    if (data == null) {
                        return res.redirect('/')
                    } else {
                        return res.render('profile-edit', { data:data })
                    }
                })
                .catch((err)=>{
                    console.log(err)
                })
            }
        }else{
            res.redirect('/users/login')
        }
    },
    profileStore: function(req,res){
        const user = {
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 12),
            birth_date: req.body.birth_date,
            document: req.body.document,
            avatar: "",
        }

        if (req.file == undefined) {
            user.avatar = req.session.user.avatar;
        } else {
            user.avatar = req.file.filename;
        }

        db.User.update(user, {
                where: {
                    id: req.session.user.id
                }
            })
            .then(function(){
                
                user.id = req.session.user.id

                req.session.user = user /* Probar sin esto o usando abajo el req.session.usser.id */

                return res.redirect( `/users/profile/${user.id}` )
            })
            .catch(error => {
                console.log(error)
            }) 
    }
  }
  
  module.exports = userController;