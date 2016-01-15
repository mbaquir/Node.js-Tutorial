var http = require('http');
var fs = require('fs');
var url = require('url');

//console.log("HELLO")

var server = http.createServer(function (req, res) {
 //console.log("SDDSDSSDSSD")
 	//var inStream = fs.createReadStream(process.argv[3])
 	res.writeHead(200, { 'Content-Type': 'application/json' })

	var a = url.parse(req.url, true);
	
	//console.log(a)
	//console.log(a.query);
//	console.log(a.unixtime);
	var date = new Date(a.query.iso);
	var mytime = new Object();
	var unixtime = new Object();

	//console.log(a.search.substring(22,24));

	mytime.hour = date.getHours();
	mytime.minute = Number(a.search.substring(19,21));
	mytime.second = Number(a.search.substring(22,24));
	unixtime.unixtime = date.getTime() ;

	if(a.pathname === "/api/unixtime"){
	res.end(JSON.stringify(unixtime));
}
	

	res.end( JSON.stringify(mytime));


	

 });

server.listen(process.argv[2]);



/*
function format_time(){
	var date = new Date();

	var mytime = new Object();

	mytime.hours = date.getHours();
	mytime.minute = date.getMinutes();
	mytime.second = date.getSeconds();

	return mytime;

}
*/



