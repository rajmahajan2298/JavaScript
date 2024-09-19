// One Way

let firstname = "Raj";
let lastname = "Mahajan";
let person = {
    firstname,
    lastname
};
console.log(person.firstname);
console.log(person.lastname);

// Another Way

function createPerson(fname, lname) {
    let fullname = fname + " " + lname;
    return { fname, lname, fullname };
}
let per = createPerson("Raj", "Mahajan");
console.log(per.fname);
console.log(per.lname);
console.log(per.fullname);

// One More Way

function createPerson(fname, lname, age) {
    let fullname = fname + " " + lname;
    return {
        fname,
        lname,
        fullname,
        isSenior: function() {
            return age > 60;
        }
    }
}
let p = createPerson("Raj", "Mahajan", 23);
console.log(p.fname);
console.log(p.lname);
console.log(p.fullname);
console.log(p.isSenior());