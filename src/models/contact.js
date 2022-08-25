const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    type: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true,
        trim: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});

const Contact = mongoose.model('Contact', schema);

module.exports = Contact;