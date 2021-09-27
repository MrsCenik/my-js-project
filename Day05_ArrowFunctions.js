/*
AAROW FUNCTIONS
*/

console.clear();
//Traditional Function
function sum(a){
    return a+100;
}

console.log(sum(9)); //109

//ananymus function
var sum1 = function(a){
    return a+100;
};

console.log(sum1(10)); //110

//ARROW FUNCTION => case1: one argument
//1 remove function keyword(function) and function name(sum)
//2 We have to use => symbol between the parameter body
//3 Use container. Create variable and store your arrow function
var arrow = (a)=>{
    return a+100;
};

//calling the fuction
console.log(arrow(11)); //111

//4 (optional) delete reemove the cutlyu braces and return keyword
var arrow1 = (a) => a+100;
console.log(arrow1(12)); //112

//5 NOTE: WE CAN REMOVE THE PARANTHESIS AROUND THE PARAMETER
//IF THERE IS ONLY ONE PARAMETER
var arrow2 = a => a+100;
console.log(arrow2(13)); //113

var squares = x => x*x;
console.log(squares(6));//36


//***ARROW FUNCTION => Case2 : functions with more than one parameters***

//Traditional
function sum2(a,b){
    return a+b+100;
}

console.log(sum2(10,20)); //130

//anonymus function
var sumResult2=function (a,b){
    return a+b+100;
};
console.log(sumResult2(11,21)); //132

//With arrow Function
//1 remove function keyword(function) and function name(sum)
//2 We have to use => symbol between the parameter body
//3 Use container. Create variable and store your arrow function

var arrow3 = (a,b)=>{
    return a+b+100;
};

console.log(arrow3(12,22)); //134

//4 (optional) remove the {} and return
var arrow4 = (a,b)=> a+b+100;

console.log(arrow4(13,23));//136

//NOTE: I can not remove the paranthesis around the a,b parameters
//because there are more than one parameter


//***ARROW FUNCTION => Case3 : functions with no parameter***

//traditional
var x=14, y=24;
function sum3(){
    return x+y+100;
}
console.log(sum3());//138

//anonymus function
var sumResult3=function (){
    return x+y+100;
  };
  console.log(sumResult3());//138
  //Arrow function
  var arrow3=()=>{
    return x+y+100;
  }
  console.log(arrow3());//138
  //OPTIONAL:
  var arrow4=()=>x+y+100;
  console.log(arrow4());//138
  //DONE!!!
