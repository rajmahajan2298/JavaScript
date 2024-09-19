//Access Children of Body

var child = document.body.children;
console.log(child);

//Add a new child in a body

var para = document.createElement("p");
var textnode = document.createTextNode("This is New Player");
para.appendChild(textnode);

document.body.appendChild(para);

//Add a First and Last Child

var list = document.querySelector("ul");
console.log(list);
console.log(list.firstChild);

//Acees Sibling

var firstSibling = Raj.nextElementSibling;
console.log(firstSibling);