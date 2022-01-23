const Car = require("./cars");

const cars = [];

const getAll = () => cars.slice();

const create = (car) => {
    new Car(car);
    cars.push(car);
}

module.exports = {
    getAll,
    create
}