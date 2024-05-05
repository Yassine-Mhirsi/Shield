import express, { Request, Response } from "express";
import shopController from "../controller/ShopController";

const router = express.Router();

router.post("/create", shopController.createShop);
router.get("/fetchAll", shopController.getAllShops);
// router.get("/products/fetchById/:id", fetchProductById);
// router.put("/products/update/:id", updateProduct);
// router.delete("/products/delete/:id", deleteProduct);
// router.get("/products/search", searchProducts);

export default router;
