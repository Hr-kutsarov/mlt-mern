const mongoose = require('mongoose')
const Event = require('../models/Event')

// CREATE

const createEvent = async (req, res) => {
    const { title, summary, content, pictureUrl, date, price, artists } = req.body
    try {
        const event = await Event.create({title: title, summary: summary, content: content, pictureUrl: pictureUrl, date: date, price: price, artists: artists})
        res.status(201).json(event)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

// READ

const getRelatedEventsById = async (req, res) => {
    const { id } = req.params

    try {
        const events = await Event.find({ "artists._id": id })
        res.status(200).json(events)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

// const getRelatedEvents = async (req, res) => {
//     const { name } = req.body

//     try {
//         const events = await Event.find({ "artists.name": name })
//         res.status(200).json(events)
//     } catch (err) {
//         res.status(400).json({error: err.message})
//     }
// }

const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find().sort({createdAt: -1})
        res.status(200).json(events)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}


const getUpcomingEvents = async (req, res) => {
    try {
        const now = new Date()
        const events = await Event.find({ date: {$gte: now}}).sort({date: 1})
        res.status(200).json(events)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

const getEventById = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Wrong ID"})
    }

    const event = await Event.findById(id)

    if (!event) {
        return res.status(400).json({error: "Wrong ID or item does not exist."})
    } else {
        res.status(200).json(event)
    }
}

// EDIT

const editEvent = async (req, res) => {
    const { id } = req.params
    const { title, summary, content, pictureUrl, date, price } = req.body
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "This is not a proper ID."})
    }

    const event = await Event.findOneAndUpdate({_id: id}, {$set: {title: title, summary: summary, content: content, pictureUrl: pictureUrl, date: date, price: price}})

    if (!event) {
        return res.status(400).json({error: 'Invalid id or object does not exist.'})
    }
    return res.status(200).json(event)
}

// DELETE

const deleteEvent = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "Invalid type of ID"})
    }
    const event = await Event.findByIdAndDelete({_id: id})

    if (!event) {
        res.status(400).json({error: error.message})
    }
    res.status(200).json(event)

}

module.exports = { createEvent, getAllEvents, getRelatedEventsById, getUpcomingEvents, getEventById, editEvent, deleteEvent }