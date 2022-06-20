const req = require("express/lib/request");
let usuarios = require("../db/usuarios");
let comentarios = require('../db/comentarios'); 

let db = require ("../database/models");
let op = db.Sequelize.Op;


let productController = {
    /* index: function(req,res) {
      return res.render('product', {comentarios: comentarios.lista})
    }, */

    add: function(req,res) {
        return res.render('product-add', {usuarios: usuarios})
    },

    store: function(req,res) {

      let errors = {}

      if(req.session.user){

          if (req.body.name == ""){
               errors.message = "El nombre es obligatorio"
               res.locals.errors = errors;
               return res.render('product-add')
          }else if (req.file.mimetype !== 'image/png' && req.file.mimetype !== 'image/jpg' && req.file.mimetype !== 'image/jpeg') {
                errors.message = "El archivo debe ser una imagen"
                res.locals.errors = errors;
                return res.render('product-add')
          }else{
                let product = {
                users_id: req.session.user.id,
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
      }else{
        return res.redirect('/users/login')
      }
    },

    detail: function(req, res){
      const id = req.params.id;
      
      db.Product.findByPk(id, {
          include: [  
              { association: 'comments',
                  include:[{association: 'users'}] , /* Relacion de comentario con producto */
              },                           
              {association: 'users'}
          ],
          order: [['comments', 'createdAt', 'DESC']]
      })
          .then((data) => {
              //Si no hay producto que coincida con el id, redirecciona a home.
              if (data == null) {
                  return res.redirect('/')
              } else {
                  return res.render('product.ejs', { data: data })
              }
          })
          .catch((err)=>{
            console.log(err)
        })
  },
  delete: function(req, res) {

    let id = req.params.id

    db.Product.findByPk(id)
    .then((data) => {

        if(req.session.user.id == data.users_id){
            db.Product.destroy({
                where: [
                    {
                        id : id
                    }
                ]})
                .then(() => {
                   return res.redirect("/")
                })
                .catch(error => {
                   console.log(error)
                })
        }else{
            return res.redirect("users/login")
        }

    })
    .catch(error => {
     console.log(error)
 })

 },
    update: function(req, res){

      let id = req.params.id;

      db.Product.findByPk(id)
      .then((data) => {
          let product = {
              name: req.body.name,
              image:"",
              description: req.body.description,
          }
          
          if(req.file == undefined){
              product.image = data.image;
          }else{
              product.image = req.file.filename;
          }
  
          db.Product.update( product, {
              where: {
                  id: id
              }
          })
          .then(function(){
              return res.redirect(`/products/${id}`)
          })
          .catch((err)=>{
            console.log(err)
          });
      })
  },
    
  edit: function(req, res) {

      let id = req.params.id;

      if(req.session.user){

          db.Product.findByPk(id)
              .then((data) => {

                  if(req.session.user.id == data.users_id){
                      return res.render("product-edit.ejs", {data:data}); 
                  }else{
                      return res.redirect("/")
                  }

              })
              .catch((e)=>{
                console.log(e)
              })
      }else{
          return res.redirect("/users/login")
      }
   },
   comment: function(req,res){
        if(req.session.user){
            let comment = {
                users_id: req.session.user.id,
                products_id: req.params.id,
                text: req.body.text,
            }

        db.Comment.create(comment)
        return res.redirect(`/products/${req.params.id}`)

        }else{
            return res.redirect('/users/login')
        }
   },
   deleteComment: function(req, res){

    let id = req.params.id

    db.Comment.findByPk(id)

    .then((data) => {
       
        db.Comment.destroy({
            where: [
                {
                    id: id
                }
            ]
        })
        .then(() =>{
            return res.redirect(`/products/${data.products_id}`)
        })
        .catch((err)=>{
            console.log(err)
          });
   
     }).catch((err)=>{
        console.log(err)
     })     
}, 
  
  }


  module.exports = productController
