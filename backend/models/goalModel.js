
const mongoose = require("mongoose")

let goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'please add a text value']
    }
    },
    {
        timestamps: true,

    })

module.exports = mongoose.model('Goal', goalSchema)