const mongoose = require("mongoose");
const data=mongoose.connect("mongodb+srv://PizziePie:madhur22@cluster0.btopd8e.mongodb.net/PizziePie", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => { console.log("connection successful..") }).catch((err) => { console.log(err) });


module.exports = data;