import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoutes";
import ProductRoute from "./routes/ProductRoutes";

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("Connected to database!"));

const app = express();
app.use(express.json());
app.use(cors());

// app.get("/health", async (req: Request, res: Response) => {
//   res.send({ message: "health OK!" });
// });

// app.get("/test",async(req:Request,res:Response)=>{
//     res.json({message:"hello!"});
// });
app.use("/api/my/user", myUserRoute);
app.use("/api", ProductRoute);

app.listen(7800, () => {
  console.log("server started on localhost:7800");
});