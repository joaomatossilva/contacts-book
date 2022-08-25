const mongoose = require('mongoose');

const schema = mongoose.Schema({
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

const Handle = mongoose.model('Handle', schema);

module.exports = Handle;