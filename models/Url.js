const mongoose = require('mongoose');
const shortId = require('shortid')

const urlSchema = new mongoose.Schema({
    longUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
        default: shortId.generate()
    }
})

module.exports = mongoose.model('Url', urlSchema)