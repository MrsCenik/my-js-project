/*
Primitive Data Type i JS
string, number, boolean, null, undefined
*/

var myName = 'javascript';
console.log(typeof(myName));

var myName = "java";
console.log(typeof(myName));

/*
Number literal:
we anly have number data type. No int, double, byte,...
​
*/
var myNum=20;
console.log(typeof(myNum));//"number"
var myNum=20.9;
console.log(typeof(myNum));//"number"

var myNum=20/0;

console.log(myNum);//Infinity
console.log(typeof(myNum));//"number"

//      num+string
var num1=20+'a';
console.log(num1);//"20a"
console.log(typeof(num1));//"string"

//      string+num
var num2='a'+20;
console.log(num2);//"a20"
console.log(typeof(num2));//"string"


/*
boolean:
True of False
*/
var isExist=true;
console.log(typeof(isExist)); //boolean
var isExist=false;
console.log(typeof(isExist)); //boolean

/*
null
*/

var pickColor=null;
console.log(pickColor);//null
console.log(typeof(pickColor)); //Object

/*
undefined
*/

var selectedCar;
console.log(selectedCar); //undefined
console.log(typeof(pickColorselectedCar)); //undefined

var selectedCar=undefined;//It's not necessary to initialize 'selectedCar' to 'undefined'. 
console.log(selectedCar); //undefined
console.log(typeof(pickColorselectedCar)); //undefined

