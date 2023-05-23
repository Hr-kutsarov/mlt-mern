const express = require('express');
const cors = require('cors')
require('dotenv').config()
const colors = require('colors')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema/schema');
const connectDB = require('./config/db')
const port = process.env.PORT || 5050;

const app = express(); 

app.use(cors())
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}
))
// connect DB
connectDB()

app.listen(port, console.log(`Server running on port ${port}`))