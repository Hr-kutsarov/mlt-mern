const mongoose = require('mongoose');

const DevlogEntrySchema = new mongoose.Schema({
    title: {type: String, required: true},
    date: {type: String, required: true},
    entry: {type: String, required: true}
}, { timestamps: true})


module.exports = mongoose.model('Devlog', DevlogEntrySchema)