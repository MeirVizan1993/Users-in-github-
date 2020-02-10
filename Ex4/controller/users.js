const db = require('../models');

//this function return if the username is in database
function findIfExists(name){
    return new Promise(async (resolve, reject) =>{
        let exists = await db.User.findOne({
            where: {
                Name: name
            }
        });
        if (exists)
            return resolve (true);
        return resolve (false)
    });
}

//return all users in database
exports.getAllUsers = (req, res, next) => {
    return db.User.findAll()
        .then((contacts) => res.send(contacts))
        .catch((err) => {
            console.log('There was an error querying contacts', JSON.stringify(err))
            return res.send(err)
        });
}

//save users in database
exports.saveUser = (req, res, next) => {
    findIfExists(req.body.value).then(async (user) => {
        if (!user) {
            console.log("new");
            // favorite.push(req.body.value);
            return db.User.create({Name: req.body.value})
                .then((contact) => res.send(JSON.stringify({value: true})))
                .catch((err) => {
                    console.log('***There was an error creating a contact', JSON.stringify(contact))
                    return res.send(JSON.stringify({value: false}))
                })
        }
        else {
            console.log("not new")
            return res.send(JSON.stringify({value: false}));
        }
    }).catch((err) => {
        return res.send(JSON.stringify({value: false}));
    });
}

//delete users in database
exports.deleteUser = (req, res, next) => {
    findIfExists(req.body.value).then(async (user) => {
        console.log(user);
        if (user) {
            console.log("find");
            db.User.destroy({where: { Name: req.body.value }});
            return res.send(JSON.stringify({value: true}))
        }
        else {
            console.log("not find");
            return res.send(JSON.stringify({value: false}));
        }
    }).catch((err) => {
        console.log("error");
        return res.send(JSON.stringify({value: false}));
    });
}


