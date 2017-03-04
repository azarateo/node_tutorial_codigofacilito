var http = require('http');
var fs = require('fs');



var servidor = http.createServer(function(request, response){
	fs.readFile("./index.html",(err,file)=>{
			if(err){console.log(err);}
			else{
				response.writeHead(200,{"Context-Type":"application/json"});
				response.write(file);
				var i = 0;
				while(true){
					response.write(i);
					i++;
				}

				response.end();
			}
	});
});
servidor.listen(9000);





