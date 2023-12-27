const modelsSchedule = require("../models/schedule-models.js")

// GET LIST SCHEDULE
const getSchedule = async (req, res) => {
  try {
    await modelsSchedule.getSchedule(req, res)
  } catch (e) {
    res.json({
      erorr : e.message
    })
  }
}

// POST SCHEDULE 
const postSchedule = async (req, res) => {
  await modelsSchedule.postSchedule(req, res)
}

// POST SCHEDULE AND MEMBERPERFROM
const postScheduleAndMember = async (req, res) => {
  await modelsSchedule.scheduleAndMemberPerform(req,res)
}


// GET MEMBER PERFORM 
const getMemberPerform = async (req, res) => {
  try {
    await modelsSchedule.getMemberPerform(req, res)
  } catch (e) {
    res.json({
      erorr : e.message
    })
  }
}

module.exports={
  getSchedule,
  postSchedule,
  postScheduleAndMember,
  getMemberPerform,
}