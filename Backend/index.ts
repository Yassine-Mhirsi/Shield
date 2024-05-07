import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoutes";
import ProductRoute from "./routes/ProductRoutes";
import PartnerRoute from "./routes/PartnerRoutes";
import ShopRoute from "./routes/ShopRoutes";
import RepairShopRoute from "./routes/RepairShopRoutes";
import InsuranceRoute from "./routes/InsuranceRoutes";
import ContractRoute from "./routes/ContractRoutes";

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("Connected to database!"))
  .catch(error => console.error("Database connection error:", error));

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/my/user", myUserRoute);
app.use("/api", ProductRoute);
app.use("/partner", PartnerRoute);
app.use("/shop", ShopRoute);
app.use("/repairshop", RepairShopRoute);
app.use("/insurance", InsuranceRoute);
app.use("/contract", ContractRoute);

app.listen(process.env.PORT, () => {
  console.log("Server started on localhost:7800");
});
