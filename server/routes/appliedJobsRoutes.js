const express = require('express');
const router = express.Router();
const { createApplication, getApplications } = require('../controllers/appliedJobsController');

router.post('/job-application', createApplication);
router.get('/job-applications', getApplications);

module.exports = router;