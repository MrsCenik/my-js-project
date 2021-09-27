/*
String Manipulations:Day03_StringManipulations3.js
*/
console.clear();
//concat() : used to concatanate the strings
let fName='John';
let lName='Walker';

console.log(fName+' '+lName);//"John Walker
console.log(fName.concat(lName));//"JohnWalker"

//trim() : remove spaces from teh beginning and the end
let words = ' Today is Wednesday ';
let trimmed=words.trim();
console.log(trimmed);//"Today is Wednesday"

//charAt('index') : return the charactr at that index. index starts from 0
let charAt4=words.charAt(4);
console.log(charAt4);//a

//split('charter'): returns an array that is splitted from this character
let splitted = words.split(' ');//split words from ' ' and return as array
console.log(splitted);//["", "Today", "is", "Wednesday", ""]

let trimSplitted=trimmed.split(' ');
console.log(trimSplitted);//["Today", "is", "Wednesday"]

let states="AL,AK,AZ,AR,TX,NY,NF,FL";
let listOfStates=states.split(',');
console.log(listOfStates);//["AL", "AK", "AZ", "AR", "TX", "NY", "NF", "FL"]