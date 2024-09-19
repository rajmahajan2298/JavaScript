console.log("Before Swapping");

let x = 10;
let y = 20;

console.log(`value of x is ${x}`);
console.log(`value of y is ${y}`);

console.log("After Swapping");

x = x + y;
y = x - y;
x = x - y;

console.log(`value of x is ${x}`);
console.log(`value of y is ${y}`);

// Another Way

let a = 15;
let b = 25;
[a, b] = [b, a];
console.log(`Value of a is ${a} and Value of b is ${b}`);