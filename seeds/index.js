const sequelize = require('../config/connection');
const userSeed = require('./userSeed');
const postSeed = require('./postSeed');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await userSeed();

  await postSeed();

  process.exit(0);
};

seedAll();