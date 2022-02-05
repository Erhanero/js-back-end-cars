
const logout = (req, res) => {
    req.auth.logout();
    res.redirect("/")
}

const loginGet = (req, res) => {
    res.render("loginPage");
}

const loginPost = async (req, res) => {
    try {
        await req.auth.login(req.body.username, req.body.password);
        res.redirect("/");
    } catch (err) {
        console.log(err.message);
        res.redirect("/login");
    }
}

const registerGet = (req, res) => {
    res.render("registerPage");
}

const registerPost = async (req, res) => {
    if (req.body.username == "" || req.body.password == "") {
        return res.redirect("/register")
    }
    if (req.body.password != req.body.repeatPassword) {
        return res.redirect("/register")
    }
    try {
        await req.auth.register(req.body.username, req.body.password);
        res.redirect("/");
    } catch (err) {
        console.log(err.message)
        res.redirect("/register")
    }
}

module.exports = {
    logout,
    loginGet,
    loginPost,
    registerGet,
    registerPost
}