var n = 6;
var s ="";
    for(var i = 1; i <=n; i++){
        
        var j = n;
        while (j!=i){
        	s = s + " ";
        	j--;
        }
        for(var j= 1; j<=i; j++ ){
        	var s= s + "#";
        }

        console.log(s);
        s="";
        console.log('\n');
    }


