const mongoose = require('mongoose')
const Event = require('../models/Event')
const Artist = require('../models/Artist')

    // name: { type: String },
    // birthDate: { type: String },
    // bio: { type: String } 

// CREATE

const createArtist = async (req, res) => {
    const { name, bio, photo } = req.body
    try {
        const context = {name: name, bio: bio, photo: photo}
        const artist = await Artist.create(context)
        res.status(201).json(artist)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

// READ

const getAllArtists = async (_, res) => {
    try {
        const artist = await Artist.find()
        res.status(200).json(artist)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

const getArtistById = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Wrong ID"})
    }
    
    try {
        const artist = await Artist.findById(id)
        res.status(200).json(artist)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

// EDIT

const editArtist = async (req, res) => {
    const { id } = req.params
    const { name, birthDate, bio } = req.body
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "Artist with this ID does not exist"})
    }

    try {
        const artist = await Artist.findOneAndUpdate({_id: id}, {$set: {name: name, birthDate: birthDate, bio: bio}})
        res.status(200).json(artist)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

// DELETE

const deleteArtist = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "Invalid ID"})
    }
    try {
        const artist = await Artist.findByIdAndDelete(id)
        res.status(200).json(artist)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

module.exports = { createArtist, getAllArtists, getArtistById, editArtist, deleteArtist }