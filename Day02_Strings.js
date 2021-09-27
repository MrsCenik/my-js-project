/* 
Strings:
'' single quote
"" double quote
`` backtick -ES6
*/

console.clear();

let fName = 'Jonny'
console.log(fName)

let lName = 'Cash';
console.log(lName)

//1. My name is Jonny(variable)
let str1='My name is '+fName
console.log(str1)

// 2. My name is 'Jonny'
//use '' inside "" to get as string
let str2="My name is 'Jonny'";
console.log(str2);//My name is 'Jonny'

//3.My name is 'Jonny'
let str3='My name is \'Jonny\''
console.log(str3);//My name is 'Jonny'

//4. Backtick

let firstName='Sam'
let lastName='Walton'
let age = 50
let location = 'Dallas'

//First Name : Sam, Last Name : Walton, Age : 50, Location : Dallas
let info='First Name : '+firstName+', Last Name : '+lastName+', Age : '+age+', Location : '+location;
console.log(info)

let personInfo=`First Name : ${firstName}, Last Name : ${lastName}, Age : ${age}, Location : ${location}`
console.log(personInfo)