const HOSTNAME = '127.0.0.1';
const PORT = 1337;

var soap = require('soap');
var http = require("http");
var dispatcher = require('httpdispatcher');
var url = 'http://seuServico.wsdl';

var server = http.createServer(handleRequest);

var retorno = {
	status : Number,
	message : String,
	xml : String
};

var args = {
};

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});

dispatcher.onGet("/page1", function(req, res) {
    soap.createClient(url, function(err, client) {
		client.seuMetodo(args, function(err, result) {
	      	res.end(result);
	  	});
	})
});

function handleRequest(request, response){
    try {
        //log the request on console
        console.log(request.url);
        //Disptach
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}
