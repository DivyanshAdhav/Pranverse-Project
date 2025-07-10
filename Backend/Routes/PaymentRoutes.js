const express = require('express');
const Razorpay = require('razorpay');
const router = express.Router();
const Payment = require('../models/Payment');

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// 1. Create Razorpay Order
router.post('/create-order', async (req, res) => {
    const { amount } = req.body;

    const options = {
        amount: amount * 100, // in paisa
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
    };

    try {
        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: 'Error creating order' });
    }
});

// 2. Store payment details in DB
router.post('/verify', async (req, res) => {
    const { name, phone, address, course, amount, paymentId, status } = req.body;

    try {
        const newPayment = new Payment({ name, phone, address, course, amount, paymentId, status });
        await newPayment.save();
        res.status(200).json({ message: "Payment stored" });
    } catch (error) {
        res.status(500).json({ error: "DB save failed" });
    }
});

module.exports = router;
