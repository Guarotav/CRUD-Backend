const express = require("express");
const router = express.Router();
const { Campus, Student } = require("../database");

// Fetching all campuses
router.get("/", async (req, res) => {
    try {
        const campuses = await Campus.findAll();
        res.send (campuses);
  }
    catch(err){
        res.status(400).send("Fail to fetch all campuses");
  }
});

//Fetching single campus by id
router.get("/:id", async (req, res) => {
    try{
        const campusId = req.params.id;
        const campus = await Campus.findByPk(campusId, {include: Student});
        if (!campus){
            return res.sendStatus(404);
        }
        res.send(campus);
    }
    catch(err){
        res.status(400).send("Fail to fetch this campus");
    }
});

// Updating a campus
router.patch("/:id", async (req, res) => {
  try {
    const campus = await Campus.findByPk(req.params.id);
    if (!campus) {
      return res.status(404);
    }
    const updatedCampus = await campus.update(req.body);
    res.send(updatedCampus);
  } catch (error) {
    res.status(400).send("Failed to update campus.");
  }
});

//Deleting a specific campus
router.delete("/:id", async (req, res) => {
    try{
        const campus = await Campus.findByPk(req.params.id);
        if (!campus){
            return res.sendStatus(404);
        }
        await campus.destroy();
        res.sendStatus(200);
    }
    catch(err){
        res.status(400).send("Fail to delete this campus")
    }
});

//Creating a specific campus
router.post("/", async (req, res) => {
    try{
        const campus = await Campus.create(req.body);
        res.status(200).send(campus);
    }
    catch(err){
        res.status(400).send("Fail to create this campus")
    }

});

module.exports = router;
