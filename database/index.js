const db = require("./db");
const Campus = require("./campuses");
const Student = require("./students");


Campus.hasMany(Student,{
  foreignKey: `CampusID`,
});
Student.belongsTo(Campus,{
  foreignKey:  `CampusID`,
});

module.exports = {
  db,
  Campus,
  Student,
};
