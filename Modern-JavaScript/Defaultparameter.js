// Normal Way

function mult(a, b) {
    return a * b;
}
mult(5);

// ES6 Way Or Fat Arrow Function Way
const mult = (a, b = 5) => {
    console.log(`Multiplication of two number is ${a*b}`);
}
mult(4);