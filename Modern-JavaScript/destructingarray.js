// Normal Way

const favLang = ['JS', 'Python', 'C', 'Java'];
var top1 = favLang[0];
var top2 = favLang[1];
var top3 = favLang[2];

console.log("My fav programming language is " + top1);

// ES6 Way

let [top1, top2, top3, top4] = favLang;
console.log("My fav lang is " + top1);

// Find First and Last Elements of Array

let [top1, , , toplast] = favLang;
console.log(`My fav programming lang is ${top1} and least fav is ${toplast}`);

// Another Way

let top1, top2;
[top1, top2] = favLang;
console.log(`My fav programming lang is ${top1} and 2nd fav is ${top2}`);