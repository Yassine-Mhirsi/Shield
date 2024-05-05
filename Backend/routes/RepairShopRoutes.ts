import express, { Request, Response } from "express";
import repairshopcontroller from "../controller/repairShopController";

const router = express.Router();

router.post("/create", repairshopcontroller.createRepairShop);
router.get("/fetchAll", repairshopcontroller.getAllRepairShop);
// router.get("/products/fetchById/:id", fetchProductById);
// router.put("/products/update/:id", updateProduct);
// router.delete("/products/delete/:id", deleteProduct);
// router.get("/products/search", searchProducts);

export default router;
