var http = require('http');

http.createServer(
    function(req,res){
    		var jsonresult = JSON.stringify({nombre: "Alejandro", apellido: "Zarate"});
            res.writeHead(200,{"Content-Type":"application/json"});
            res.write(jsonresult);
            res.end();
    }
).listen(9000);

//End of video four





