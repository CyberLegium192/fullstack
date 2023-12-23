let db = require("../utils/db.js")

// LIST SCHEDULE QUERY
const getSchedule = (req, res) => {
  const sql = `SELECT * FROM schedule`
  db.query(sql, (err, schedule) => {
    if (err) throw err 
    res.json({
      message: "success",
      schedule
    })
  })
}

// POST SCHEDULE QUERY
const postSchedule = (req, res) => {
  const {setlist, tema, date, time, link} = req.body
  
  const sql = `INSERT INTO schedule (setlist, tema, date, time, link) VALUES (?, ?, ?, ?, ?)`
  db.query(sql, [setlist, tema, date, time, link], (err, schedule) => {
    if (err) throw err
    res.json({
      message: 'success',
      schedule
    })
  })
}


// MEMBER PERFORM QUERY
const getMemberPerform = (req, res) => {
  const id = req.params.id
  const sql = `SELECT * FROM membersPerform WHERE schedule_id='${id}'`
  db.query(sql, (err, memberPerform) => {
    if (err) throw err 
    res.json({
      message: "success",
      memberPerform
    })
  })
}


module.exports={
  getSchedule,
  getMemberPerform,
  postSchedule
}