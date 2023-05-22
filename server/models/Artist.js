const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema({
    name: { type: String },
    age: { type: Date },
    bio: { type: String } 
})

module.exports = mongoose.model('Artist', ArtistSchema)
