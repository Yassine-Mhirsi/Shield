import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    SN: { type: [String], default: [], unique: true, sparse: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    photo: { type: String, required: true },
    shop: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shop',
        required: true
      },
      name: { type: String, required: true },
      picture: { type: String, required: true }
    },
    quantity: { type: Number, default: 0, required: true }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
