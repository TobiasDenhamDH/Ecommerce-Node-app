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
        timestamps: true,
        underscored: true
    };
    
    const Follower = sequelize.define(alias, cols, config);
    
    Follower.associate = function(models){
        Follower.belongsToMany(models.Users,{
            as: 'followers',
            through: 'FollowerUser',
            foreignKey:'followers_id',
            otherKey: 'users_id',
            timestamps: true
        })
    }

    return Follower;
}