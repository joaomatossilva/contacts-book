const mongoose = require('mongoose');

async function connect() {
    return await mongoose.connect('mongodb://localhost/contactsbook');
}

module.exports = connect;