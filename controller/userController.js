const user = require('../models/userModel');

const loadRegister = async(req, res) =>{
    try {
        res.render("registration");
        
    } catch (error) {
        res.status(401).send(error);
        
    }
}
module.exports = {
    loadRegister
};