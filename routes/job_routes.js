const express = require('express');
const { addJobs, deleteJobs, getAllJobs } = require('../controllers/job_controller.js');

const jobsRouter = express.Router();

jobsRouter.post("/add", addJobs);
jobsRouter.post("/delete/:id", deleteJobs);
jobsRouter.get("/allJobs", getAllJobs);
// jobsRouter.post('/add/:id', addJobs);

module.exports = jobsRouter;