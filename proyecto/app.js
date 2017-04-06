var express = require("express");
var bodyparser = require("body-parser");
var app = express();

//built in middle ware to serve static files
app.use(express.static('public'));
app.use(bodyparser.json());//para peticiones json
app.use(bodyparser.urlencoded({extended:true}));//para parámetros que están en
												// la url, y otras cosas como arreglos

app.set("view engine","jade");

app.get('/',function(req,res) {
	res.render("index");
});

app.get('/login',function(req,res) {
	res.render("login");
});

/*app.get('/users',function (req,res) {
	res.send("users");
})*/

app.post('/users',function (req,res) {
	console.log("Usuario / correo"+req.body.email);
    console.log("Contraseña"+req.body.password);
    //
    //res.send("Que pasa cuates"); //if you send then you wont render.
    res.render("users"); //if you render then you wont send.
    //you can render users without
	// having a get for /users as you see it is commented above

});

app.listen(8080);
//video 16 Usando body-parser fin