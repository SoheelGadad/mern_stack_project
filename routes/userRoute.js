const express = require("express");
const user_route = express();

//user_route.set('view engine','ejs');
//user_route.set('view','./views/users');

const userController = require("../controller/userController");

//we have created usercontroller
user_route.get('/register', userController.loadRegister);
//user_route.get("/", (req, res) => {res.render("registration", userController.loadRegister);});
//user_route.get('/', (req, res) => {res.send('Hello Sir')});

module.exports = user_route;
