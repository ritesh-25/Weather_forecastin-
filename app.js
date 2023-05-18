const express  = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){ //home page par aya uska response
    res.sendFile(__dirname + "/index.html");

});
app.post("/",function(req,res){
var a = req.body.city;
const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="+a+"&appid=8b4593c6f6084788ea2e2ec7818a5b12"  
https.get(URL,function(response){   //link se jo response milna chaiye mtlb ki apne kam ka data
console.log(response.statusCode);
response.on("data",function(data){        //us data ko on kiya json .parse kr k use kr rhe 
const weatherData = JSON.parse(data);
const temp = weatherData.main.temp;
console.log(temp);
res.write("<h1>hello</h1>");
res.write("temperature of " + a +" is " + temp);
res.send();
});
});
});

app.listen(5050,function(r,rs){
console.log("haa bhai kam kr rha h shi se");
});