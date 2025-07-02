const express = require("express");
const router = express.Router();
const campusRouter = require("./campuses");
const studentRouter = require("./students");

router.use("/campuses", campusRouter);
router.use("/students", studentRouter);

module.exports = router;
