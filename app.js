require("dotenv").config()

const expressLayouts = require("express-ejs-layouts")
const express = require("express");
const app = express();
const PORT = 4000;

const connectDB = require("./server/config/db");
connectDB();

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(expressLayouts);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.set("layout", "./layouts/main");


app.use("/", require("./server/routes/main"));

app.listen(PORT, () => console.log(`server running on port: ${PORT}`))