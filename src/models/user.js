const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    externalLogins: [{
        providerName: {
            type: String,
            required: true
        },
        externalId: {
            type: String,
            required: true
        }
    }]
});

const User = mongoose.model('User', schema);

module.exports = User;