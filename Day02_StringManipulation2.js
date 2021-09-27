/* 
Strings Manipulations:
Ask user to enter a name: and print “Name”
Make sure only the first initial is always capital and the rest always small
Eg:
var name=ahmet;   =>>>>Ahmet
var name=aHmet;   =>>>>Ahmet
var name=AHMET    =>>>>Ahmet
*/

console.clear();

let userName=prompt("Enter your name");


//userName.slice(0,1).toUpperCase() : getting the first letter and converting to upper case
//userName.slice(1).toLowerCase()   : getting the all remaining letters and converting to lower case
let properName=userName.slice(0,1).toUpperCase()+userName.slice(1).toLowerCase();

console.log(properName);


/*
yuzde yuz de 
35 65 
*/
