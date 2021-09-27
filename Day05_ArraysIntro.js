/*
ARRAYS:
Arrays are special type of objects
We use index to get teh values in array
We use [] to create arrays
*/

console.clear();

//Declaring array:
var friendList = ['sam','tom','tim','john','bob']
console.log(friendList)
console.log(typeof(friendList));//"object"
var myFriendList = new Array('sam','tom','tim','john','bob')
console.log(myFriendList)

//getting teh values from the array
console.log(friendList[3]);//"john"

//when index is out of bound
console.log(friendList[5]);//undefined

//Editting array
//In the next lesson
