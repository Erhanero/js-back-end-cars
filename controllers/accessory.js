const accessoryServices = require("../services/accessoryServices");

const get = (req, res) => {
    res.render("createAccessory");
}

const post = async (req, res) => {
    const accessory = req.body;
    await accessoryServices.createAccessory(accessory);
    res.redirect("/");
}

module.exports = {
    get,
    post
}