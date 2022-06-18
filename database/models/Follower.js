module.exports = (sequelize, dataTypes) => {
    let alias = 'Follower';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        }, 
        
        users_id: {
            type: dataTypes.INTEGER,
        }

    };
    let config = {
        tableName: "followers",
        timestamps: false,
        underscored: true
    };
    
    const Follower = sequelize.define(alias, cols, config);
    
    Follower.associate = function(models){
        Follower.belongsTo(models.User,{
            as: 'users',
            foreignKey:'users_id',
        })
    }

    return Follower;
}