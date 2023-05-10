const { Branch } = require('../models');
const branchData = [
  {
    name: "Bozeman",
    description: "Good view", 
    location: "123 Bozeman St, Bozeman MT",
    image_path: "/images/branch1.jpeg"
  },
  {
    name: "Missoula",
    description: "Good neighborhood",
    location: "456 Missoula St, Missoula MT",
    image_path: "/images/branch2.jpeg"
  },
  {
    name: "Whitefish",
    description: "Big rooms",
    location: "789 Whitefish St, Whitefish MT",
    image_path: "/images/branch3.jpeg"
  },
  {
    name: "Billings",
    description: "Lots of amenities",
    location: "111 Billings St, Billings MT",
    image_path: "/images/branch4.jpeg"
  },
  {
    name: "Great Falls",
    description: "welcoming staff",
    location: "222 Great Falls St, Great Falls MT",
    image_path: "/images/branch5.jpeg"
  },
];

const seedBranches = () => Branch.bulkCreate(branchData);

module.exports = seedBranches;
