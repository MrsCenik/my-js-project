/*
ARRAYS:
Arrays are special type of objects
We use index to get teh values in array
We use [] to create arrays
*/
console.clear();
var ages = [10,14,34,16,10]
console.log(ages)
console.log(typeof(ages));//"object"
//5. indexOf(item)-> return the first index of the item
    //indexOf(item, startingIndex) -> return the first index of the item starting from startingIndex
    //lastIndexOf(item) -> return the last index of the item
    //Note: returns -1 if there is no matching item in the array
console.log(ages.indexOf(10));//0
console.log(ages.indexOf(10,1));//4
console.log(ages.lastIndexOf(10));//4
console.log(ages.indexOf(100));//-1
//6. includes(item) -> returns true if item exist in the array. returns false if item is not in the array
    //includes(item, startingIndex)
console.log(ages.includes(14));//true
console.log(ages.includes(14,3));//false. is there any 14 after index if 3
console.log(ages.includes('apple'));//false
const isExist = ages.includes(50);
console.log(isExist);//false