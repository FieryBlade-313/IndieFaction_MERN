const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let order = new Schema({
    order_id: {
        type: String
    },
    cid: {
        type: String
    },
    name: {
        type: String
    },
    address: {
        type: String
    },

    contact_no: {
        type: String
    },
    token: {
        type: String
    },
    status: {
        type: Number
    }
});

module.exports = mongoose.model('order', order);