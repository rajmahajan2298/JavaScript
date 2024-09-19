//Create A Object

var myobj = {
    firstname: "Raj",
    lastname: "Mahajan",
    Age: 23,
    Profession: "Software Engineer",
};

console.log(myobj);

//Change Property Name

myobj.Age = 22;
console.log(myobj);

//Add Property

myobj.Address = "Khargone";
console.log(myobj);

//Delete Property

delete myobj.Address;
console.log(myobj);