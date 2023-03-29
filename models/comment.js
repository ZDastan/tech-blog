const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },

    },
    postId: {
      type: DataTypes.INTEGER,
        references: {
          model: 'post',
          key: 'id',
        },

    }

  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

module.exports = Comment;
