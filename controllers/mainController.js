let db = require ("../database/models");
let op = db.Sequelize.Op;


let mainController = {
  index: function(req,res) {
    db.Product.findAll({
      include: [  
        { association: 'comments' }, 
       /* Relacion de comentario con producto */
                                
        {association: 'users'}
        /*Relación de usuarios con productos*/
      ],
      order:  [ ["created_at", "DESC" ] ]
    })
    .then ((data) => {
      return res.render ("main", {data: data})
    })
    .catch((err)=>{
      console.log(err)
  })
  }
  
}

module.exports = mainController;