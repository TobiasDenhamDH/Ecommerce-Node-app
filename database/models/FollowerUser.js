module.exports = (sequelize, dataTypes) => {
    let alias = 'FolloweUser';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        }, 
        users_id: {
            type: dataTypes.INTEGER,
        },
        followers_id: {
            type: dataTypes.INTEGER,
        }

    };
    let config = {
        tableName: "followers_users",
        timestamps: true,
        underscored: true
    };
    
    const FollowerUser = sequelize.define(alias, cols, config);
    
    return FollowerUser;
}