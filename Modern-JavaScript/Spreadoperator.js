// Normal Way

function sum(a, b, c) {
    console.log(a + b + c);
}
sum(1, 2, 3);

// ES6 Way

var arrVal = [1, 2, 3];
sum(...arrVal);

// Normal Way

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
arr1 = arr1.concat(arr2);
console.log(arr1);

// ES6 Way

let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6];
arr3 = [...arr3, ...arr4];
console.log(arr3);

// Normal Way

let arrcp1 = [1, 2, 3];
let arrcp2 = arrcp1;
console.log(arrcp1);

// ES6 Way

let arrcp3 = [1, 2, 3];
let arrcp4 = [...arrcp3, 4, 5];
console.log(arrcp3);
console.log(arrcp4);