const express = require("express");
const hbs = require("express-handlebars");
const aboutController = require("./controllers/about");
const createController = require("./controllers/create");
const { detailsController, deleteController } = require("./controllers/details");
const homeController = require("./controllers/home");
const notFoundController = require("./controllers/notFound");
const editController = require("./controllers/edit");
const accessoryController = require("./controllers/accessory");
const atachController = require("./controllers/atach");
const { loginGet, loginPost, registerGet, registerPost, logout } = require("./controllers/auth");
const authService = require("./services/auth");
const initDb = require("./models/database");
const session = require("express-session");
const { isLoggedIn } = require("./services/util")
const { body } = require("express-validator")
start();

async function start() {

    await initDb();
    const app = express();

    app.use(session({
        secret: "my secret",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: "auto" }
    }));

    app.use(express.urlencoded({ extended: true }));
    app.use(express.static("static"));
    app.use(authService());

    app.engine("hbs", hbs.create({
        extname: ".hbs"
    }).engine);
    app.set("view engine", "hbs");

    app.get("/", homeController);
    app.get("/create", isLoggedIn(), createController.get);
    app.post("/create", isLoggedIn(), createController.post);
    app.get("/about", aboutController);
    app.get("/details/:id", detailsController);
    app.get('/delete/:id', deleteController);
    app.get("/edit/:id", isLoggedIn(), editController.get);
    app.post("/edit/:id", isLoggedIn(), editController.post);
    app.get("/create/accessory", isLoggedIn(), accessoryController.get);
    app.post("/create/accessory", isLoggedIn(), accessoryController.post);
    app.get("/atach/:id", isLoggedIn(), atachController.get);
    app.post("/atach/:id", isLoggedIn(), atachController.post);
    app.get("/logout", isLoggedIn(), logout);

    app.route("/login")
        .get(loginGet)
        .post(loginPost);

    app.route("/register")
        .get(registerGet)
        .post(body("username").isLength({ min: 3 }).withMessage("Username must be at least 3 characters long").bail()
            .isAlphanumeric().withMessage("Username may contain only letters and numbers"),
            body("password")
                .notEmpty().withMessage("Password is required")
                .isLength({ min: 8 }).withMessage("Password must be at least 8 caracters long"),
            body("repeatPassword")
                .custom((value, { req }) => {
                    if (value != req.body.password) {
                        throw new Error("Passwords don't match!")
                    }
                }),
            registerPost);


    app.all("*", notFoundController);

    app.listen(5000, () => console.log("Server is running on port 5000..."));
}