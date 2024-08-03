const express = require('express');
const { addJobApplication } = require('../controllers/application_controller');

const jobApplicationRouter = express.Router();

jobApplicationRouter.post("/add", addJobApplication);

module.exports = jobApplicationRouter;