/* 
FILTER:
ARRAY.filter( function parameter  )
When we want to use a contidition then we can use filter
return the data that meets specific condition
*/

console.clear();

var numbers =[8,1,4,12,66,3]

//store the numbers that is only greater than 10

const filteredArray = numbers.filter(
  
  function (eachNumber){
    return eachNumber>10
  } 
)
console.log(filteredArray);// [12, 66]

//with arrow function
const newArray = numbers.filter(eachNumber=>eachNumber>10);
console.log(newArray);// [12, 66]

//with forEach
const newArray1=[];
numbers.forEach(
eachNumber=>eachNumber>10?newArray1.push(eachNumber):newArray1.push()
)
console.log(newArray1);//[12, 66]