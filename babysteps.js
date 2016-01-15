
var a = process.argv;

var sum = 0;

for(var i = 2; i < a.length; i++){
	sum += Number(a[i]);
}
console.log(sum);
