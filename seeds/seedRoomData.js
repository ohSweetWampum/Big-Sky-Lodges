const { Room } = require('../models');
const roomData = [
  {
    room_num: 101,
    room_type: "Single Room",
    max_occupancy: 2,
    num_beds: 1,
    bed_size: "Queen",
    room_size: "16*20",
    price: 80,
    branch_id: 1,
    wifi: false,
    tv_with_cable: false,
    air_conditioning: false,
    mini_bar: false,
    image_path:"/images/single-room1"
  },
  {
    room_num: 102,
    room_type: "Double room",
    max_occupancy: 2,
    num_beds: 2,
    bed_size: "Twin",
    room_size: "20*24",
    price: 100,
    branch_id: 1,
    wifi: false,
    tv_with_cable: false,
    air_conditioning: false,
    mini_bar: true,
    image_path:"/images/double-room1"
  },
  {
    room_num: 103,
    room_type: "Studio",
    max_occupancy: 4,
    num_beds: 2,
    bed_size: "Queen",
    room_size: "30*36",
    price: 200,
    branch_id: 1,
    wifi: true,
    tv_with_cable: true,
    air_conditioning: false,
    mini_bar: false,
    image_path:"/images/studio-with-tv1"
  },
  {
    room_num: 104,
    room_type: "Deluxe room",
    max_occupancy: 2,
    num_beds: 1,
    bed_size: "King",
    room_size: "24*30",
    price: 150,
    branch_id: 1,
    wifi: true,
    tv_with_cable: true,
    air_conditioning: true,
    mini_bar: true,
    image_path:"/images/deluxe-with-tv1"
  },
  {
    room_num: 105,
    room_type: "Single Room",
    max_occupancy: 2,
    num_beds: 1,
    bed_size: "Queen",
    room_size: "16*20",
    price: 80,
    branch_id: 1,
    wifi: false,
    tv_with_cable: false,
    air_conditioning: true,
    mini_bar: false,
    image_path:"/images/single-room2"
  },
  {
    room_num: 106,
    room_type: "Double room",
    max_occupancy: 2,
    num_beds: 2,
    bed_size: "Twin",
    room_size: "20*24",
    price: 100,
    branch_id: 1,
    wifi: false,
    tv_with_cable: false,
    air_conditioning: false,
    mini_bar: true,
    image_path:"/images/double-room3"
  },
  {
    room_num: 107,
    room_type: "Studio",
    max_occupancy: 4,
    num_beds: 2,
    bed_size: "Queen",
    room_size: "30*36",
    price: 200,
    branch_id: 1,
    wifi: true,
    tv_with_cable: false,
    air_conditioning: false,
    mini_bar: false,
    image_path:"/images/studio1"
  },
  {
    room_num: 101,
    room_type: "Single Room",
    max_occupancy: 2,
    num_beds: 1,
    bed_size: "Queen",
    room_size: "16*20",
    price: 100,
    branch_id: 2,
    wifi: false,
    tv_with_cable: true,
    air_conditioning: false,
    mini_bar: false,
    image_path:"/images/single-room-with-tv1"
  },
  {
    room_num: 102,
    room_type: "Double room",
    max_occupancy: 2,
    num_beds: 2,
    bed_size: "Twin",
    room_size: "20*24",
    price: 120,
    branch_id: 2,
    wifi: false,
    tv_with_cable: false,
    air_conditioning: false,
    mini_bar: true,
    image_path:"/images/double-room2"
  },
  {
    room_num: 103,
    room_type: "Studio",
    max_occupancy: 4,
    num_beds: 2,
    bed_size: "Queen",
    room_size: "30*36",
    price: 220,
    branch_id: 2,
    wifi: true,
    tv_with_cable: true,
    air_conditioning: false,
    mini_bar: false,
    image_path:"/images/studio-with-tv2"
  },
  {
    room_num: 104,
    room_type: "Deluxe room",
    max_occupancy: 2,
    num_beds: 1,
    bed_size: "King",
    room_size: "24*30",
    price: 170,
    branch_id: 2,
    wifi: true,
    tv_with_cable: true,
    air_conditioning: true,
    mini_bar: true,
    image_path:"/images/deluxe-room1"
  },
  {
    room_num: 105,
    room_type: "Single Room",
    max_occupancy: 2,
    num_beds: 1,
    bed_size: "Queen",
    room_size: "16*20",
    price: 110,
    branch_id: 2,
    wifi: false,
    tv_with_cable: false,
    air_conditioning: true,
    mini_bar: false,
    image_path:"/images/single-room4"
  },
  {
    room_num: 106,
    room_type: "Double room",
    max_occupancy: 2,
    num_beds: 2,
    bed_size: "Twin",
    room_size: "20*24",
    price: 120,
    branch_id: 2,
    wifi: false,
    tv_with_cable: true,
    air_conditioning: false,
    mini_bar: true,
    image_path:"/images/double-room-with-tv2"
  },
  {
    room_num: 107,
    room_type: "Studio",
    max_occupancy: 4,
    num_beds: 2,
    bed_size: "Queen",
    room_size: "30*36",
    price: 180,
    branch_id: 2,
    wifi: true,
    tv_with_cable: false,
    air_conditioning: false,
    mini_bar: true,
    image_path:"/images/studio4"
  },
  {
    room_num: 101,
    room_type: "Single Room",
    max_occupancy: 2,
    num_beds: 1,
    bed_size: "Queen",
    room_size: "16*20",
    price: 90,
    branch_id: 3,
    wifi: false,
    tv_with_cable: false,
    air_conditioning: true,
    mini_bar: false,
    image_path:"/images/single-room6"
  },
  {
    room_num: 102,
    room_type: "Double room",
    max_occupancy: 2,
    num_beds: 2,
    bed_size: "Twin",
    room_size: "20*24",
    price: 110,
    branch_id: 3,
    wifi: false,
    tv_with_cable: false,
    air_conditioning: true,
    mini_bar: true,
    image_path:"/images/double-room3"
  },
  {
    room_num: 103,
    room_type: "Studio",
    max_occupancy: 4,
    num_beds: 2,
    bed_size: "Queen",
    room_size: "24*30",
    price: 220,
    branch_id: 3,
    wifi: true,
    tv_with_cable: false,
    air_conditioning: false,
    mini_bar: true,
    image_path:"/images/studio4"
  },
  {
    room_num: 104,
    room_type: "Deluxe room",
    max_occupancy: 2,
    num_beds: 1,
    bed_size: "King",
    room_size: "30*32",
    price: 200,
    branch_id: 3,
    wifi: false,
    tv_with_cable: true,
    air_conditioning: true,
    mini_bar: true,
    image_path:"/images/deluxe-room-with-tv2"
  },
  {
    room_num: 105,
    room_type: "Single Room",
    max_occupancy: 2,
    num_beds: 1,
    bed_size: "Queen",
    room_size: "16*20",
    price: 140,
    branch_id: 3,
    wifi: false,
    tv_with_cable: false,
    air_conditioning: true,
    mini_bar: true,
    image_path:"/images/single-room6"
  },
  {
    room_num: 106,
    room_type: "Double room",
    max_occupancy: 2,
    num_beds: 2,
    bed_size: "Twin",
    room_size: "20*24",
    price: 130,
    branch_id: 3,
    wifi: false,
    tv_with_cable: true,
    air_conditioning: false,
    mini_bar: true,
    image_path:"/images/double-room-with-tv4"
  },
  {
    room_num: 107,
    room_type: "Studio",
    max_occupancy: 4,
    num_beds: 2,
    bed_size: "Queen",
    room_size: "30*36",
    price: 160,
    branch_id: 3,
    wifi: true,
    tv_with_cable: false,
    air_conditioning: false,
    mini_bar: true,
    image_path:"/images/studio2"
  },
  {
    room_num: 101,
    room_type: "Single Room",
    max_occupancy: 2,
    num_beds: 1,
    bed_size: "Queen",
    room_size: "20*24",
    price: 150,
    branch_id: 3,
    wifi: true,
    tv_with_cable: true,
    air_conditioning: true,
    mini_bar: false,
    image_path:"/images/single-room-with-tv2"
  },
  {
    room_num: 102,
    room_type: "Double room",
    max_occupancy: 2,
    num_beds: 2,
    bed_size: "Twin",
    room_size: "24*30",
    price: 140,
    branch_id: 3,
    wifi: true,
    tv_with_cable: false,
    air_conditioning: true,
    mini_bar: true,
    image_path:"/images/double-room1"
  },
  {
    room_num: 103,
    room_type: "Studio",
    max_occupancy: 4,
    num_beds: 2,
    bed_size: "Queen",
    room_size: "30*36",
    price: 210,
    branch_id: 3,
    wifi: true,
    tv_with_cable: true,
    air_conditioning: false,
    mini_bar: true,
    image_path:"/images/studio-with-tv2"
  },
  {
    room_num: 104,
    room_type: "Deluxe room",
    max_occupancy: 2,
    num_beds: 1,
    bed_size: "King",
    room_size: "30*32",
    price: 200,
    branch_id: 3,
    wifi: true,
    tv_with_cable: true,
    air_conditioning: true,
    mini_bar: true,
    image_path:"/images/deluxe-room-with-tv3"
  },
  {
    room_num: 105,
    room_type: "Single Room",
    max_occupancy: 2,
    num_beds: 1,
    bed_size: "Queen",
    room_size: "20*24",
    price: 155,
    branch_id: 3,
    wifi: true,
    tv_with_cable: false,
    air_conditioning: true,
    mini_bar: false,
    image_path:"/images/single-room6"
  },
  {
    room_num: 106,
    room_type: "Double room",
    max_occupancy: 2,
    num_beds: 2,
    bed_size: "Twin",
    room_size: "20*24",
    price: 140,
    branch_id: 3,
    wifi: false,
    tv_with_cable: true,
    air_conditioning: false,
    mini_bar: true,
    image_path:"/images/double-room-with-tv4"
  },
  {
    room_num: 107,
    room_type: "Studio",
    max_occupancy: 4,
    num_beds: 2,
    bed_size: "Queen",
    room_size: "30*36",
    price: 160,
    branch_id: 3,
    wifi: true,
    tv_with_cable: true,
    air_conditioning: false,
    mini_bar: true,
    image_path:"/images/studio2"
  },
  {
    room_num: 101,
    room_type: "Single Room",
    max_occupancy: 2,
    num_beds: 1,
    bed_size: "Queen",
    room_size: "20*24",
    price: 100,
    branch_id: 4,
    wifi: true,
    tv_with_cable: false,
    air_conditioning: false,
    mini_bar: false,
    image_path:"/images/single-room1"
  },
  {
    room_num: 102,
    room_type: "Double room",
    max_occupancy: 2,
    num_beds: 2,
    bed_size: "Twin",
    room_size: "24*30",
    price: 125,
    branch_id: 4,
    wifi: true,
    tv_with_cable: false,
    air_conditioning: true,
    mini_bar: true,
    image_path:"/images/double-room2"
  },
  {
    room_num: 103,
    room_type: "Studio",
    max_occupancy: 4,
    num_beds: 2,
    bed_size: "Queen",
    room_size: "30*36",
    price: 180,
    branch_id: 4,
    wifi: true,
    tv_with_cable: true,
    air_conditioning: false,
    mini_bar: true,
    image_path:"/images/studio-with-tv3"
  },
  {
    room_num: 104,
    room_type: "Deluxe room",
    max_occupancy: 2,
    num_beds: 1,
    bed_size: "King",
    room_size: "30*32",
    price: 170,
    branch_id: 4,
    wifi: false,
    tv_with_cable: true,
    air_conditioning: true,
    mini_bar: true,
    image_path:"/images/deluxe-room3"
  },
  {
    room_num: 105,
    room_type: "Single Room",
    max_occupancy: 2,
    num_beds: 1,
    bed_size: "Queen",
    room_size: "20*24",
    price: 105,
    branch_id: 4,
    wifi: false,
    tv_with_cable: false,
    air_conditioning: true,
    mini_bar: false,
    image_path:"/images/single-room2"
  },
  {
    room_num: 106,
    room_type: "Double room",
    max_occupancy: 2,
    num_beds: 2,
    bed_size: "Twin",
    room_size: "20*24",
    price: 130,
    branch_id: 4,
    wifi: false,
    tv_with_cable: true,
    air_conditioning: false,
    mini_bar: true,
    image_path:"/images/double-room3"
  },
  {
    room_num: 107,
    room_type: "Studio",
    max_occupancy: 4,
    num_beds: 2,
    bed_size: "Queen",
    room_size: "30*36",
    price: 160,
    branch_id: 4,
    wifi: true,
    tv_with_cable: true,
    air_conditioning: false,
    mini_bar: true,
    image_path:"/images/studio-with-tv2"
  },
  {
    room_num: 101,
    room_type: "Single Room",
    max_occupancy: 2,
    num_beds: 1,
    bed_size: "Queen",
    room_size: "20*24",
    price: 125,
    branch_id: 5,
    wifi: true,
    tv_with_cable: true,
    air_conditioning: false,
    mini_bar: false,
    image_path:"/images/single-room-with-tv2"
  },
  {
    room_num: 102,
    room_type: "Double room",
    max_occupancy: 2,
    num_beds: 2,
    bed_size: "Twin",
    room_size: "24*30",
    price: 135,
    branch_id: 5,
    wifi: true,
    tv_with_cable: false,
    air_conditioning: true,
    mini_bar: true,
    image_path:"/images/double-room2"
  },
  {
    room_num: 103,
    room_type: "Studio",
    max_occupancy: 4,
    num_beds: 2,
    bed_size: "Queen",
    room_size: "30*36",
    price: 165,
    branch_id: 5,
    wifi: true,
    tv_with_cable: true,
    air_conditioning: true,
    mini_bar: true,
    image_path:"/images/studio-with-tv2"
  },
  {
    room_num: 104,
    room_type: "Deluxe room",
    max_occupancy: 2,
    num_beds: 1,
    bed_size: "King",
    room_size: "30*32",
    price: 150,
    branch_id: 5,
    wifi: true,
    tv_with_cable: true,
    air_conditioning: true,
    mini_bar: false,
    image_path:"/images/deluxe-room4"
  },
  {
    room_num: 105,
    room_type: "Single Room",
    max_occupancy: 2,
    num_beds: 1,
    bed_size: "Queen",
    room_size: "20*24",
    price: 115,
    branch_id: 5,
    wifi: true,
    tv_with_cable: false,
    air_conditioning: true,
    mini_bar: false,
    image_path:"/images/single-room5"
  },
  {
    room_num: 106,
    room_type: "Double room",
    max_occupancy: 2,
    num_beds: 2,
    bed_size: "Twin",
    room_size: "20*24",
    price: 135,
    branch_id: 5,
    wifi: false,
    tv_with_cable: true,
    air_conditioning: false,
    mini_bar: true,
    image_path:"/images/double-room-with-tv4"
  },
  {
    room_num: 107,
    room_type: "Studio",
    max_occupancy: 4,
    num_beds: 2,
    bed_size: "Queen",
    room_size: "30*36",
    price: 185,
    branch_id: 5,
    wifi: true,
    tv_with_cable: true,
    air_conditioning: true,
    mini_bar: true,
    image_path:"/images/studio-with-tv1"
  },
];

const seedRooms = () => Room.bulkCreate(roomData);

module.exports = seedRooms;
