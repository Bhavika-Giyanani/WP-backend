const mongoose = require('mongoose');

const eventRegistrationSchema = new mongoose.Schema({
    woman_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Woman' },
    event_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Event' },
    registration_date: { type: Date, default: Date.now } 
});

const EventRegistration = mongoose.model('EventRegistration', eventRegistrationSchema);

module.exports = EventRegistration;
