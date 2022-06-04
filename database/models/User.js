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
        products: {
            type: dataTypes.INTEGER,
        },
        comments: {
            type: dataTypes.INTEGER,
        },
        followers: {
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
        tableName: "users",
        timestamps: true,
        underscored: false
    };
    
    const User = sequelize.define(alias, cols, config);
    
    return User;
}