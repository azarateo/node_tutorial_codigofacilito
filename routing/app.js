var express = require('express');

var app = express();

app.set("view engine","jade");
//If you load http://localhost:8080/alejo you get a message to alejo
app.get("/:person",function(req,res) {
	res.render("index",{variable:"mensajito de prueba a "+req.params.person});
});

app.post("/",function(req,res) {
	res.render("form");
});

app.listen(8080);