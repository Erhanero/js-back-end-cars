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

    // let cars = carsData.slice();
    // if (query.search) {
    //     cars = cars.filter(x => x.name.toLowerCase().includes(query.search.toLowerCase()));
    // }
    // if (query.from) {
    //     cars = cars.filter(x => Number(x.price) >= Number(query.from));
    // }
    // if (query.to) {
    //     cars = cars.filter(x => Number(x.price) <= Number(query.to))
    // }
    // return cars;
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

const search = (query) => {
    let cars = getAll();

    return cars;
}

module.exports = {
    getAll,
    create,
    getById,
    search,
    deleteById
}