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


//Creating person object with 3 data
var person = {
  fName:'John',
  lName:'Cash',
  age:18,
  isEmployed:true
};

console.log(person.fName);//"John"

//We can Edit values using . or [] notation
//changing fName as Sam 
person.fName = 'Sam';
console.log(person.fName);//"Sam"


console.log(person.isEmployed);//true
person.isEmployed=false;
console.log(person.isEmployed);//false

//changing lName and age using [] notation
console.log(person.lName);//"Cash"
person['lName']='Blair';
console.log(person.lName);//"Blair"


console.log(person);
/*
[object Object] {
  age: 18,
  fName: "Sam",
  isEmployed: false,
  lName: "Blair"
}
*/

//editting value using a new key
// person['fName']='William';
//ABOVE LINE IS SAME AS BELOW COMBINATION
//  NEWKEY    KEY
var newName='fName';
person[newName]='William';
console.log(person)
/*
[object Object] {
  age: 18,
  fName: "William",
  isEmployed: false,
  lName: "Blair"
}
*/
