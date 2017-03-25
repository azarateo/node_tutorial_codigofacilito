var parser = require('./params_parser');
function render(html,req) {
	var parametros = parser.param_exports(req);
			var html_string = html.toString();
			var variables = html_string.match(/[^\{\}]+(?=\})/g);
			//The regular expression means a text that is not one or more { or }
			//and that searching ahead finds }
			for (var i = variables.length - 1; i >=	 0; i--) {
				html_string = html_string.replace("{"+variables[i]+"}",parametros[variables[i]]);
			}
	return html_string;
}

module.exports.render = render;