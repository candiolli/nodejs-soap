const hostname = '127.0.0.1';
const port = 1337;

var soap = require('soap');
var http = require("http");
var url = 'http://localhost:8080/seuservico.wsdl';
var retornoDrg = null;
var args = {
	
};

http.createServer((req, res) => {

	res.writeHead(200, { 'Content-Type': 'text/plain' });
  	
	soap.createClient(url, function(err, client) {
		client.pesquisaGuiasInternacaoDrg(args, function(err, result) {
	      	res.end(result.xmlRetorno);
	  	});
	})
	

}).listen(port, hostname, () => {
  	console.log(`Server running at http://${hostname}:${port}/`);
});