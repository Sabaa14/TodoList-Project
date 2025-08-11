const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();
require("dotenv").config();


app.use(express.json());

app.listen(process.env.PORT , () => {
    connectDB();
    console.log("The server is running on Port : " , process.env.PORT);
})