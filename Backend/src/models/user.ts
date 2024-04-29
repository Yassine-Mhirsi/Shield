import mongoose from "mongoose";

// Define enum for allowed roles
const allowedRoles = ["client", "shop", "repair shop", "insurance"];

const userSchema = new mongoose.Schema({
  auth0Id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  // password: {
  //   type: String,
  //   required: true,
  // },
  name: {
    type: String,
  },
  phone: {
    type: Number,
  },
  role: {
    type: String,
    enum: allowedRoles,
    default: "client",
  },
});

const User = mongoose.model("User", userSchema);
export default User;
