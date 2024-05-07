import express, { Request, Response } from "express";
import { createContract, fetchContract } from "../controller/ContractController";

const router = express.Router();

// Define other routes for your product-related operations
router.post("/create", createContract);
router.get("/fetchAll", fetchContract);
// router.get("/products/fetchById/:id", fetchProductById);
// router.put("/products/update/:id", updateProduct);
// router.delete("/products/delete/:id", deleteProduct);
// router.get("/products/fetchByShopId/:shopId", GetProductsByShopId);
// router.get("/products/fetchByCat", GetProductsByCat);
// router.get("/products/search", searchProducts);

export default router;
