/*
Ternary: 
*/

console.clear();

const x=5, y=6;

x>y ? console.log('Logic 1') : console.log('Logic 2');

const isExpensive = x>4 ? 'Expensive' : 'Cheap';
console.log(isExpensive); //"Expensive"

const result = x > 4 ? (y < 4 ? 'logic 1':'logic 2')
                                         :'logic 3';
console.log(result);//"logic 2"
