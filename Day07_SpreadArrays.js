/*2. Arrays
most common usage with spread operators
we can spread one array into another array
*/
const existingNums = [5,234,51,61]
const newNums = [6,1,8]
var allNums = [existingNums,newNums]
console.log(allNums);//[[5, 234, 51, 61], [6, 1, 8]]

//spread operator is used to combine the arrays
//we are getting the new array that has all exisiting and new number list
allNums = [...existingNums,...newNums]
console.log(allNums);//[5, 234, 51, 61, 6, 1, 8]

//ORDER MATTERS
allNums = [...newNums,...existingNums]
console.log(allNums);//[6, 1, 8, 5, 234, 51, 61]

//We can insert new items in the array
allNums = [1000,...newNums,true,...existingNums,'apple']
console.log(allNums);//[1000, 6, 1, 8, true, 5, 234, 51, 61, "apple"]


//We can do same thing with strings
const languages=['java','javascript','python']
const duty =['develop','test','deploy']
var skills=[...duty]
console.log(skills);//["develop", "test", "deploy"]


skills=[...languages,...duty]
console.log(skills);//["java", "javascript", "python", "develop", "test", "deploy"]

skills=['java','javascript',...duty,'cleaning']
console.log(skills);//["java", "javascript", "develop", "test", "deploy", "cleaning"]


//We can use spread operator to get eh copy of the original array
//getting the copy of ht elanguages array
var copyOfLanguages=languages;
console.log(copyOfLanguages);//["java", "javascript", "python"]
//languages and copyOfLanguages are pointing same place in the memory
//If i make an update on one array the other one will be change as well

copyOfLanguages.push('rubby')
console.log(copyOfLanguages);//["java", "javascript", "python", "rubby"]
console.log(languages);//["java", "javascript", "python", "rubby"]


//With spread operator, we can maka a new bopy of the original array
//So when I edit copy, original will not be affected
var copyWithSpread=[...languages];
console.log(copyWithSpread);//["java", "javascript", "python", "rubby"]
copyWithSpread.push("Apex");
console.log(copyWithSpread);//"java", "javascript", "python", "rubby", "Apex"]
console.log(languages);//["java", "javascript", "python", "rubby"]
//When i make a change in the copy array, then the original is not affected