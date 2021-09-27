/*
ARRAYS:
Arrays are special type of objects
We use index to get teh values in array
We use [] to create arrays
*/
console.clear();
//8. concat -> combines arrays
var drinks=['water','coke','fanta','tea']
var snacks=['sunchips','gold fish','nuts','popcorn']
const favFoods=drinks.concat(snacks);
console.log(favFoods);//["water", "coke", "fanta", "tea", "sunchips", "gold fish", "nuts", "popcorn"]
//9. slice(startIndex(included),endIndex(excluded)) -> returns the piece in between the start and end index(similar to substring)
const myFoods = favFoods.slice(1,5);
console.log(myFoods);//["coke", "fanta", "tea", "sunchips"]

const favSnacks=snacks.slice(2);//returns from index2 till endIndex
console.log(favSnacks);//["nuts", "popcorn"]
//negative index means start from the end
const slicedDrinks=drinks.slice(-1); //start from last index till the end
console.log(slicedDrinks);//["tea"]

//10. Join 
//water - coke - fanta - tea

const joinedItems = drinks.join('-');
console.log(joinedItems);//water-coke-fanta-tea

const joinedItems1 = drinks.join('');
console.log(joinedItems1); //watercokefantatea

const joinedItems2 = drinks.join(',');
console.log(joinedItems2);//water,coke,fanta,tea