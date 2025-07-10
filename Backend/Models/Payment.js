const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    name: String,
    phone: String,
    address: String,
    course: String,
    amount: Number,
    paymentId: String,
    status: String,
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);
