var fs = require('fs');

var a  = fs.readFileSync(process.argv[2]);

//console.log(a);

var str = a.toString().split('\n')

//console.log(str)
console.log(str.length - 1)
