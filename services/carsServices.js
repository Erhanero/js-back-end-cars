const Car = require("./cars");

const cars = [];

const getAll = () => cars.slice();

const create = (name, description, imageUrl, price) => {
    let car = new Car(name, description, imageUrl, price);
    cars.push(car);
}

const getById = (id) => {
    let car = cars.find(x => x.id == id);
    return car;

}

module.exports = {
    getAll,
    create,
    getById
}