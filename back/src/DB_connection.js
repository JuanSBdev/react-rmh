require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const sequelize = new Sequelize(
   // URL
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
   { logging: false, native: false }
);

const  FavoriteModel = require('./models/Favorite')
const  UserModel = require('./models/User')
//
FavoriteModel(sequelize)
UserModel(sequelize)
//

const { User, Favorite } = sequelize.models;


Favorite.belongsToMany(User, {through: 'user_favorite'})
User.belongsToMany(Favorite, {through: 'user_favorite'})

module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
