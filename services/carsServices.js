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

const attachAccessory = async (carId, accessoryId, ownerId) => {
    const car = await Car.findById(carId);
    if (car.owner != ownerId) {
        return false;
    }
    car.accessories.push(accessoryId);
    car.save();
}

const create = async (car) => {
    await Car.create(car)

}

const getById = async (id) => {
    let car = await Car.findById(id).populate("accessories").lean();
    return car;

}

const deleteById = async (id, ownerId) => {
    const car = await Car.findById(id);
    if (car.owner != ownerId) {
        return false;
    }

    await Car.findByIdAndDelete(id);
    return true;
}


const editById = async (id, car, ownerId) => {
    const currentCar = await getById(id);

    if (currentCar.owner != ownerId) {
        return false;
    }

    await Car.findByIdAndUpdate(id, car);
    return true;

}
module.exports = {
    getAll,
    create,
    getById,
    deleteById,
    editById,
    attachAccessory
}