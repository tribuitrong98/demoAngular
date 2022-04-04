const User = require('../Models/user')
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

module.exports = function (app) {

    /** user */

    //Đăng nhập
    app.post("/login", jsonParser, function(req, res){
        User.find({
            email: req.body.email, 
            password: req.body.password
        }, function(err, user) {
            if (user[0] !== undefined) {
                res.send({kq: 1})
            }else{
                res.send({kq: 0});
            }
        });
    });

    // Đăng ký
    app.post("/register", jsonParser, function(req, res){
        var newUser = new User({
            hoten: req.body.hoten,
            email: req.body.email,
            password: req.body.password
        });
        newUser.save(function(err){
            if(err) {
                console.log(err);
            }
            else {
                res.send(newUser);
            }
        });
    })

    /** /user */


}