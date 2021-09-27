/* 
Arithmetic Operations
+,-,*,/,%,++,--,**
% remainder / mod
x++ : post increment. first use x, then add 1
++x : pre increment. first add 1, then use x
x-- : post decrement. firt use x, then substract 1
--x : pre decrement. first substract 1, then use x
*/
console.clear();

let x=12;
let y=3;

console.log(x++); //12
console.log(x); //13
console.log(++x); //14

x++; //x=x+1

console.log(x);//15

x+=5; //x=x+5
console.log(x);//20

x*=2;//x=2*x
console.log(x);//40

x/=3; // x=x/3
console.log(x);//13.333333333333334

console.log(y--);//3
console.log(y);//2
console.log(--y);//1

y+=9;//10

y%=4;//REMAINDER = 1

console.log(y);//2
//10=4.2 + 2(RESULT)

console.log(y**3);//2^3=2*2*2=8