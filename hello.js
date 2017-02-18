var http = require('http');
var fileSystem = require('fs');


fileSystem.readFile('./index.html',
	(err,data)=>{
		if(err){console.log(err);}
		var server = http.createServer(
			(req,res)=>
			{
				console.log("creating Server");
				res.write(data);
				res.end('Hola');
			}
		);
		server.listen('9000');
	}
);

