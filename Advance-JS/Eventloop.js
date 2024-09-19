// SetTimeOUt

console.log("Start");
setTimeout(function cb() {
    console.log("callback");
}, 5000);

console.log("End");

// Event

console.log("Start");
document.getElementById("btn").addEventListener("click", function cb() {
    console.log("callback");
});
console.log("End");

// Fetch

console.log("Start");
setTimeout(function cb() {
    console.log("callback");
}, 5000);

fetch("https://api.netflix.com").then(function cbf() {
    console.log("fetch");
});

console.log("End");