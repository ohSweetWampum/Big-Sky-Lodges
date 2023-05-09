//may need to adjust the order of seeding if we run into an error like: cannot insert row....

const seedUserData = require("./userData");
const seedBranchData = require("./branchData");
const seedRoomData = require("./roomData");
const seedReservationData = require("./seedBranchData");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUserData();
  console.log("\n----- USERS SEEDED -----\n");

  await seedBranchData();
  console.log("\n----- BRANCHES SEEDED -----\n");

  await seedRoomData();
  console.log("\n----- ROOMS SEEDED -----\n");

  await seedReservationData();
  console.log("\n----- RESERVATIONS SEEDED -----\n");

  process.exit(0);
};

seedAll();
