import express, { Request, Response } from "express";
import insurancecontroller from "../controller/InsuranceController";

const router = express.Router();

router.post("/create", insurancecontroller.createInsurance);
router.get("/fetchAll", insurancecontroller.getAllInsurance);
// router.get("/products/fetchById/:id", fetchProductById);
// router.put("/products/update/:id", updateProduct);
router.delete("/delete/:id", insurancecontroller.deleteInsurance);
// router.get("/products/search", searchProducts);

export default router;
