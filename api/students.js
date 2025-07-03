const express = require("express");
const router = express.Router();
const { Campus, Student } = require("../database");

// Fetching all students
router.get("/", async (req, res) => {
    try {
        const students = await Student.findAll();
        console.log (students);
        res.send (students);
  }
    catch(err){
        res.status(400).send("Fail to fetch all students");
  }
});

//Fetching single student by id
router.get("/:id", async (req, res) => {
    try{
        const studentId = req.params.id;
        const student = await Student.findByPk(studentId, {include: Campus});
        if (!student){
            return res.sendStatus(404);
        }
         res.json(student);
    }
    catch(err){
        res.status(400).send("Fail to fetch this student");
    }
});


/*router.patch("/", async (req, res) => {
    try{
    }
    catch(err){
        
    }
});*/

//Deleting a specific student
router.delete("/:id", async (req, res) => {
    try{
        const student = await Student.findByPk(req.params.id);
        if (!student){
            return res.sendStatus(404);
        }
        await student.destroy();
        res.sendStatus(200);
    }
    catch(err){
        res.status(400).send("Fail to delete this student")
    }
});

//Creating a specific student
router.post("/", async (req, res) => {
    try{
        const student = await Student.create(req.body);
        res.status(200).send(student);
    }
    catch(err){
        res.status(400).send("Fail to create this student")
    }

});

module.exports = router;
