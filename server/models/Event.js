const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: {type: String},
    summary: {type: String},
    content: {type: String},
    pictureUrl: {type: String}
})

module.exports = mongoose.model('Event', EventSchema)