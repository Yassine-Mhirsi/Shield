import mongoose from "mongoose";

const insuranceTypeSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const insuranceSchema = new mongoose.Schema({
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
    TRN: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    insurancetypes: [insuranceTypeSchema]
});

const Insurance = mongoose.model("Insurance", insuranceSchema);
export default Insurance;
