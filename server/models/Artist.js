const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema({
    name: { type: String , unique: true},
    birthDate: { type: String },
    bio: { type: String } 
})

module.exports = mongoose.model('Artist', ArtistSchema)
