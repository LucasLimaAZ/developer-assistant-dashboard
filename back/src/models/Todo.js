const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        default: Date.now,
        type: Date,
    }
})

module.exports = mongoose.model('Todo', TodoSchema)