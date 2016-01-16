var http = require('http');
var fs = require('fs');
var map = require('through2-map');



var server = http.createServer(function (req, res) {
 
 	//var inStream = fs.createReadStream(process.argv[3])
	
	req.pipe(map(function (chunk) {
      	return chunk.toString().toUpperCase()
    })).pipe(res)

 })

server.listen(Number(process.argv[2]))


