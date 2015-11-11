var http = require('http');
var fs = require('fs');
var os = require('os');

var networkInterfaces = os.networkInterfaces();

http.createServer(function (req, res) {
    console.log('request starting...');
	console.log(req.headers.host);
	fs.readFile('./index.html', function(error, content) {
		if (error) {
			res.writeHead(500);
			res.end();
		}
		else {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.end(content, 'utf-8');
		}
	});
	
}).listen(80, "0.0.0.0");
console.log();
console.log('Server running at Wi-Fi, http://' + networkInterfaces['Wi-Fi'][1].address);
