// 1st

function x() {
    var a = 22;

    function y() {
        console.log(a);
    }
    y();
}
x();


// 2nd

function x() {
    var a = 22;

    function y() {
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z);
z();