const { Reservation } = require('../models');
const reservationData = [
  {
    user_id: 1,
    room_id: 1,
    check_in_date: "2023-06-01",
    check_out_date: "2023-06-07",
    num_guests : 2 
  },
  {
    user_id: 2,
    room_id: 2,
    check_in_date: "2023-06-10",
    check_out_date: "2023-06-14",
    num_guests : 1
  },
  // Add more reservations
];

const seedReservations = () => Reservation.bulkCreate(reservationData);

module.exports = seedReservations;
