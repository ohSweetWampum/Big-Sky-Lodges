const User = require('./user');
const Branch = require('./branch');
const Reservation = require('./reservation');
const Room = require('./room');

//*********** The relation of User to Reservation is One-To-Many ****************
//Each user can have many reservations
User.hasMany(Reservation,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
//Each reservation belongs to one user
Reservation.belongsTo(User,{
    foreignKey: 'user_id'
});

//*********** The relation of Room to Reservation is One-To-Many ****************
//Each room can have many reservations(in different date)
Room.hasMany(Reservation,{
    foreignKey: 'room_id',
    onDelete: 'CASCADE'
});
//Each reservation belongs to only one room
Reservation.belongsTo(Room,{
    foreignKey: 'room_id'
});

//*********** The relation of Branch to Room is One-To-Many **********************
//Each branch can have many rooms
Branch.hasMany(Room,{
    foreignKey: 'branch_id',
    onDelete: 'CASCADE'
});
//Each room belongs to one branch
Room.belongsTo(Branch,{
    foreignKey: 'branch_id'
});

module.exports = {User, Branch, Room, Reservation};
