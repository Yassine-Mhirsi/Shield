import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    role: { type: String },
});

const User = mongoose.model("User", userSchema);
export default User;
