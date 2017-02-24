var http = require('http');
var fs = require('fs');



var servidor = http.createServer(function(request, response){
	fs.readFile("./index.html",(err,file)=>{
			if(err){console.log(err);}
			else{
				response.writeHead(200,{"Context-Type":"application/json"});
				response.write(file);
				response.end();
			}
	});
});
servidor.listen(9000);





