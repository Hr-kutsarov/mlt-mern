const mongoose = require('mongoose')

const connectDB = async () => {
    const connection = await mongoose.connect(process.env.MONGO)
    console.log(`MongoDB connected: ${connection.connection.host}`.cyan.underline.bold)
}

module.exports = connectDB;