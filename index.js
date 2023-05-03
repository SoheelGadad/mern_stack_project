const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://khankk4916:mongoconnect@cluster0.mmcmwpb.mongodb.net/?retryWrites=true&w=majority");

const express = require("express");
const app = express();

const userRoute = require('./routes/userRoute');
app.use('/', userRoute);

app.listen(3000,function (){
    console.log("server is rumming..");
});