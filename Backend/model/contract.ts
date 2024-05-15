import mongoose from "mongoose";

const contractSchema = new mongoose.Schema({
    user: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        email: {
            type: String,
            required: true
        },
    },
    product: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        name: { type: String, required: true },
        SN: {
            type: String,
            required: true
        },
        picture: { type: String, required: true }
    },
    shop: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Shop',
            required: true
        },
        email: {
            type: String,
            required: true
        },
        name: { type: String, required: true },
        picture: { type: String, required: true }
    },
    insurance: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Insurance',
            required: true
        },
        email: {
            type: String,
            required: true
        },
        TRN: { type: String, required: true },
        companyName: { type: String, required: true }
    },
    date: {
        type: Date,
        required: true
    },
    date_f: {
        type: Date,
        required: true
    },
    protVol: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
});

const Contract = mongoose.model("Contract", contractSchema);
export default Contract;