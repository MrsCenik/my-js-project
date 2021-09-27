/*
ARRAYS:
Arrays are special type of objects
We use index to get teh values in array
We use [] to create arrays
*/
console.clear();
var fruits = ['apple','orange','banana',false,10]
console.log(fruits);//["apple", "orange", "banana", false, 10]
/*7. splice is used to delete or insert(add) items in any index in an array
Practice link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)
*/
fruits.splice(2,1);
console.log(fruits);//["apple", "orange", false, 10]
fruits.splice(1,0,"kiwi","peach")
console.log(fruits);//["apple", "kiwi", "peach", "orange", false, 10]
fruits.splice(2,2,"cherry","strawberry","appricot")
console.log(fruits);//["apple", "kiwi", "cherry", "strawberry", "appricot", false, 10]
//startIndex = 1 from last
//deleted item number = 1
fruits.splice(-1,1);
console.log(fruits);//["apple", "kiwi", "cherry", "strawberry", "appricot", false]
// NOTE - number means starting from the last index
fruits.splice(-1,0,'tea','coffee');//Delete 0 item. insert tea,coffee at -1 index
console.log(fruits);//["apple", "kiwi", "cherry", "strawberry", "appricot", false, "tea", "coffee", 10]
fruits.splice(-1,0,'water')
console.log(fruits);//["apple", "kiwi", "cherry", "strawberry", "appricot", "tea", "coffee", "water", false]





// *****************From Practice Website***********************
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)

// const months = ['Jan', 'March', 'April', 'June'];
// //           STARTINDEX,DELETE NUMBER
// months.splice(2,2); // delete ONLY 1 after the first index()including first index
// // inserts at index 1
// console.log(months);
// // expected output: ["Jan"]

// const months1 = ['Jan', 'March', 'April', 'June'];
//           STARTINDEX,DELETE NUMBER,ITEM(INSERTED IN STARTINDEX)
months1.splice(2,1,'May'); 
// delete ONLY 1 in the 2nd index
// AND inserts 'May' in the 2nd second index
console.log(months1);
// expected output: ["Jan", "March", "May", "June"]
// const months = ['Jan', 'March', 'April', 'June'];
// //           STARTINDEX,DELETE NUMBER,ITEM(INSERTED IN STARTINDEX)
// months.splice(2,0,'May','June'); 
// // delete Nothing in the 2nd index
// // AND inserts 'May','June' in the 2nd second index
// console.log(months);
// // expected output: ["Jan", "March", "May", "June", "April", "June"]