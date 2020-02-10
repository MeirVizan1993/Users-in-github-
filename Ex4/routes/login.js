var express = require('express');
const controllerUser = require('../controller/loginUser');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("login", {errormessage: ""})
});

//controller function of login
router.post('/',controllerUser.getLogin);


//protected route: checks- if logged in -> calls next() that will display the content. else - redirect to '/'
router.get('/admin', controllerUser.getLoginOfSession);


/*router.get('/admin', (req, res, next) => {
  console.log("in middleware");
  if (req.session.loggedin)
    next();
  else
    return res.redirect("/");
});*/

// the private area  =>> this is next!
/*router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'Express' });
});*/


module.exports = router;
