var fs = require('fs');

module.exports = function (dir,ext,callback) { /* ... */ 

	fs.readdir(dir, function  (err, list){
	if(err){
		return callback(err) // early return
	}

	var myArray = [];

	for(var i = 0; i < list.length ; i++){

		if( list[i].split('.')[1] === ext){
			myArray.push(list[i]);
		}
	}
	return callback(null,myArray);

})

}
//console.log(a);


