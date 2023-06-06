const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    title: {type: String},
    date: {type: String },
    price: { type: Number },
    seat: { type: Number },
    owner: { type: mongoose.Types.ObjectId }
})

module.exports = mongoose.model('Ticket', TicketSchema)
