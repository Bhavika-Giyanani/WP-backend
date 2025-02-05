const express = require('express');
const router = express.Router();
const { createEvent, getAllEvents } = require('../controllers/eventController');

//^ create a new event
router.post('/organization/event', createEvent);

//^ get all events
router.get('/organization/events', getAllEvents);

//^ get all events
router.get('/events', getAllEvents);

module.exports = router;
