/* 
Constructors: 
It is another was of creating objects
*/

console.clear();
//Normal Function: camelCase
function carInfo(brand, model, year){
  return {
    brand, model, year
  };
};

const carFunction = carInfo('Nissan','Rogue',2019);

console.log(carFunction)
/*
[object Object] {
  brand: "Nissan",
  model: "Rogue",
  year: 2019
}
*/
console.log(carFunction.brand);//"Nissan"
console.log(carFunction.model);//"Rogue"
console.log(carFunction.year);//2019

//Constructor: PascalCase
function CarInfo(brand, model, year){
  //this keyword is a reference to the objects
  this.brand=brand;
  this.model=model;
  this.year=year;
}

const carConstructor=new CarInfo('Tesla','Model X',2021);
console.log(carConstructor);
/*
[object Object] {
  brand: "Tesla",
  model: "Model X",
  year: 2021
}
*/
console.log(carConstructor.brand);//"Tesla"
console.log(carConstructor.model);//"Model X"
console.log(carConstructor.year);//2021

//EXAMPLE 2
//Create function
function areaOfCircle(r){
  return {
    r,
    result(){
      console.log('Result : ')
    }
  }
}
const myCircleArea1=areaOfCircle(7);

//Create constructor
function AreaOfCircle(r){
  this.r=r;
  this.result=function(){
    console.log('Result :')
  }
}

const myCircleArea2=new AreaOfCircle(10);

//New keyword : creates an empty object, then retuns the objects from the constructor
//function of new keywords, wraps the values of given in function and return it as an object