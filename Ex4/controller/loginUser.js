exports.getLogin = (req, res, next) =>{
    if (req.body.user == "admin" && req.body.password == "1234") {
        // req.session.loggedin = 1;
        res.render("admin");
    }
    else {
        console.log("not working");
        res.render("login", {errormessage: "please enter a valid username and password"});
    }
};
exports.getLoginOfSession = (req, res, next) =>{
    console.log("in middleware");
    if (req.session.loggedin)
        next();
    else
        return res.redirect("/");
};



