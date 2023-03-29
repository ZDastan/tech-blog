const { User } = require('../models');

const userdata = [
  {
    username: 'AlpD',
    password: '2345',
  },
  {
    username: 'John',
    password: '2345',
  },
  {
    username: 'Mila',
    password: '2345',
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;