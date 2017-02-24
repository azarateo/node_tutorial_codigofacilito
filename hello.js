var http = require('http');
var fs = require('fs');

fs.readFile('./index.html',dataRead);

var dataRead = function(err,file){
	if(err){console.log(err);}
	else{
		var servidor = http.createServer(
			function(request, response){
				response.writeHead(200,{"Context-Type":"application/json"});
				response.write(JSON.stringify({nombre:"Alejandro",apellido:"Zarate"}));
				response.end();
			}
		);
		servidor.listen(9000);
	}
}

