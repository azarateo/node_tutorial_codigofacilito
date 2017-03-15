var http = require('http');
<<<<<<< HEAD

http.createServer(
    function(req,res){
    		var jsonresult = JSON.stringify({nombre: "Alejandro", apellido: "Zarate"});
            res.writeHead(200,{"Content-Type":"application/json"});
            res.write(jsonresult);
            res.end();
    }
).listen(9000);


=======
var fs = require('fs');



var servidor = http.createServer(function(request, response){
	fs.readFile("./index.html",function(err,file){
			if(err){console.log(err);}
			else{
				response.writeHead(200,{"Context-Type":"application/json"});
				response.write(file);
				response.end();
			}
	});
});
servidor.listen(9000);
>>>>>>> origin/master





