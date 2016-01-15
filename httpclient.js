var http = require('http');

var request = http.get("http://shopicruit.myshopify.com/products.json",function callback(response){

	response.on("data", function (data) { 

	var a = data.toString();
	
	var obj = JSON.parse(data);

	//console.log(b.title);

	//console.log(a);	



	//first forloop for iterating through products.length
	//inner forloop for iterating through variants.length
	console.log(obj.products[0].variants[0].price);


	})


});