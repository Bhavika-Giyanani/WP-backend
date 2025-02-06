const mongoose = require('mongoose');

const eventRegistrationSchema = new mongoose.Schema({
    woman_id: { type: mongoose.Schema.Types.ObjectId,
    // required: true, 
    ref: 'Woman' },
    name:{type:String, trim:true, unique:true, required:true},
    phoneNumber:{type:Number, trim:true, unique:true, required:true},
    event_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Event' },
    registration_date: { type: Date, default: Date.now } 
});

const EventRegistration = mongoose.model('EventRegistration', eventRegistrationSchema, "event_registrations");

module.exports = EventRegistration;
