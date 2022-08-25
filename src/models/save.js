const mongoose = require('mongoose');

const schema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    savedUserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
});

const Save = mongoose.model('Save', schema);

module.exports = Save;