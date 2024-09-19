// Normal Way

var x = 22;

function getName() {
    console.log("JavaScript is Beautifull");
}
console.log(x);
getName();

// Hoisting Way

getName();
console.log(x);
console.log(getName);

var x = 22;

function getName() {
    console.log("JavaScript is Beautifull");
}