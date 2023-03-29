const { Post } = require('../models');

const postdata = [
  {
    title: 'Hi',
    userId: 1,
    body:'Hello everyone'
  },
  {
    title: 'Tech',
    userId: 2,
    body:'i think tech is cool.'
  },
  {
    title: 'Goodby',
    userId: 3,
    body:'See you soon.'
  }
 
];

const postSeed = () => Post.bulkCreate(postdata);

module.exports = postSeed;