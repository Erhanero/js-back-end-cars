const uniqid = require("uniqid");

class Car {

    constructor(name, description, imageUrl, price) {
        this.id = uniqid();
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.price = price;
    }



}

module.exports = Car;