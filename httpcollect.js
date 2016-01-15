var http = require('http');
var bl = require('bl')
var concat = require('concat-stream')



var request = http.get(process.argv[2],function callback(response){
	var str = '';

  response.on('data', function (chunk) {
    str += chunk;
  })

  response.on('end', function () {
    console.log(str);
  })

});








/*
var request = http.get(process.argv[2],function callback(response){

	response.pipe(bl(function (err, data) { /* ... 

	

	var a = data.toString();
	
	console.log(a.length);
	console.log(a)	


}))

})
/* using concat-stream
var request = http.get(process.argv[2],function callback(response){

	response.pipe(cs(function ( data) {

	

	var a = data.toString();
	
	console.log(a.length);
	console.log(a)	


}))

})*/