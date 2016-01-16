var request = require('request')

var url = "http://shopicruit.myshopify.com/products.json"


request({
	url: url,
	json: true
}, function(error,response, body){

	var obj = body;
	var total= 0;
	//first forloop for iterating through products.length
	for(var i = 0; i < obj.products.length; i++){
		//console.log
		if(obj.products[i].product_type === "Lamp" || obj.products[i].product_type === "Wallet"){

			for(var j = 0; j < obj.products[i].variants.length; j++){

				total += Number(obj.products[i].variants[j].price);
			}

		}


	}

	console.log(total);




})