import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
    contract: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Contract',
            required: true
        },
        email: {
            type: String,
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
    insurance: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Insurance',
            required: true
        },
        TRN: {
            type: String,
            required: true
        },
        companyName: {
            type: String,
            required: true
        }
    },
    product: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        SN: {
            type: String,
            required: true
        }
    },
    shop: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Shop',
            required: true
        },
        name: {
            type: String,
            required: true
        },
        picture: {
            type: String,
            required: true
        }
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
});

const Report = mongoose.model("report", reportSchema);
export default Report;
