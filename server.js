const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

//require routes
//here
//------------------------

//Database conection "MongoDB"
mongoose
  .connect(
    "mongodb://localhost:27017/Church-On-Time",
    { useNewUrlParser: true, useCreateIndex: true }
  )
  .then(() => console.log("connected to mongodb"))
    .catch(() => console.log("Could not connect to mongodb"));
//------------------------------------------------------------

//Middlewares
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:3000" }));
app.use(express.json());
//-------------------------------------------------------------------------------

//Routes 
//here
//----------------------


//Server start
const port = process.env.PORT || 4741;
app.listen(port, () => console.log(`Running on port ${port}`));
//-------------------------------------------------------------