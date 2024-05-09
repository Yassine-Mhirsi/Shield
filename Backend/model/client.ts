import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema(
    {
        user: {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            // name: { type: String, required: true },
            // picture: { type: String, required: true }
        },
        phone: { type: Number, required: true },
        state: { type: String, required: true },
        zip_code: { type: Number, required: true },
        city: { type: String, required: true },
        adress: { type: String, required: true },
        listProducts: { type: [String], default: [], sparse: true },
    }
);

const Client = mongoose.model("Client", ClientSchema);
export default Client;
