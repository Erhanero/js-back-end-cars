const express = require("express");
const hbs = require("express-handlebars");
const aboutController = require("./controllers/about");
const createController = require("./controllers/create");
const { detailsController, deleteController } = require("./controllers/details");
const homeController = require("./controllers/home");
const notFoundController = require("./controllers/notFound");

const initDb = require("./models/database")

start();

async function start() {

    await initDb();
    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.static("static"));

    app.engine("hbs", hbs.create({
        extname: ".hbs"
    }).engine);
    app.set("view engine", "hbs");

    app.get("/", homeController);
    app.get("/create", createController.get);
    app.post("/create", createController.post);
    app.get("/about", aboutController);
    app.get("/details/:id", detailsController);
    app.get('/delete/:id', deleteController)

    app.all("*", notFoundController);

    app.listen(5000, () => console.log("Server is running on port 5000..."));
}