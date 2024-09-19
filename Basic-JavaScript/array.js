// 1st Way

var friends = ["Raj", "Nitanshu", "Keshav"];
document.write(friends[1]);

// 2nd Way

var friends = new Array("Raj", "Nitanshu", "Keshav");
document.write(friends);

// 3rd Way

var friends = friends[0];
friends[0] = "Nitanshu";

// Array Methods

var friends = ["Raj", "Nitanshu", "Keshav"];
friends.sort();
document.write(friends);

var friends = ["Raj", "Nitanshu", "Keshav"];
friends.pop();
document.write(friends);

var friends = ["Raj", "Nitanshu", "Keshav"];
friends.push("Pawan");
document.write(friends);

var friends = ["Raj", "Nitanshu", "Keshav"];
friends.shift();
document.write(friends);

var friends = ["Raj", "Nitanshu", "Keshav"];
friends.unshift("Pawan");
document.write(friends);

var friends = ["Raj", "Nitanshu", "Keshav"];
friends.reverse();
document.write(friends);

var friends = ["Raj", "Nitanshu", "Keshav"];
var check = Array.isArray(friends);
document.write(check);

var friends = ["Raj", "Nitanshu", "Keshav"];
var check = ["Pawan", "Shivani", "Yogi"];
document.write(array.concat(check));

var friends = ["Raj", "Nitanshu", "Keshav"];
var check = ["Pawan", "Shivani", "Yogi"];
document.write(array.indexOF("Keshav"));