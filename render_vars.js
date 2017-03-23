var http = require('http');
var fs = require('fs');

http.createServer(
    function(req,res){
    		fs.readFile('./index.html',function(err,html){
    			var html_string = html.toString();
    			var variables = html_string.match(/[^\{\}]+(?=\})/g);
    			var nombre = 'Alejo';
    			//The regular expression means a text that is not one or more { or }
    			//and that searching ahead finds }
    			console.log(variables.length);
    			for (var i = variables.length - 1; i >=	 0; i--) {
    				var miVariable = eval(variables[i]);
    				console.log(variables[i]);
    				console.log(miVariable);
    				html_string = html_string.replace("{"+variables[i]+"}",miVariable);
    			}


            	res.writeHead(200,{"Content-Type":"text/html"});
            	res.write(html_string);
            	res.end();
    		});
    		
    }
).listen(9000);

//Fin Video 5