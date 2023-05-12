//may need to adjust the order of seeding if we run into an error like: cannot insert row....
const seedBranchData = require("./seedBranchData");
const seedRoomData = require("./seedRoomData");

const sequelize = require("../config/connection");

const seedAll = async () => {
  try{
    await sequelize.sync({ force: true });
    console.log("\n----- DATABASE SYNCED -----\n");

    await seedBranchData();
    console.log("\n----- BRANCHES SEEDED -----\n")

    await seedRoomData();
    console.log("\n----- ROOMS SEEDED -----\n");
  }catch(err){
    console.log("Error in seeding Database")
  } 

  process.exit(0);
};

seedAll();
