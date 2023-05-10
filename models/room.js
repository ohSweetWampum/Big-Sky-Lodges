const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Room extends Model {}

Room.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    room_num: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    room_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    max_occupancy: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    num_beds: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    bed_size: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    room_size: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    branch_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'branch',
            key: 'id'
        }
    },
    wifi: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    tv_with_cable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    air_conditioning: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    mini_bar: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "room",
  }
);

module.exports = Room;
