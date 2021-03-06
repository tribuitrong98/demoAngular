const express = require('express');
const jsonParser = require('body-parser').json();
const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});

app.get('/', (req, res) => res.send('hi'));

app.post('/register', jsonParser, (req, res) => {
    res.send(req.body);
});

app.post('/login', jsonParser, (req, res) => {
    res.send(req.body);
});

app.listen(3000, () => console.log('server success'));
