const Car = require("./cars");

const carsData = [];

const getAll = (query) => {
    let cars = carsData.slice();
    if (query.search) {
        cars = cars.filter(x => x.name.toLowerCase().includes(query.search.toLowerCase()));
    }
    if (query.from) {
        cars = cars.filter(x => Number(x.price) >= Number(query.from));
    }
    if (query.to) {
        cars = cars.filter(x => Number(x.price) <= Number(query.to))
    }
    return cars;
}

const create = (name, description, imageUrl, price) => {
    let car = new Car(name, description, imageUrl, price);
    carsData.push(car);
}

const getById = (id) => {
    let car = cars.find(x => x.id == id);
    return car;

}

const search = (query) => {
    let cars = getAll();

    return cars;
}

module.exports = {
    getAll,
    create,
    getById,
    search
}