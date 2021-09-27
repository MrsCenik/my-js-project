/* 
Constructors: 
It is another was of creating objects
*/

console.clear();
//Create a Person as constructor with 4 params
//Params: name, age, hasLicence, languages

function Person(name, age, hasLicense, languages){
  this.name=name
  this.age=age
  this.hasLicense=hasLicense
  this.languages=languages
}

//Name: Jim
//age: 20
//hasLicence: true
//languages: English, Spanish, German -(ARRAY)
const personJim = new Person('Jim',20,true,["English", "Spanish", "German"]);
console.log(personJim);

/*
[object Object] {
  age: 20,
  hasLicence: true,
  languages: ["English", "Spanish", "German"],
  name: "Jim"
}
*/
//Print all of the informaton one by one
console.log(personJim.name);//"Jim"
console.log(personJim.age);//20
console.log(personJim.hasLicense);//true
console.log(personJim.languages);//["English", "Spanish", "German"]
console.log(personJim.languages[1]);//"Spanish"