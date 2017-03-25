function parse(req) {
	if(req.url.indexOf("?") > 0){
		// in the url there is /?nombre=alejo&apellido=zarate
		var url_data = [];
		var data_pairs = [];
		var parametros = {};
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
    return parametros;      

}

module.exports.param_exports = parse;