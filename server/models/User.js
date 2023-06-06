const mongoose = require('mongoose');

// the default value will be changed later,
// but let's first build the funtionality within react with if(role=moderator) => see content
// new users without this permission won't be able to see some content once the app content is conditionally rendered

const defaultValue = 'moderator'

const UserSchema = new mongoose.Schema({
    username: {
        type: String, required: true, unique: true
    },
    email: {
        type: String, required: true, unique: true
    },
    password: {
        type: String, required: true
    },
    role: {
        type: String, default: defaultValue
    }

}, {timestamps: true})

module.exports = mongoose.model('User', UserSchema)