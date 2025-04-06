const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    nationalID: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    roomNumber: {
        type: Number,
        required: true,
    },
    bookingDate: {
        type: Date,
        required: true,
    },
    paymentAmount: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Booking', bookingSchema);