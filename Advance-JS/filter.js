const arr = [5, 1, 3, 2, 6];
const output = arr.filter(isOdd);

function isOdd(x) {
    return x % 2;
}