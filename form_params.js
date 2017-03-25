var http = require('http');
var fs = require('fs');

http.createServer(
    function(req,res){
        if(req.url.indexOf("favicon")>0){
            return;
        }
		fs.readFile('./index.html',function(err,html){

            // in the url there is /?nombre=alejo&apellido=zarate
            var url_data = [];
            var data_pairs = [];
            var parametros = {};
            if(req.url.indexOf("?") > 0){
                url_data = req.url.split("?");
                 // url_data = ['/','nombre=alejo&apellido=zarate']
                data_pairs = url_data[1].split("&");
                //data_pairs=['nombre=alejo','apellido=zarate']
                for (var i = data_pairs.length - 1; i >= 0; i--) {

                    var data_pair = data_pairs[i].split("=");
                    parametros[data_pair[0]]=data_pair[1];
                }
                //parametros = {nombre=alejo,apellido=zarate}
            }
           


			var html_string = html.toString();
			var variables = html_string.match(/[^\{\}]+(?=\})/g);
			//The regular expression means a text that is not one or more { or }
			//and that searching ahead finds }
			for (var i = variables.length - 1; i >=	 0; i--) {
				html_string = html_string.replace("{"+variables[i]+"}",parametros[variables[i]]);
			}
        	res.writeHead(200,{"Content-Type":"text/html"});
        	res.write(html_string);
        	res.end();
		});		
    }
).listen(9000);