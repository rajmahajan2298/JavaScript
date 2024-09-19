// 1st Way

var stored = sum(10, 20);
document.write(stored);

function sum(a, b) {
    var add = a + b;
    return add;
}

// 2nd Way

sum();

function sum() {
    var a = 10;
    var b = 20;
    var add = a + b;
    document.write(add);
}

// 3rd Way

sum(10, 20);
sum(20, 20);
sum(40, 50);

function sum(a, b) {
    var add = a + b;
    document.write(add);
}