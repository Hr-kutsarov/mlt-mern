const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    email: {
        type: Schema.Types.Mixed
    },
    password: {
        type: Schema.Types.Mixed
    },
    role: {
        type: String
    }
})

module.exports = mongoose.model('User', UserSchema)