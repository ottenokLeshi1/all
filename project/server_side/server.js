let http = require("http");
let url = require("url");

function start(route, handle){
	function onRequest(request, response) {
		let pathname = url.parse(request.url).pathname;
    	if (pathname != '/favicon.ico'){
    		console.log("Request for " + pathname + " received.");
    	}

    	content = route(handle, pathname, response);
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;