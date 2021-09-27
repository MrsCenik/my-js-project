//***** every(); returns a boolean
//returns true if condition is true for ALL elements
//returns false otherwise
var nums=[5,3,7,3,-6,11];
var items=[5,3,7,3,-6,11,true,'apple'];
//check if ALL elements are less than 12
//return true if ALL items are less than 12
//return false otherwise
var isTrue = nums.every(eachNum => eachNum<12);
console.log(isTrue); //true

isTrue=nums.every(eachNum => eachNum<10);
console.log(isTrue); //false

isTrue=items.every(input => input<15);
console.log(isTrue); //false

//****some(); returns a boolean
//returns true if condition is true for ALL elements
//returns false otherwise


isTrue=nums.some(input => input<10);
console.log(isTrue); //true

//Check if the array has any negative number
isTrue=nums.some(input => input<0);
console.log(isTrue); //true

//check if items array has apple
isTrue=items.some(input => input === 'apple')
console.log(isTrue);//true

//check if items array has 'orange'
isTrue=items.some(input => input === 'orange')
console.log(isTrue);//false