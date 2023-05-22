const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    title: {type: String},
    created: {type: Date, default: Date.now},
    price: { type: Number },
    seat: { type: Number },
    owner: { type: String }

})

module.exports = mongoose.model('Ticket', TicketSchema)
