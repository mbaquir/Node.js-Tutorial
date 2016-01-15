var http = require('http');
var bl = require('bl')

   var myArray = [] 
   var counter = 0;

/*
var callback = function(response){

	response.pipe(bl(function (err, data) { /* ... 
	var a = data.toString();

	myArray[this.i -2 ] = a;

	counter++;

	if(counter === 3){
		
		for(var q = 0; q < myArray.length; q++){

			console.log(myArray[q]);
		}		
	}

}))

}*/


function test_http(i){

	http.get(process.argv[i], function callback(response){

	response.pipe(bl(function (err, data) { /* ... */ 
	var a = data.toString();

	myArray[i -2 ] = a;

	counter++;

	if(counter === 3){
		
		for(var q = 0; q < myArray.length; q++){

			console.log(myArray[q]);
		}		
	}

}))


	})
}


for(var j = 2 ; j < 5; j++){
	test_http(j);
}

