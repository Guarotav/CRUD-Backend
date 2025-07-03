const db = require("./db");
const Campus = require("./campuses");
const Student = require("./students");


Campus.hasMany(Student, { foreignKey: `CampusId`});
Student.belongsTo(Campus,{foreignKey:  `CampusId`});


module.exports = {
  db,
  Campus,
  Student,
};