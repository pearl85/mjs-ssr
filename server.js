require('marko/node-require'); // Allow Node.js to require and load `.marko` files
const path = require('path');
const fs = require('fs');
var express = require('express');
var markoExpress = require('marko/express');
var template = require('./layout');
const axios = require('axios');

var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "Content-Type");
    next();
});

app.use(markoExpress()); //enable res.marko(template, data)

const getFilms = () => {
    return Promise.resolve(
        axios.get('http://localhost:8090/films.json')
        .then((res) => {
            return res.data;
        })
    )
}


const serviceURL = '/films.json';
const serviceURLPath = path.join(__dirname, 'films.json')
app.get(serviceURL, function(req, res) {
    const serviceResponse = fs.readFileSync(serviceURLPath, 'utf8');
    res.send(serviceResponse);
});

app.get('/', function(req, res) {
    getFilms().then((results) => {
        //console.log(results);
        const store = results;
        res.marko(template, {
            datas: store
        });
    });

});

app.listen(8090);
