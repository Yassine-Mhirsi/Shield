import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    email: String,
    password: String,
});

const Admin = mongoose.model("Admin", adminSchema,"Admin");
export default Admin;