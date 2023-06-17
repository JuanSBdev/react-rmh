const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true 
      },
      name:{
         type: DataTypes.STRING,
         allowNull: false
      },
      status:{
         type: DataTypes.ENUM,
         values: ['Alive', 'Dead', 'Unknown'],
         allowNull: true,
      },
      species:{
         type: DataTypes.STRING,
         allowNull: true,
      },
      gender:{
         type: DataTypes.ENUM,
         values:['Female', 'Male', 'Genderless', 'Unknown'],
         allowNull: true
      },
      origin:{
         type: DataTypes.STRING,
         allowNull: true
         
      },
      image:{
         type: DataTypes.STRING,
         allowNull: true
      }
   }, { timestamps: false
    }
    );
};
