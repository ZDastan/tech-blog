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
    username: 'Arshan',
    password: '1234567aQ',
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;