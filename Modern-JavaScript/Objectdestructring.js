// One Way

const bioData = {
    name: "Raj",
    age: 23,
    deg: 'B.Tech'
}

let [name, age, deg] = bioData;
console.log(`My name is ${name}. My age is ${age}. and My highest qualification is ${deg}`);

// Another Way

const myData = {
    name: "Chotu",
    age: 23,
    deg: 'B.Tech',
    hobb: {
        first: 'Football',
        sec: 'Travelling'
    }
}

console.log(`my age is ${age} and I love to play ${hobb.first} and I love to ${hobb.sec}`);