/*
Spread Operator (... operator)
Spread operator is used to spread out data from arrays,objects, or functions
... is used in front of the arrays
We can use spread operator:
1. functions calls
2. array literals
3. objects literals
*/

//1. functions
var minNum = Math.min(45,32,19,100,25);
console.log(minNum);//19. because data is spread out. 5 different items

const tempratures = [45,32,19,100,25];
minNum=Math.min(tempratures);
console.log(minNum);//NaN. Because temprature is one single argument

//using spread operator
minNum=Math.min(...tempratures);//same as Math.min(45,32,19,100,25);
console.log(minNum);//19

//We can use use spread operator with strings
const favActors=["Jim","Angelina","Jack"]
console.log(favActors);//["Jim", "Angelina", "Jack"]
console.log(...favActors);//"Jim","Angelina","Jack"

//strings
const myFavNumber="8145941";
console.log(Math.min(myFavNumber));//145389
console.log(Math.min(...myFavNumber));//1
//We can pass strings direcly in functions with spread operator
console.log(Math.max(..."234521235720"));//7