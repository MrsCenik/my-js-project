/*
DESTRUCTURING :
1. Object destructing
2. function detrtucturing
3. Array destructuring
*/
console.clear();

//1. object destructing
var user = {
  myfName : 'Sam',
  mylocation : 'Dallas',
  myemail : 'sam@fakeemail.com'
}
console.log(user.fName);//"Sam"
console.log(user.location);//"Dallas"
console.log(user.email);//"sam@fakeemail.com"
//OR i can use container
var name1=user.myfName
var location1=user.mylocation
var email1=user.myemail
console.log(name1);//"Sam"
console.log(location1);//"Dallas"
console.log(email1);//"sam@fakeemail.com"

//Destructuring the user objects
//benefit is we can access the data direclty withour . or [] notation

// NOTE: key names must match to the original object
//if keys doesn't match then data will be undefined

//For example:
//var {fName,mylocation,myemail} = user;
//console.log(fName);//undefined because there is no fName key in the original user object
var {myfName,mylocation,myemail} = user;
console.log(myfName);//"Sam"
console.log(mylocation);//"Dallas"
console.log(myemail);//"sam@fakeemail.com"

//2. function destructing
function getUser(){
  return {
    name2:'Sam',
    location2:'NYC',
    email2:'sam@gmail.com'
  };
}

//destruction the function
var {name2, location2, email2} = getUser();
console.log(name2);
console.log(location2);
console.log(email2);

//3. Array destructuring
var user1 = ['Tim', 'LA', 'tim@yahoo.com'];
var userName=user1[0];
var locationTim=user1[1];
var emailTim = user1[2];

console.log(userName);
console.log(locationTim);
console.log(emailTim);

//with destructuring

var [userName, locationTim, emailTim]=user1;
var userName=user1[0];
var locationTim=user1[1];
var emailTim = user1[2];

//Note: during array destructuring, we can give any name we want unlike object