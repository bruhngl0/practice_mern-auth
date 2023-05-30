const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'fill the input']
    },

    email: {
        type: String,
        required: [true, 'fill the input']
    },

    password: {
        type: String,
        required: [true, 'fill the input']
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model('User', userSchema)