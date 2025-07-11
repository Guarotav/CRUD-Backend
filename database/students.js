const { DataTypes } = require("sequelize");
const db = require("./db");

//Student Model Defining
const Students = db.define("Student", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email:{
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
        isEmail: true
    }
  },

  image: {
    type: DataTypes.STRING,
    allowNull: true,
    validate:{
      isUrl: true
    },
    defaultValue:'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg' 
  },
   
  gpa: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate:{
        min:0,
        max:4,
    }
  },
});

module.exports = Students;
