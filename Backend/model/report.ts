import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
    contract: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Contract',
            required: true
        },
    },
    user: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        email: {
            type: String,
            required: true
        }
    },
    product: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            // required: true
        },
        name: { type: String, required: true },
        SN: {
            type: String,
            required: true
        },
        picture: { type: String, required: true }
    },
    desc: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "waiting"
    },
    reason: {
        type: String,
    },
    type: {
        type: String,
        required: true,
    },
});

const Report = mongoose.model("report", reportSchema);
export default Report;
