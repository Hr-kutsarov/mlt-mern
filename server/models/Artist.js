const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema({
    name: { type: String },
    birthDate: { type: String },
    bio: { type: String },
    photo: { type: String }
})

module.exports = mongoose.model('Artist', ArtistSchema)
