const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();
require("dotenv").config();

const userRoutes = require("./routes/user.routes");
const taskRoutes = require("./routes/task.routes");



app.use("/task", taskRoutes);
app.use("/users",userRoutes);


app.use(express.json());

app.use((error, req, res, next) => {
    console.log("This is the error handling middleware: ", error);
    res.status(500).send("Something went wrong");
})

app.listen(process.env.PORT , () => {
    connectDB();
    console.log("The server is running on Port : " , process.env.PORT);
})