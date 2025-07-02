const { DataTypes } = require("sequelize");
const db = require("./db");

//Campus Model Defining
const Campuses = db.define("Campus", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  url:{
    type: DataTypes.STRING,
    allowNull: true,
    validate:{
      isUrl: true
    },
    defaultValue:'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg' 
  },
  address:{
    type: DataTypes.STRING,
    allowNull: false,

  },
  description:{
    type: DataTypes.TEXT,
  }

});

module.exports = Campuses;
