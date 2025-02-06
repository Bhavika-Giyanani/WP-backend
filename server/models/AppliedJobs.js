const mongoose = require('mongoose');

const AppliedJobsSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true
  },
  
  applicantName: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('AppliedJobs', AppliedJobsSchema);