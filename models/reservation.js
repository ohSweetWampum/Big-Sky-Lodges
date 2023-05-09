const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Reservation extends Model {}

Reservation.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        check_in_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        check_out_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        num_guests: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        room_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'room',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'reservation',
      }
);

module.exports =  Reservation;