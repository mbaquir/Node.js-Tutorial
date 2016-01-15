var mongoose = require('mongoose');
var monk = require ('monk');
var fs = require('fs');


mongoose.connect('mongodb://heroku_2t3bs6w2:u486f0g6st7uav34f78ol08em9@ds059284.mongolab.com:59284/heroku_2t3bs6w2');

var db = monk('mongodb://heroku_2t3bs6w2:u486f0g6st7uav34f78ol08em9@ds059284.mongolab.com:59284/heroku_2t3bs6w2');

var collection = db.get('worker_classification-collection');


collection.find({},{},function(e,docs){
	fs.writeFileSync('worker_classification-collection' +'.csv',"");
	docs.forEach(function(collection){
		var question = collection.question;
		console.log(question);

		var score_zero = collection.score_zero;
		var new_score_zero = [];
		var k = 0;
		for (var i = 0; i < score_zero.length; i++) {
			new_score_zero[k] =score_zero[i];
			new_score_zero[k+1] = 0;
			k = k+2;
		}
		console.log(new_score_zero);

		var score_one = collection.score_one;
		var new_score_one = [];
		var m = 0;
		for (var i = 0; i < score_one.length; i++) {
			new_score_one[m] =score_one[i];
			new_score_one[m+1] = 1;
			m = m+2;
		}
		console.log(new_score_one);

		var score_two = collection.score_two;
		var new_score_two = [];
		var n = 0;
		for (var i = 0; i < score_two.length; i++) {
			new_score_two[n] =score_two[i];
			new_score_two[n+1] = 2;
			n = n+2;
		}
		console.log(new_score_two);


		var score_three = collection.score_three;
		var new_score_three = [];
		var p = 0;
		for (var i = 0; i < score_three.length; i++) {
			new_score_three[p] =score_three[i];
			new_score_three[p+1] = 3;
			p = p+2;
		}
		console.log(new_score_three);

		var score_four = collection.score_four;
		var new_score_four = [];
		var q = 0;
		for (var i = 0; i < score_four.length; i++) {
			new_score_four[q] =score_four[i];
			new_score_four[q+1] = 4;
			q = q+2;
		}
		console.log(new_score_four);
		var outputLine = new_score_zero.concat(new_score_one, new_score_two, new_score_three, new_score_four);
    fs.appendFileSync('worker_classification-collection' + '.csv', question + ',' + outputLine + '\n');

		console.log("--------------------------------")
	});
	
	//console.log(docs);

});
