
const { connectToDatabase, createServer } = require("./Config/connection");

const { MyUserRoutes } = require("./routes/MyUserRoutes");
import express from 'express';
import * as dotenv from 'dotenv';
import { connectToDatabase, createServer } from "./Config/connection";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
// const httpServer = app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
app.use("/api/user", MyUserRoutes);
connectToDatabase()
    .then(() => {
        createServer();
    })
    .catch((error) => {
        console.error("Error connecting to database:", error);
    });