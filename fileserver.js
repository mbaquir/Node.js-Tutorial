var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
 
      // request handling logic...
 	//console.log(req)


 	var a = fs.createReadStream(process.argv[3])
 	a.pipe(res);
 })

server.listen(Number(process.argv[2]))