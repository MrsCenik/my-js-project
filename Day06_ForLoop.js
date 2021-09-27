/* 
FOR LOOP:
-
*/

console.clear();

for(let i=0;i<=5;i++){
  
 console.log(i); //print 0-5
 
 console.log(`${i}`);//prints 0-5
  
}


const todos=[
  
  {
    id:1,
    task:'eat',
    isComplete:true
  },
  {
    id:2,
    task:'shopping',
    isComplete:true
  },
  {
    id:3,
    task:'take out dog',
    isComplete:false
  }
  
]

console.log(todos);
console.log(todos[0]);
console.log(todos[0].task);//"eat"

//print all of the only tasks
for(let i=0;i<todos.length;i++){
  
  console.log(todos[i].task);

  
  console.log(todos[i].id);
  
  
  console.log(todos[i])
}

//1. USING MAP
//storing tasks using a map function

const map1=todos.map(
  function tasks(eachTask){
    //this returns only tasks
    return eachTask.task
  }
)
console.log(map1);//["eat", "shopping", "take out dog"]

//2. USING MAP AND ARROW FUNCTION
const map2=todos.map(
//eachItem-LOOP 1 
//   [object Object] {
//   id: 1,
//   isComplete: true,
//   task: "eat"
// }
  
  
//eachItem-LOOP 2
//  [object Object] {
//   id: 2,
//   isComplete: true,
//   task: "shopping"
// } 
  

//eachItem-LOOP 3
// [object Object] {
//   id: 3,
//   isComplete: false,
//   task: "take out dog"
// }
  
  eachItem => eachItem.task
)
console.log(map2);//["eat", "shopping", "take out dog"]

//3. FOR EACH
//creating empty array 
const taskArray=[]
todos.forEach(
  eachItem => taskArray.push(eachItem.task)
)
console.log(taskArray);//["eat", "shopping", "take out dog"]
