var express = require('express');
var app = express();

app.set("view engine","jade");	
app.get("/",function(req,res) {
	res.render("index",{variable:"Hola alejandrito"});
});


app.listen(8080);

//Video 10 using Jade fin