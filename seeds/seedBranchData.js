const { Branch } = require('../models');
const branchData = [
  {
    name: "Bozeman",
    description: "Good view", 
    location: "123 Bozeman St, Bozeman MT",
  },
  {
    name: "Missoula",
    description: "Good neighborhood",
    location: "456 Missoula St, Missoula MT",
  },
  {
    name: "Whitefish",
    description: "Big rooms",
    location: "789 Whitefish St, Whitefish MT",
  },
  {
    name: "Billings",
    description: "Lots of amenities",
    location: "111 Billings St, Billings MT",
  },
  {
    name: "Great Falls",
    description: "welcoming staff",
    location: "222 Great Falls St, Great Falls MT",
  },
];

const seedBranches = () => Branch.bulkCreate(branchData);

module.exports = seedBranches;
