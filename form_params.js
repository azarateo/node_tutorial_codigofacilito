var http = require('http');
var fs = require('fs');
var render = require('./render_view');


http.createServer(
    function(req,res){
        if(req.url.indexOf("favicon")>0){
            return;
        }
		fs.readFile('./index.html',function(err,html){

            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(render.render(html,req));
            res.end();
            
		});		
    }
).listen(9000);