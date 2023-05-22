const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    title: {
        type: String
    },
    created: {
        type: Date, 
        default: Date.now
    },
    price: {
        type: Number
    },
    email: {
        type: String
    }
})

module.exports = mongoose.model('Ticket', TicketSchema)