//3. Objects: spread operator can be used with objects
const fullName={
    fName:'James',
    lName:'Bond'
  }
  
  var userInfo={
    fullName,//fullName is inserted as an OBJECT
    id:1,
    username:'007'
  };
  
  console.log(userInfo);
  /*
  [object Object] {
    fullName: [object Object] {
      fName: "James",
      lName: "Bond"
    },
    id: 1,
    username: "007"
  }
  */
  userInfo={
    ...fullName,//fullName is inserted as an OBJECT
    id:1,
    username:'007'
  };
  
  console.log(userInfo);