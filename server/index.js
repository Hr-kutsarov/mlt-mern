const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

// misc 
require('colors')

const PORT = process.env.PORT || 5050;

// import controllers
const { createEntry, getAllEntries, getEntryById, editEntry, deleteEntry, getLatestEntries  } = require('./controllers/devlogControllers')
const { createEvent, getAllEvents, getEventById, editEvent, deleteEvent} = require('./controllers/eventControllers')
const { login, register, deleteUser, updateRole} = require('./controllers/authControllers')
const { createTicket, getTicketById, getAllTickets, editTicket, deleteTicket, getUserTickets } = require('./controllers/ticketControllers')
const { createArtist, getArtistById, getAllArtists, editArtist, deleteArtist} = require('./controllers/artistControllers')

// __INIT__
const app = express(); 

// logging
app.use((req, res, next) => {
    console.log(`${req.method} method on path ${req.path}`.underline.bgBlue)
    next()
})

// middleware
app.use(cors())
app.use(express.json())

// ROUTES 

// Authentication

app.post('/register', register)
app.post('/login', login)
app.put('/switch-role/:id', updateRole)
app.delete('/delete-user/:id', deleteUser)

// Devlog

app.get('/devlog', getAllEntries)
app.get('/devlog/latest', getLatestEntries)
app.get('/devlog/:id', getEntryById)
app.post('/devlog', createEntry)
app.put('/devlog/:id', editEntry)
app.delete('/devlog/:id', deleteEntry)

// Events

app.get('/plays', getAllEvents)
app.post('/plays', createEvent)
app.get('/plays/:id', getEventById)
app.put('/plays/:id', editEvent)
app.delete('/plays/:id', deleteEvent)

// Tickets

app.get('/tickets', getAllTickets)
app.get('/my-tickets/:id', getUserTickets)
app.post('/tickets', createTicket)
app.get('/tickets/:id', getTicketById)
app.put('/tickets/:id', editTicket)
app.delete('/tickets/:id', deleteTicket)

// Artists

app.get('/artists', getAllArtists)
app.post('/artists', createArtist)
app.get('/artists/:id', getArtistById)
app.put('/artists/:id', editArtist)
app.delete('/artists/:id', deleteArtist)


// initialize DB and server
const start = async () => {
    try {
        mongoose.connect(process.env.MONGO)
            .then(()=>{
            console.log(`Database connected successfully.`)
            app.listen(PORT, () => {
                console.log(`Server running on port ${PORT}`)
            })})
            .catch((err) => {
                console.log(err)
            })
    } catch (error) {
        console.error(error)

        // terminate the server process
        // process.exit(1)
    }
}

start()