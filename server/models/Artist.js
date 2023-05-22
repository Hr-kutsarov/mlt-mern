const mongoose = require('mongoose');

// id: {type: GraphQLID},
// title: { type: GraphQLString },
// intro: { type: GraphQLString },
// content: { type: GraphQLString }

const ArtistSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Date
    },
    info: {
        type: String
    }
})

module.exports = mongoose.model('Artist', ArtistSchema)