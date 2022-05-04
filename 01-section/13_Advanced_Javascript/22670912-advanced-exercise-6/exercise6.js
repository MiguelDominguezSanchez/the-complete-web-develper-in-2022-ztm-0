//Evaluate these:
//#1
[2] === [2] // .md false
{} === {} // .md false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // .md 5 WRONG // andrei 4
const object2 = object1; // .md 5 WRONG // andrei 4
const object3 = object2; // .md 5 WRONG // andrei 4
const object4 = { a: 5}; // .md 5
object1.a = 4; // .md 4


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

/*
// .md
class Animal {
  constructor(name, type, color) {
    console.log('Animal', this)
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mamal extends Animal {
  constructor(name, type, color) {
    super(name, type, color)
  }
}

const cow = new Mamal ('Cow', 'Mamal', 'Balck & White') {
  console.log(`Hi, I'm ${this.name}, I'm a ${this.type}, I'm ${this.color}`)
*/

// andrei's

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mamal extends Animal {
  constructor(name, type, color) {
    super(name, type, color)
  }
  sound() {
    console.log(`Mooo I'm ${this.name} and I'm a ${this.color} ${this.type}`);
  }
}

const cow = new Mamal('Shelly', 'cow', 'brown')

//

console.log(cow)

Mamal {name: 'Shelly', type: 'cow', color: 'brown'}
color: "brown"
name: "Shelly"
type: "cow"
[[Prototype]]: Animal





















