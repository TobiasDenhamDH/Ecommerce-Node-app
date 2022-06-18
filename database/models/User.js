module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        }, 
        name: {
            type: dataTypes.STRING,
        },
        surname: {
            type: dataTypes.STRING,
        }, 
        document: {
            type: dataTypes.INTEGER,
        },
        birth_date: {
            type: dataTypes.DATE,
        },
        password:{
            type: dataTypes.STRING,
        },
        email:{
            type: dataTypes.STRING,
        },
        avatar:{
            type:dataTypes.STRING,
        },
        followers_id: {
            type: dataTypes.INTEGER,
        },
        created_at: {
            type:dataTypes.DATE,
            allowNull: true,
        },
        updated_at: {
            type:dataTypes.DATE,
            allowNull: true,
        },
        comments_id:{
            type: dataTypes.INTEGER
        },
        products_id:{
            type: dataTypes.INTEGER
        }

    };
    let config = {
        tableName: "users",
        timestamps: true,
        underscored: true
    };
    
    const User = sequelize.define(alias, cols, config);
    

    User.associate = function(models){
        User.hasMany(models.Comment, {
            as: 'comments',
            foreignKey: 'users_id'
        }),
        User.hasMany(models.Product,{
            as:"products",
            foreignKey: "users_id"
        }),
        User.hasMany(models.Follower,{
            as:"followers",
            foreignKey: "users_id"
        })
    }

   

    return User;
}