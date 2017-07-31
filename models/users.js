/**
 * Define user model
 */
export default (sequelize, DataTypes) => {
    return sequelize.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        RoleId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        lastActive: {
            type: DataTypes.DATE,
            defaultValue: Date.now()
        },
        online: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }
    });
};
