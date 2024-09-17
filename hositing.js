// Normal Function

var a = 7;
function getName() {
    console.log("Namsate JS");
}

console.log(a);
getName()

// Hositing 

console.log(a)  // Undedfinedf
getName()
console.log(getName())  // Print whole function

var a = 7;
function getName() {
    console.log("Namsate JS");
}

// In case of arrow function it will behave like a another variable so it will show undefined

var getName = () => {
    console.log("") // Undefined
}