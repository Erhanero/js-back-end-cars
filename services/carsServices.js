const Car = require("../models/Car");

const carsData = [];

const getAll = async (query) => {
    const options = {};


    if (query.search) {
        options.name = new RegExp(query.search, "i");
    }
    if (query.from) {
        options.price = { $gte: Number(query.from) };
    }
    if (query.to) {
        if (!options.price) {
            options.price = {}
        }
        options.price.$lte = Number(query.to)
    }
    const cars = await Car.find(options).lean();

    return cars;


}

const create = async (name, description, imageUrl, price) => {
    let car = new Car({ name, description, imageUrl, price });
    await car.save();

}

const getById = async (id) => {
    let car = await Car.findById(id).lean();
    return car;

}

const deleteById = async (id) => {
    await Car.findByIdAndDelete(id);
}

const editById = async (id, car) => {
    await Car.findByIdAndUpdate(id, car)
}
module.exports = {
    getAll,
    create,
    getById,
    deleteById,
    editById
}