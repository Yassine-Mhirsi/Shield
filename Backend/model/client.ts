import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema(
    {
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
        phone: { type: Number},
        state: { type: String},
        zip_code: { type: Number},
        city: { type: String},
        // address: { type: String},
        listProducts: { type: [String], default: [], sparse: true },
    }
);

const Client = mongoose.model("Client", ClientSchema);
export default Client;
