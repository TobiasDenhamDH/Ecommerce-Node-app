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
        User.hasMany(models.Follower,{
            as:"followed",
            foreignKey: "followed_id"
        })
    }

   

    return User;
}