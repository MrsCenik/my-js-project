/* 
MAP:
- a method of an array
- take a function as parameter
- returns a new array by using each item from teh original array
*/

console.clear();
var numbers = [3,56,2,48,5]

//1. function to calculate items * 2
function double(x){
  return x*2;
}

const testArray=[5,6,7,8].map(double);
console.log(testArray);//[10, 12, 14, 16]


/*
getting each number from numbers array
and using inside the double function
we are getting newNumbers1 array as a new array
*/
const newNumbers1=numbers.map(double);
console.log(newNumbers1);//[6, 112, 4, 96, 10]


//We can pass a function directly inside the map
const newNumbers2=numbers.map(  
function double(x){
  return x*10;
}  
)
console.log(newNumbers2);//[30, 560, 20, 480, 50]


//Arrow functions with Map
/* 
get each item from numbers array
multiply by 3 
and store in newNumbers3 array
*/
const newNumbers3=numbers.map(x => x*3)
console.log(newNumbers3);//[9, 168, 6, 144, 15]

//Without map function how I can achive same thing
//do same thing with forEach loop
//a little bit more work without map
const newNumbers4=[];

numbers.forEach(

  x => newNumbers4.push(x*3)

)

console.log(newNumbers4);//[9, 168, 6, 144, 15]