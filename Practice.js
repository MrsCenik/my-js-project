/*
Get one side of the square from the user 
and prit the area of the square on th console
*/

function squareArea(a){
return(a**2);
}
console.log("The area of the square is: "+ squareArea(2));

  /*
. Get both sides of the rectangle form the user
and print the perimeter of the rectangle on the console
   __
  |__|
*/

function periRect(length,breath){
    return(2*(length+breath));
  }
  console.log("Perimeter of the rectangle is "+periRect(2,4));


  /*
  Get the radius of the circle from user and print the area of the circle on the console
  */
//1.Way
function areaCircle(radius){
    const pi = 3.14;
    return(pi*(radius**2));
  }

  let radius =prompt("Please enter the radius of the circle");
  console.log("Area of the circle is: "+ areaCircle(radius));

  //2.Way
  const areaCircle1 = function () {
    const radius = prompt("radius ?");
    if (!(radius / radius == 1)) throw new Error("raidus must be a number");
     return Math.PI * radius ** 2;
   }
   
   console.log(areaCircle1());

  /*
Take height and weight from user and give 
the body mass index rounded to the closest whole number

bmi = weight/(height*height)
*/

  function bmiCalculator(height,weight){
    return(Math.round(weight/(height**2)));
  }
  
  let bmi = bmiCalculator(50,200000);
    
  console.log(`The bmi value is ${bmi}`);

  /*
  Write a program to determine of the given year is a leap year

  write a function : isLeap
  -> divisible by 4
  -> but not divisible by 100
  -> unless divisible by 400
  */

  function isYear(year){
    if(a%100==0 && a%400==0){
        return 'leap year';
    }else if(a%100!=0 && a%4==0){
        return 'leap year';
    }else{
        return 'not leap year';
    }
}
  console.log(isLeap(1985));

  function isLeap(year) {
    
    return (year%4==0?(year%100==0?( year%400==0?'Leap Year':'Not Leap' ):'Leap Year' ):'Not Leap');
  }
  console.log(isLeap(1900));
/*
create a function to select a random person from the list
*/
/*
​
Write a function whoPays(){}
​
This functions selects a random person from names array and returns that person
​
Make sure your code for works different array sizes.
Eg:
var names =["Sam","Tom",Cindy","Cole","Jim"];
Use Math.random() to get a random number
Use that number as index of array to get random name
​
*/
//1.Way
const names = ["Sam", "Tom", "Cindy", "Cole", "Jim"];
const whoPays = function (names) {
  console.log(names[Math.trunc(Math.random() * 5)]);
};
whoPays(names);

//2.Way:
​
function whoPays(names){
​
  var numOfPeople = names.length;
  var randomNumber=Math.floor(Math.random()*numOfPeople);
  var randomName = names[randomNumber];
  return`${randomName} pays the bill`;

}

var names = ['Sam','Tom','Cindy','Jim'];

console.log(whoPays(names));

/*
Create a function which returns the number of true values there are in an array
countTrue([true,false,true,true]) -> 3
countTrue([true,false]) -> 1
*/
//1.way
function countTrue(arr){
    return array.filter(t=>t==true).length;
}

arr[true,false,true,true]
console.log("count of trues: "+ countTrue(arr));

​//2.Way
function countTrue(arr){
    var count = 0;
    for(var i=0;i<arr.length;i++){
      if(arr[i]===true){
        count++;
      }
    }
    return count;
  }
arr = [true,false,true,true];
console.log("The count of true is : "+countTrue(arr));

/*

A repdigit is a positive number composed out of the same digit.
Create a function  that takes an integer and returns whether it's a repdigit or not

isRepdigit(66) ➞ true 

isRepdigit(6666) ➞ true 

['6','6','6','6']

isRepdigit(0) ➞ true 

isRepdigit(01) ➞ false 

isRepdigit(-11) ➞ false

['-','1','1']

*/


function isRepDigit(num){
    num +="";
    
    for(i=0;i<num.length;i++){
      
      if(num[i]!=num[0])
        {
          return false;
        }
    }
    return true;
  }
  console.log(isRepDigit(2222));
//Another way:
const isRepdigit = (number) => {
    let arr = number.toString()
    let result = false;
    if (number < 0) {
      return false;
    } else if (number === 0) {
      result = true;
    } else for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) {
        result = true;
      }
    }
  return result;
  };
/*

Create a function that counts the integer's number of digits.
count(318)->3
count(-1232)->4
count(46666)->5
*/
//1.Way
function count(n){
    if(n<0){
      return (-n).toString().length;
    }
    else
      {
        return n.toString().length;
      }
  }
  console.log(count(-11000));

//2.Way
function count(n){
    return Math.abs(n).toString().length;
}
console.log(count(-11000));

/*
Create a function to return the second number from an array

sort the array in descending order -> Take the 2th value
*/
//1.Way
function secondLargest(arr){
  arr.sort((a,b)=> b-a);
  return arr[1];
}
let arr1 =[100,5,2,10];
console.log("The second largest value is " + secondLargest(arr1));

//2.Way
function secondLargest(arr){
    arr = arr.sort(function(a,b){
      return b-a;
    });
     return arr[1];
   } 
   let arr11 = [100,5,2,10];
   console.log("The second largest value is "+secondLargest(arr11));

   /*
   Get both sides of the triangle and print the hypothenuse of the triangle. 
   Round your answer to the nearist whole number.
   h =sqrt(a^2 +b^2)
   */

   function calHyp(base,altitude){
    return (Math.round(Math.sqrt(base**2+altitude**2)));
   }
    var base = prompt('Enter the base');
    var altitude = prompt('Enter the altitude');
    var hype = calHyp(base,altitude);
    console.log(`The hypotenus value for Base=${base} and Altitude= ${altitude} is ${hype}`);

/*
create a function customerInfo
it takes 2 params: name and cardNum
returns thhe info as following:
Customer first Letter in Caps and rest is masked(not visible)
customer card number firs 12 digit is masked. and last 4 digit is visible
Name = Johnny Cash
Card Num = 1234 1234 1234 5684
J*********
**** **** **** 5684
1)take first letter -> Make it UpperCase
2) take the rest -> replace with *
3) print 12 '*' 
4) print the last 4 digits of the credit card.
*/

function customerInfo(name,cardNum){
    var firstLetter = name.slice(0,1).toUpperCase();
    var restOfName = name.slice(1).replaceAll(/[a-zA-Z]/gi,'*');
    var specialChars = '\n************';
    var last4Digits = cardNum.slice(12,16);
   return ( firstLetter + restOfName + specialChars + last4Digits);
 }
 console.log(customerInfo('FowadHamza','1234567890123456'));