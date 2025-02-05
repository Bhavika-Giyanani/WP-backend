const Event = require('../models/Event');
const mongoose = require('mongoose');

//^ create a new event
const createEvent = async (req, res) => {
    try {
        const { organizationId, title, description, location, date } = req.body;
        const newEvent = new Event({
            _id: new mongoose.Types.ObjectId(),
            organizationId,
            title,
            description,
            location,
            date
        });
        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//^ get all events
const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createEvent,
    getAllEvents
};
