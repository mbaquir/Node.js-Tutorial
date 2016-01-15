var str = [ 'University of New South Wales,&nbsp;(LL.B.),(1990)',
  					'Australian National University,&nbsp;(Practical Legal Training in Law),(1990)',
  					'University of New South Wales,&nbsp;(Bachelor of Commerce),(1988)' ];


//str[0] = str[0].replace(/,/g," ").replace(/&nbsp;/g," ").replace(/.([^.]*)$/,' '+'$1').replace(/\./g,"");
str[1] = str[1].replace(/,/g," ").replace(/&nbsp;/g," ").replace(/.([^.]*)$/,' '+'$1').replace(/\./g,"");

console.log(str);