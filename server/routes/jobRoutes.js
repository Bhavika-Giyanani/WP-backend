const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobController");

//^ Create a new job
router.post("/organization/job", jobController.createJob);

//^ Get all jobs
router.get("/organization/jobs", jobController.getAllJobs);

//^ Get a specific job by ID
router.get("/organization/job/:id", jobController.getJobById);

//^ Update a job
router.put("/organization/job/:id", jobController.updateJob);

//^ Delete a job
router.delete("/organization/job/:id", jobController.deleteJob);

module.exports = router;
