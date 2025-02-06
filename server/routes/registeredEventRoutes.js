const express = require("express");
const {
  getEventRegistrations,
  registerEvent,
  countEventRegistrations,
  getParticipantsForEvent
} = require("../controllers/registeredEventController");

const router = express.Router();

//^ get all registered events
router.get("/event_registrations", getEventRegistrations);

//^ register a new event
router.post("/event_registration", registerEvent);

//^ count number of applicants for an event
router.get("/event_registrations/count/:id", countEventRegistrations);

//^ 
router.get("/event_registrations/registrations/:id",getParticipantsForEvent)
module.exports = router;
