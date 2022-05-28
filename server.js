const express = require('express')
const app = express();
const Pizza = require("./models/pizzaModel")
const User = require("./models/userModel")
const Order = require("./models/orderModel")

const path= require('path')

const db = require('./db')
app.use(express.json());

const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')
const orderRoute = require('./routes/orderRoute')
app.use("/api/pizzas/", pizzasRoute)
app.use("/api/users/", userRoute)
app.use("/api/orders/", orderRoute)
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/client/build")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  } else {
    app.get("/", (req, res) => {
      res.send("<h1>Hello From Node Server vai nodemon</h1>");
    });
  }
const port =process.env.PORT || 5000;
app.listen(port,()=>'server is listerning on port 5000')