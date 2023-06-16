// console.log("I am in express project")
const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
connectDb();
const app = express();
app.use(express.json())
const port = process.env.PORT;
app.use("/api/contacts", require("./routes/contactRoutes"))
app.use(errorHandler)
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})