// src/models/booking.model.js
import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee', // 👈 Points to Employee model
        required: true
    },
    transactionIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction'
    }],
    yautId: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true,
        match: [/^(?:[01]\d|2[0-3]):[0-5]\d$/, 'Time must be in HH:MM format']
        // Example: "14:30" (24-hour format)
    },
    startTime: {
        type: String,
        required: true,
        match: [/^(?:[01]\d|2[0-3]):[0-5]\d$/, 'Start Time must be in HH:MM format']
        // Example: "14:45"
    },
    quotedAmount: {
        type: Number,
        required: true,
        min: 0
    },
    pendingAmount: {
        type: Number,
        required: true,
        min: 0
    },
    status: {
        type: String,
        enum: ['Initiated', 'InProgress', 'Success', 'Terminated'],
        default: 'Initiated'
    }
}, {
    timestamps: true
});

export const BookingModel = mongoose.model('Booking', bookingSchema);
