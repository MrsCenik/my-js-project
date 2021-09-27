
/*
ARRAYS:
Arrays are special type of objects
We use index to get teh values in array
We use [] to create arrays
*/
console.clear();
//Waw 1 Declaring Array:
var friendList = ['sam','tom','tim','john','bob']
console.log(friendList)
//1. push()    : add element at the end on the array
friendList.push('jack');
console.log(friendList);//["sam", "tom", "tim", "john", "bob", "jack"]
//2. unshift() : add element at the beginning of the array 
friendList.unshift('fred')
console.log(friendList);//["fred", "sam", "tom", "tim", "john", "bob", "jack"]
//3. pop()     : remove the last element of the array
friendList.pop()
console.log(friendList);//["fred", "sam", "tom", "tim", "john", "bob"]
//4. shift()   : remove the first element of the array
friendList.shift()
console.log(friendList);//["sam", "tom", "tim", "john", "bob"]