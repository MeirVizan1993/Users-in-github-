var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const cors = require('cors');


var app = express();
app.use(cors());

//for view engine
app.set('view engine','ejs');
app.set('views', 'views');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/*app.get('/', function(req, res, next) {
    res.sendFile('login.ejs' ,{root: __dirname+'/views/'});

});*/
/*
app.get('/', function(req, res){
    return res.redirect('login');
});
*/


app.use('/users',require('./routes/users'));
app.use('/login',require('./routes/login'));




app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Exemple of server ${port}!`));

