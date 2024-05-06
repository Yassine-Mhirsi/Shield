import { Request, Response } from "express";
import Product from "../model/product";



export const createProduct = async (req: Request, res: Response) => {
    try {
        const product = req.body;

        // if (product.SN && product.SN !== null) {
        //     const existingProduct = await Product.findOne({ SN: product.SN });

        //     if (existingProduct) {
        //         return res.status(400).json({ error: "Product with the same SN already exists." });
        //     }
        // }

        const newProduct = await Product.create(product);

        res.status(201).json(newProduct);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};



export const fetchProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const fetchProductById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { SN, brand, model, category, price } = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, { SN, brand, model, category, price }, { new: true });
        res.status(200).json(updatedProduct);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};


export const GetProductsByShopId = async (req: Request, res: Response) => {
    const shopId = req.params.shopId;

    if (!shopId) {
        return res.status(400).json({ message: "Shop ID must be provided" });
    }

    try {
        // Query to find products where 'shop.id' matches the provided shopId
        const products = await Product.find({ 'shop.id': shopId });

        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found for the given shop ID.' });
        }

        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products'});
    }
}


//   export const searchProducts = async (req: Request, res: Response) => {
//     const { keyword } = req.query;

//     try {
//       const products = await Product.find({
//         $or: [
//           { brand: { $regex: keyword, $options: "i" } },
//           { category: { $regex: keyword, $options: "i" } },
//           // Add more fields for search as needed
//         ],
//       });

//       res.status(200).json(products);
//     } catch (error: any) {
//       res.status(404).json({ message: error.message });
//     }
//   };



export default {
    createProduct,
    fetchProducts,
    fetchProductById,
    updateProduct,
    deleteProduct,
    GetProductsByShopId,
    // searchProducts,
};
