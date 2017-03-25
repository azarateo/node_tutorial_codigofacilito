var express = require('express');
var app = express();

app.get("/",function(req,res) {
	res.send("Hello express");
});


app.listen(8080);

//This is the end of video 9