module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        }, 
        name: {
            type: dataTypes.STRING,
        },
        description: {
            type: dataTypes.STRING,
        },
        users_id: {
            type: dataTypes.INTEGER
        },
        comments_id: {
            type: dataTypes.INTEGER
        },
        image:{
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
        tableName: "products",
        timestamps: true,
        underscored: false
    };
    
    const Product = sequelize.define(alias, cols, config);
    
    return Product;
}