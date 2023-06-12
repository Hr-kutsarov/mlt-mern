const mongoose = require('mongoose')
const User = require('../models/User')
const bcrypt = require('bcrypt')


const register = async (req, res) => {
    const { username, email, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(hashedPassword)
    try {
        const user = await User.create({username: username, email: email, password: hashedPassword})
        res.status(201).json({message: `${username} created`})
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

// READ

const login = async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await User.find({username: username})
        const hashedPassword = user[0].password
        const match = await bcrypt.compare(password, hashedPassword)

        if (match) {
            res.status(200).json({message: {id: user[0]._id, username: user[0].username, role: user[0].role}})
        } else {
            res.status(400).json({message: "Incorrect password."})
        }

    } catch (err) {
        res.status(400).json({message: "Invalid data."})
    }
}

// UPDATE 

const updateRole = async (req, res) => {
    const { id } = req.params
    const { role } = req.body 

    try {
        const user = await User.findByIdAndUpdate({_id: id}, {role: role})
        if (!user) {
            res.status(400).json({message: "User not found."})
        }
        res.status(200).json({message: role})

    } catch (err) {
        res.status(400).json({message: err.message})
    }
}

// DELETE 

const deleteUser = async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findOneAndRemove({_id: id})
        res.status(200).json({message: `Deleted-${user.username}`})
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}
module.exports = { register, login, updateRole, deleteUser }