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
        }
      

    };
    let config = {
        tableName: "comments",
        timestamps: true,
        underscored: false
    };
    
    const Comment = sequelize.define(alias, cols, config);
    
    return Comment;
}