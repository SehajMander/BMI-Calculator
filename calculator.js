//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var numb1 = Number(req.body.num1);
    var numb2 = Number(req.body.num2);
    var result = numb1 + numb2;
    res.send("The result of the given calculations is : " + result );
});

//bmiCalculator
app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
    var weight = parseFloat(req.body.w);
    var height = parseFloat(req.body.h);
    var result =  weight / (height * height);
    res.send("Your BMI is : " + result );
});


app.listen(3000, function () {
    console.log("Server started on port 3000");
});