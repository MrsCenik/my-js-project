console.clear()
//****fill(item); changes ALL og the items with the given valueand return a new array
//fill() changes the original array and returns a new array at the same time

var nums=[5,3,7,3,-6,11]
var filledWith1=nums.fill(1);
//changes the original array
console.log(nums);//[1, 1, 1, 1, 1, 1]
console.log(filledWith1);//[1, 1, 1, 1, 1, 1]

//****fill(item,startIndex(included),endIndex(exluded));
var fillWith10=nums.fill('orange',2,5);
console.log(fillWith10);//[1, 1, "orange", "orange", "orange", 1]

//TASK: write a function that return the array filled with intrement numbers
//Example
// fillNumbers(3); [1,2,3] 
// fillNumbers(6); [1,2,3,4,5,6] 
// fillNumbers(10);[1,2,3,4,5,6,7,8,9,10]

function fillNumbers(len){
  return Array(len)//creating array with length of 'len'
    .fill(0)//start with 0
    .map((input,index)=>index+1);//returns the index +1 in each loop so we can get 0+1, 0+1+1,0+1+1+1
}

console.log(fillNumbers(3));
console.log(fillNumbers(6));
console.log(fillNumbers(10));
 