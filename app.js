var express=require('express');
var app=express();
var bodyParser=require('body-parser')
var mongoose=require('mongoose')
var port=process.env.PORT || 3001;
var Book=require('./book.model');

var db="mongodb://localhost:27017/example"
mongoose.connect(db);
console.log("Connecting to db...")


app.listen(port);