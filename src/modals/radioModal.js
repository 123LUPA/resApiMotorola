import mongoose from 'mongoose';

const radioModal = new mongoose.Schema({
    id: { 
        unique:true,
        type: Number,
        required: true
    },
    alias: { type: String, required: true },
    location: { type: String, required: false },
    allowed_locations: { type: ['string'] }
});

module.exports = mongoose.model('radios', radioModal);

