import mongoose from "mongoose";
// import User from "./user";

const ProductSchema = new mongoose.Schema(
  {
    SN: { type: String, default: null },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    photo: { type: String, required: true },
  },
  { timestamps: true }
);


const Product = mongoose.model("Product", ProductSchema);
export default Product;