import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    connection: String,
    client_id: String,
    email: String,
    password: String,
    is_signup: Boolean,
    tenant: String,
    transaction: mongoose.Schema.Types.Mixed,
    form: mongoose.Schema.Types.Mixed,
    request_language: String,
    usePasskey: Boolean,
    email_verified: Boolean,
    role: String,
});

const User = mongoose.model("User", userSchema);
export default User;