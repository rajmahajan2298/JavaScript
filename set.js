// Interview Question 
function x() {
    for(var i =1; i<=5; i++) {
        setTimeout(function() {
            console.log(i);
        }, i * 1000)
    }
    console.log("JavaScript")
}
x();

// By Using Let

function x() {
    for(let i =1; i<=5; i++) {
        setTimeout(function() {
            console.log(i);
        }, i * 1000)
    }
    console.log("JavaScript")
}
x();

// Correct it by using Var

function x() {
    for(var i =1; i<=5; i++) {
        function close() {
        setTimeout(function() {
            console.log(i);
        }, i * 1000)
    }
    close();
 }
    console.log("JavaScript")
}
x();