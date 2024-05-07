// Import necessary modules
import express, { Request, Response } from "express";
import multer from "multer";
import { createProduct, fetchProducts, fetchProductById, updateProduct, deleteProduct, GetProductsByShopId, GetProductsByCat } from "../controller/ProductController";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("photo"), (req: Request, res: Response) => {
  try {
    const file = req.file;
    res.status(200).json({ message: "File uploaded successfully", filename: file?.filename });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Define other routes for your product-related operations
router.post("/products/create", createProduct);
router.get("/products/fetchAll", fetchProducts);
router.get("/products/fetchById/:id", fetchProductById);
router.put("/products/update/:id", updateProduct);
router.delete("/products/delete/:id", deleteProduct);
router.get("/products/fetchByShopId/:shopId", GetProductsByShopId);
router.get("/products/fetchByCat", GetProductsByCat);
// router.get("/products/search", searchProducts);

export default router;
