const mongoose = require('mongoose');

const DevlogEntrySchema = new mongoose.Schema({
    title: {type: String},
    created: {type: Date, default: Date.now},
    entry: {type: String}
})

module.exports = mongoose.model('DevlogEntry', DevlogEntrySchema)