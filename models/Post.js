const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    poster: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    posted: {
        type: Date,
        default: Date.now
    }
})

//mongoose.model(collection, schema)
module.exports = mongoose.model('Posts', PostSchema);