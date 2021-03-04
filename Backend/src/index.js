require("dotenv").config();

const express = require("express");
const expressAsyncErrors = require("express-async-errors");
const path = require("path");
const cors = require("cors");

const errorHandler = require("./errors/handler");
const routes = require("./routes");

const app = express();

app.use(cors());
// code
app.use(express.json());

app.use(routes);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(errorHandler);

app.listen(process.env.PORT || 3333);
