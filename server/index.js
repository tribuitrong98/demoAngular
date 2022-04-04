const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});

//mongose
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://testAngular:F67rWx2G6YNL32GW@cluster0.napeu.mongodb.net/testAngularDB?retryWrites=true&w=majority', {useNewUrlParser: true}, function(err) {
    if(err) {
        console.log(err);
    }
    else {
        console.log('Mongodb connect successfully')
    }
});


app.listen(3000, () => console.log('server success'));
require("./Controllers/api")(app);