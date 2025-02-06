const mongoose = require('mongoose');
const AppliedJobs = require("../models/AppliedJobs");
const Job = require("../models/Job");

exports.createApplication = async (req, res) => {
  try {
    const { jobId, applicantName } = req.body;

    const jobObjectId = new mongoose.Types.ObjectId(jobId);

    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    const application = new AppliedJobs({
      jobId: jobObjectId,
      jobTitle: job.title,
      applicantName,
    });

    await application.save();
    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getApplications = async (req, res) => {
  try {
    const applications = await AppliedJobs.find()
      .populate("jobId", "title") // Populate jobId field with the job's title
      .exec();

    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
