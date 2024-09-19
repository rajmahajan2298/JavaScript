// Normal Way

var sum = function() {
    var a = 10;
    var b = 20;
    return a + b;
}
console.log(sum());

// ES6 Way

const sum = () => {
    let a = 20;
    let b = 20;
    return a + b;
}
console.log(sum());

// Another Way

let a = 40;
let b = 40;

const sum = () => a + b;
console.log(sum());

// Next Way

const sum = (a, b) => a + b;
console.log(sum(20, 80));