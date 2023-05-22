const mongoose = require('mongoose');

// id: {type: GraphQLID},
// title: { type: GraphQLString },
// intro: { type: GraphQLString },
// content: { type: GraphQLString }

const EventSchema = new mongoose.Schema({
    title: {
        type: String
    },
    intro: {
        type: String
    },
    content: {
        type: String
    }
})

module.exports = mongoose.model('Event', EventSchema)