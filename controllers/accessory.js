const accessoryServices = require("../services/accessoryServices");

const get = (req, res) => {
    res.render("createAccessory");
}

const post = async (req, res) => {
    const accessory = {
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        owner: req.session.user.id
    }
    await accessoryServices.createAccessory(accessory);
    res.redirect("/");
}

module.exports = {
    get,
    post
}