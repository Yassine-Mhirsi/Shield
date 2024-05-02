import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
      SN: { type: String, unique: true},
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