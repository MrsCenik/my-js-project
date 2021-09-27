/*
FUNCTIONS:
perform an action
calculate a value
*/
console.clear();

//creating a function
function sum(){
  var num1 = 5;
  var num2 = 4;
  var total = num1+num2;
  return total;
}

//calling the function
console.log(sum());//9
//OR
const result = sum() +10;
console.log(result);//19

//Creating a function
function square(s){
  return s*s;
}
//using the function
console.log(square(8));//64

//using the function
console.log(square());//NaN
//
console.log(square(3,4,true,'javascript'));//s=3,Result = 9
//
const result1=square(8)-1;
console.log(result1);//63

//We can assign DEFAULT values in the function parameter
function addNumbers(num1=2,num2=3,num3=4){
  return num1+num2+num3;
}
console.log(addNumbers());//Using default values 2+3+4=9
console.log(addNumbers(5,6));//Overwriting num1=5,num2=6. 5+6+4=15