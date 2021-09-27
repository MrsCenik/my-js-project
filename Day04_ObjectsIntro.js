/*
OBJECTS:
In Js the referance types:
Function
Object 
Array
{} is used to create an object
:  is used to create key-value pairs
,  is used to add multiple key-value pairs
*/
console.clear();
var fName = 'John';
var lName = 'Cash';
var age = 18;

console.log(`${fName} ${lName} ${age}`);


//Creating person object with 3 data
var person = {
  fName:'John',
  lName:'Cash',
  age:18,
  isEmployed:true
};
//Calling the data from person object
//NOTE:We can call data using . notation or [] notation
//. notation is more common
console.log(person)//getting entire person object

//calling single data from person using . notation
console.log(person.fName);//"John"
console.log(typeof(person.fName));//"string"
console.log(person.lName);//"Cash"
console.log(person.age);//18
console.log(person.isEmployed);//true
console.log(typeof(person.isEmployed));//"boolean"

//calling single data from person using [] notation
console.log(person['fName']);//"John"
console.log(typeof(person['fName']));//"string"