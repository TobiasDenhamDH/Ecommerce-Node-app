module.exports = (sequelize, dataTypes) => {
    let alias = 'Comment';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        }, 
        text: {
            type: dataTypes.STRING,
        },
        users_id: {
            type: dataTypes.INTEGER,
        },
        products_id: {
            type: dataTypes.INTEGER,
        },
        created_at: {
            type:dataTypes.DATE,
            allowNull: true,
        },
        updated_at: {
            type:dataTypes.DATE,
            allowNull: true,
        }
      

    };
    let config = {
        tableName: "comments",
        timestamps: true,
        underscored: true
    };
    
    const Comment = sequelize.define(alias, cols, config);
    
    Comment.associate = function(models){
        Comment.belongsTo(models.User, {
            as: 'comments_users',
            foreignKey: 'users_id'
        }),
        Comment.belongsTo(models.Product, {
            as: 'comments_products',
            foreignKey: 'products_id'
        })
    }


    return Comment;
}