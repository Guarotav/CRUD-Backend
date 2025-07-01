const db = require("./db");
const Campus = require("./campuses");
const Student = require("./students");


Campus.hasMany(Student,{
  foreignKey: `Campus.id`,
});
Student.belongsTo(Campus,{
  foreignKey:  `Campus.id`,
});

module.exports = {
  db,
  Campus,
  Student,
};