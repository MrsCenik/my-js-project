/*
NESTED OBJECTS:
In Js the referance types:
Function
Object 
Array
{} is used to create an object
:  is used to create key-value pairs
,  is used to add multiple key-value pairs
*/
console.clear();
/*
Create an object 
Name : personInfo
fName = Jim -> string
lName = Carrey -> string
age   = 50 -> number
address = {street = 6th Ave. , city = NYC , state = NY} -> object inside personInfo
hobbies = soccer, fishing, hunting -> array
salary = function that return '100K yearly'
*/

const personInfo ={
  fName   : 'Jim',
  lName   : 'Carrey',
  age     : 50,
  address : {
    street : '5th Ave',
    city   : 'NYC',
    state  : 'NY'
  },
  hobbies : ['soccer','fishing','hunting'],
  salary  : function() {
    return '100k yearly';
  } 
};

console.log(personInfo);
/*
[object Object] {
  address: [object Object] {
    city: "NYC",
    state: "NY",
    street: "5th Ave"
  },
  age: 50,
  fName: "Jim",
  hobbies: ["soccer", "fishing", "hunting"],
  lName: "Carrey",
  salary: function() {
    return '100k yearly'
  }
}
*/

//calling fName from personInfo object
console.log(personInfo.fName);//"Jim"


console.log(personInfo.address);
/*
[object Object] {
  city: "NYC",
  state: "NY",
  street: "5th Ave"
}
*/

//We can use multiple . to get the data from nested objects
console.log(personInfo.address.street);//"5th Ave"

const myState = personInfo.address.state;
console.log(myState);//"NY"



//Getting the data from the hobbies array
//getting hobbies array
console.log(personInfo.hobbies);//["soccer", "fishing", "hunting"]

//getting soccer
console.log(personInfo.hobbies[0]);//"soccer"
//hunting
console.log(personInfo.hobbies[2]);//"hunting"
//hunting
console.log(personInfo.hobbies[3]);//undefined since there is no assigned value in this index
