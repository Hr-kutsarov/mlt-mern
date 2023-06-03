const Devlog = require('../models/Devlog')
const mongoose = require('mongoose')

// CREATE

const createEntry = async (req, res) => {
    const { title, date, entry } = req.params
    try {
        const devlog = await Devlog.create(title, date, entry)
        res.status(200).json(devlog)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

// READ

const getAllEntries = async (req, res) => {
    const entries = await Devlog.find().sort({createdAt: -1})
    res.status(200).json(entries)
}

const getEntryById = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Your data is not a valid Mongoose model ID"})
    }
    const entry = await Devlog.findById(id)
    if (!entry) {
        return res.status(400).json({error: "Devlog entry is not found."})
    } else {
        res.status(200).json(entry)
    }
}

// EDIT

const editEntry = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "This is not a proper ID."})
    }

    const entry = await Devlog.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!entry) {
        return res.status(404).json({error: 'Invalid id or object does not exist.'})
    } else {
        return res.status(200).json(entry)
    }
}

// DELETE

const deleteEntry = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid type of ID"})
    }
    const entry = await Devlog.findByIdAndDelete({_id: id})

    if (!entry) {
        res.status(400).json({error: error.message})
    } else {
        res.status(200).json(entry)
    }
}

module.exports = { createEntry, getAllEntries, getEntryById , editEntry, deleteEntry }