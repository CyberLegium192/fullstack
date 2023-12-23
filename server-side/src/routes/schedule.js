const express = require("express");
const router = express.Router();
const scheduleController = require('../controller/schedule-controller.js')

// GET SCHEDULE LIST
router.get("/", (req, res) => scheduleController.getSchedule(req, res))

// POST SCHEDULE
router.post("/post/schedule", (req, res) => scheduleController.postSchedule(req, res))


// GET MEMBER PERFORM IN SCHEDULE
router.get("/memberPerform/:id", (req, res) => scheduleController.getMemberPerform(req, res))


module.exports = router;