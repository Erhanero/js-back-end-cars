const Accessory = require("../models/Accessory");

const createAccessory = async (accessory) => {
    await Accessory.create(accessory);
}

const getAll = async () => {
    const accessories = await Accessory.find({}).lean();
    return accessories;
}
const getAllWithout = async (id) => {
    return await Accessory.find().where("_id").nin(id).lean();

}
module.exports = {
    createAccessory,
    getAll,
    getAllWithout

}