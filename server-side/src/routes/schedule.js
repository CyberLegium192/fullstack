const express = require("express");
const db = require('../utils/db.js')
const router = express.Router();
const scheduleController = require('../controller/schedule-controller.js')

// GET SCHEDULE LIST
router.get("/scheduleList", (req, res) => scheduleController.getSchedule(req, res))

// POST SCHEDULE
router.post("/post/schedule", (req, res) => scheduleController.postSchedule(req, res))

// add schedule + member 
router.post('/api/addMembers', (req, res) => {
  scheduleController.postScheduleAndMember(req, res)
})

// DELETE MEMBER PERFORM AND SCHEDULE
router.delete('/delete/schedule/:id', (req, res) => {
  const scheduleId = req.params.id; 
  db.query('DELETE FROM membersPerform WHERE schedule_id = ?', [scheduleId], (err, memberResult) => {
    if (err) {
      console.error('Error deleting membersPerform:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    db.query('DELETE FROM schedule WHERE id = ?', [scheduleId], (err, scheduleResult) => {
      if (err) {
        console.error('Error deleting schedule:', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      res.json({ message: 'Data deleted successfully', scheduleId });
    });
  });
})





// GET MEMBER PERFORM IN SCHEDULE
router.get("/memberPerform/:id", (req, res) => scheduleController.getMemberPerform(req, res))


module.exports = router;