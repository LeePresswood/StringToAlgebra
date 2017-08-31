var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// var logger = function(req, res, next){
//     console.log('Logging...');
//     next();
// };

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

//Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

// var people = [
//     {
//         name : 'Jeff',
//         age : 30
//     },
//     {
//         name : 'Sarah',
//         age : 22
//     },
//     {
//         name : 'Bill',
//         age : 40
//     },
// ];
//
// app.get('/', function(req, res){
//     res.json(people);
// });

app.get('/', function(req, res){
    res.json('Hello');
});

app.listen(3000, function(){
    console.log('Server started on port 3000');
});