class Students {
    biodata() {
        console.log("Hey, I'm a Class Method");
    }
}
let obj = new Students();
console.log(obj);

class Students {
    constructor(name, age, deg) {
        this.myname = name;
        this.myage = age;
        this.mydeg = deg;
    }
    biodata() {
        console.log(`My name is ${this.myname}. My age is ${this.myage}. I have Purushed the ${this.mydeg}`);
    }
}
let obj1 = new Students("Raj", 23, "B.Tech");
obj1.biodata();

class Player extends Students {
    constructor(name, age, deg, game) {
        super(name, age, deg);
        this.mygame = game;
    }
    play_biodata() {
        return `${super.biodata()}`;
    }
}

let obj2 = new Player("Raj", 23, "B.Tech", "Football");
obj2.play_biodata();

class Dance extends Students {
    constructor(name, age, deg, dance) {
        super(name, age, deg);
        this.mydance = dance;
    }
    dan_biodata() {
        console.log(`My Dance style is ${this.mydance}`);
    }
}

let obj3 = new Dance("Raj", 23, "B.Tech", "Hip Hop");
obj3.dan_biodata();