let fs = require("fs");

function start(response) {
	let dir = __dirname.split('/');
	dir.splice(dir.length-1, 1);
	dir = dir.join('/');

  fs.readFile(dir + '/public/index.html', function(err, data){
  	if (err) throw err;
  	response.writeHead(200, {"Content-Type": "text/html"});
  	response.end(data);
  })
}

function upload() {
  //console.log("Request handler 'upload' was called.");
}

exports.start = start;
exports.upload = upload;