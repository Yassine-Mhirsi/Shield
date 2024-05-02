// Import necessary modules
import express, { Request, Response } from "express";
import multer from "multer";
import { createProduct, fetchProducts, fetchProductById, updateProduct, deleteProduct} from "../controller/ProductController";

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
router.post("/products", createProduct);
router.get("/products", fetchProducts);
router.get("/products/:id", fetchProductById);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);
// router.get("/search", searchProducts);

export default router;
