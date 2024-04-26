const express = require('express');
const { connectToDatabase, createServer } = require("./Config/connection");
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
// const httpServer = app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

connectToDatabase()
    .then(() => {
        createServer();
    })
    .catch((error) => {
        console.error("Error connecting to database:", error);
    });