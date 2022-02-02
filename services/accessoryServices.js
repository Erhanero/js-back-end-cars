const Accessory = require("../models/Accessory");

const createAccessory = async (accessory) => {
    await Accessory.create(accessory);
}

module.exports = {
    createAccessory,

}