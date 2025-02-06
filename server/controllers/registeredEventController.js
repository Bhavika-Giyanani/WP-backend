const EventRegistration = require("../models/EventRegistration");
const mongoose = require("mongoose");

//^ get all event registrations
const getEventRegistrations = async (req, res) => {
  try {
    const registrations = await EventRegistration.find().populate(
      "woman_id event_id"
    );
    res.status(200).json(registrations);
  } catch (error) {
    console.error("Error fetching event registrations:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//^ register a new event
const registerEvent = async (req, res) => {
  const { woman_id, name, phoneNumber, event_id } = req.body;

  if (!name || !phoneNumber || !event_id) {
    return res
      .status(400)
      .json({ message: "Name, phone number, and event ID are required." });
  }

  try {
    const newRegistration = new EventRegistration({
      woman_id,
      name,
      phoneNumber,
      event_id,
    });

    const savedRegistration = await newRegistration.save();
    res.status(201).json(savedRegistration);
  } catch (error) {
    console.error("Error registering event:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//^ count registrations for a particular event
//! Invalid Output : TO BE RESOLVED LATER
const countEventRegistrations = async (req, res) => {
  const event_id = req.params.id;
  console.log(event_id);
  if (!mongoose.Types.ObjectId.isValid(event_id)) {
    return res.status(400).json({ message: "Invalid event ID." });
  }

  try {
    const count = await EventRegistration.countDocuments({
      "event_id._id": event_id,
    });
    res.status(200).json({ count: count });
  } catch (error) {
    console.error("Error counting event registrations:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//^ get all participants for a particular event
const getParticipantsForEvent = async (req, res) => {
  const event_id = req.params.id;
  
  if (!mongoose.Types.ObjectId.isValid(event_id)) {
    return res.status(400).json({ message: "Invalid event ID." });
  }

  try {
    const participants = await EventRegistration.find({ event_id }).populate("woman_id");
    res.status(200).json(participants);
  } catch (error) {
    console.error("Error fetching participants for event:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getEventRegistrations,
  registerEvent,
  countEventRegistrations,
  getParticipantsForEvent,
};
