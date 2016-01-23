var arr = [3,-1,6,0,-9,8];
var countZero = 0;
var countPos = 0;
var countNeg = 0;

for (var i =0; i < arr.length; i ++){
	if (arr[i] == 0){
		countZero+=1;
	}else if(arr[i] < 0){
		countNeg+=1;		
	}else{
		countPos+= 1;
	}

	console.log(countPos/arr.length);
	console.log(countNeg/arr.length);	
	console.log(countZero/arr.length);	

}