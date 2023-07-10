const mongoose = require('mongoose')
const Ticket = require('../models/Ticket')

// CREATE

const createTicket = async (req, res) => {
    const { title, date, price, seat, owner } = req.body
    try {
        const ticket = await Ticket.create({title: title, date: date, price: price, seat: seat, owner: owner})
        res.status(201).json(ticket)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

// READ

const getAllTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find()
        res.status(200).json(tickets)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

const getTicketsByName = async (req, res) => {
    const { title } = req.body

    try {
        const tickets = await Ticket.find({ title: title })
        res.status(200).json(tickets)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

const getUserTickets = async (req, res) => {
    const { id } = req.params
    try {
        const tickets = await Ticket.find({owner: id})

        res.status(200).json(tickets)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

const getTicketById = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Wrong type of ID"})
    }
    
    try {
        const ticket = await Ticket.findById(id)
        if (!ticket) {
            res.status(400).json({message: "Ticket does not exist."})
        }
        res.status(200).json(ticket)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}

// EDIT

const editTicket = async (req, res) => {
    const { id } = req.params
    const { title, date, price, seat, owner } = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "This is not a proper ID."})
    }

    try {
        const context = {title: title, date: date, price: price, seat: seat, owner: owner}
        const ticket = await Ticket.findOneAndUpdate({_id: id}, {$set: context})
        res.status(200).json(ticket)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

// DELETE

const deleteTicket = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "Invalid type of ID"})
    }
    try {
        const ticket = await Ticket.findByIdAndRemove({_id: id})
        res.status(200).json(ticket)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

module.exports = { createTicket, getUserTickets, getTicketById, getTicketsByName, getAllTickets, editTicket, deleteTicket}