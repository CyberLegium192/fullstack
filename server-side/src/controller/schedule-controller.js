const modelsSchedule = require("../models/schedule-models.js")
const db = require('../utils/db.js')

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

// GET MEMBER PERFORM  WITH LIST
const getMemberPerform = async (req, res) => {
  try {
    await modelsSchedule.getMemberPerform(req, res)
  } catch (e) {
    res.json({
      erorr : e.message
    })
  }
}


// GET MEMBER AND MEBERPERFORM BY ID
const getMemberAndSchedule = async (req, res) => {
  await modelsSchedule.getScheduleAndMemberPerforms(req,res)
}

// POST SCHEDULE 
const postSchedule = async (req, res) => {
  await modelsSchedule.postSchedule(req, res)
}

// POST SCHEDULE AND MEMBERPERFROM
const postScheduleAndMember = async (req, res) => {
  await modelsSchedule.scheduleAndMemberPerform(req,res)
}

// DELTE POST SCHEDULE
const deletePostSchedule = async (req, res) => {
  await modelsSchedule.deleteScheduleQuery(req, res)
}





module.exports={
  getSchedule,
  postSchedule,
  postScheduleAndMember,
  deletePostSchedule,
  getMemberPerform,
  getMemberAndSchedule
}