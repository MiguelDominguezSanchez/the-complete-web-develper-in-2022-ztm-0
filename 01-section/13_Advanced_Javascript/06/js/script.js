// reference type

;[] === [] // false
;[1] === [1] // false

var object1 = { value: 10 } // undefined

var object2 = object1 // undefined

var object3 = { value: 10 } // undefined

object1 === object2 // true

object1 === object3 // false

object1.value = 15 // 15

object2.value // 15

object3.value // 10

// context
function b() {
	let a = 4
}

console.log(a) // ReferenceError: a is not defined

console.log(this) // window{}

console.log(this === window) // true

this.alert('hello')

window.alert()

// this references what object is inside of

function a() {
	console.log(this)
}

a() // window

window.a() // run the function // to the left of the dot 'window'

const object4 = {
	a: function () {
		console.log(this)
	},
}

object4.a() // Object { a: a() }

// instantiation
// when you make a copy of an object
// and reuse the code

// think of a  class as st I wanna make a copy of
// if I ever wanna make a copy of an object
// its a good idea to do something like this
// you will see how easy it is to copy this time
class Player {
	constructor(name, type) {
		console.log(this)
		// constructor
		// when you are creating a Player class
		// it says: every time I am making a copy Player
		// the first thing that gets run
		// its the constructor function
		// and the constructor function its gonna create this properties on the Player object
		// so 'name' and a 'type'
		this.name = name
		this.type = type
		// and now I can create anything I want for the Player
		// Lets say I wanna create a method
		// such as 'introduce()'
	}
	introduce() {
		console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
	}
	// Now I am saying
	// this Player class
	// any Player that I create will be able to introduce themselves
	// and they also have this.name and this.type
	// the reason of using 'this' here
	// is that when we create a Player
	// we can access the name and type property
	// this is the syntax you gonna get used to
	// in order to access the player and make copies
	// you have to run a constructor
	// which is all the properties and methods that you want the Player to have
	// you can also create methods that they Player can have
	// anytime you wanna access a property
	// within the constructor
	// use 'this.name' ie
	// if I wanna use introduce
	// 'this.introduce()' ie
	//
}

class Wizard extends Player {
	constructor(name, type) {
		console.log('wizard', this) // Error I need to call super to incorporate the 'this'
		super(name, type)
		console.log('wizard', this)
	}
	play() {
		console.log(`WEEE I'm a ${this.type}`)
	}
}

const wizard1 = new Wizard('Shelly', 'Healer')
const wizard2 = new Wizard('Shawn', 'Dark Magic')
//

// the program every time sees a 'new' keyword
// it says: we are creating a new 'Wizard' ie
// and this Wizard is going to have two parameters
// 'Shelly' and 'Healer' ie
// So its gonna go to the 'Wizard' class
// again because we have 'new' keyword
// and says: hey Wizard I want you to extend Player
// so its gonna see this 'super'
// and what 'super' does it take us up to the 'constructor' of the 'Player'
// and it runs this:
//
// constructor(name, type) {
// console.log(this)
// this.name = name
// this.type = type
// }
//
// and now iit attaches this to the Wizard
// and then it introduces the 'introduce()' function
// and then adds the paly() function
//

console.log(wizard1.play()) // WEEE I'm a Healer

console.log(wizard1.introduce()) // Hi I am Shelly, I'm a Healer

console.log(wizard2.introduce()) // Hi I am Shawn, I'm a Dark Magic

// Classical Inheritance
// It doesn't look too bad
var Player = function (name, type) {
	this.name = name
	this.type = type
}

// There is prototype,
// another thing in javascript
// and to be honest with you
// you shouldn't really use it
// it doesn't look very nice
//

Player.prototype.introduce = function () {
	console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
}

var wizard1 = new Player('Shelly', 'healer')
var wizard2 = new Player('Shawn', 'dark magic')

// you see we need to attach 'play'
// to both 'wizard1' and 'wizard2'
//
wizard1.play = function () {
	console.log(`WEEE I'm a ${this.introduce.type}`)
}
wizard2.play = function () {
	console.log(`WEEE I'm a ${this.type}`)
}

// it doesn't look as nice
// as class inheritance
//
// Once you get used to class inheritance
// it doesn't look to bad
// all we are saying is:
// as soon as we get to 'class'
// hey we wanna make a copy
// of this ie 'Player' object
// so we wanna make copies of 'Player' and we wanna make copies of 'Wizard'
//
// when I do the 'new' keyword
// I say make an instance of Wizard
// and Wizard uses some functionality from the
// adds it onw little play() function
//

// Every time you hear sb to talk about
// 'reference type' or
// 'context vs scope'
// 'instantiation'
// these are the ting they are talking about
//
// Objects are very complicated
// with that it gives us a lot of power
//
//
//
//
//
//
//
//
