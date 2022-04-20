/*
4 + 3
if (4 + 3 === 7) {
	// alert('You are smart!')
	console.log('Hello')
}
console.log('Hello')
*/
/*
function sayHello() {
	console.log('Hello')
}

sayHello()

var sayBye = function () {
	console.log('Bye')
}

sayBye()
*/

/*
function sing() {
	console.log('Ahhh')
	console.log('Teee')
}

sing()

function sing2() {
	console.log('laaa deee daaa')
	console.log('laaa laaa')
}

sing2()
*/

/*
function sing(song) {
	console.log(song)
}

sing('Laa laaa laaa laa, la la la')
sing('Hellooo')
sing('backstreets back all right')
*/

/*
function multiply(a, b) {
	// console.log(a, b)
	if (a > 10 || b > 10) {
		return "that's too hard"
	} else {
		return a * b
	}
}
*/

/*
var a = function (a, b) {
	// console.log(a, b)
	if (a > 10 || b > 10) {
		return "that's too hard"
	} else {
		return a * b
	}
}

// multiply(5, 10)
a()
*/

/*
function multiply(a, b) {
	return a * b
}
alert(multiply(3, 4))
*/

/*
var list = ['tiger', 'cat', 'bear', 'bird']
console.log(list[0])

var numbers = [1, 2, 3, 4]

var booleans = [true, false, true]

var functionsList = [
	function apple() {
		console.log('apple')
	},
]

var mixedList = [
	'apples',
	3,
	undefined,
	true,
	function apple() {
		console.log('apple')
	},
]
*/

/*
var list = [['tiger', 'cat', ' bear', 'bird']]

// console.log(list[0])
// console.log(list)
console.log(list[0][2])
*/

// var list = ['tiger', 'cat', 'bear', 'bird']

// list.shift()

// console.log(list)

/* Tiger has been removed, I shifted everything tto the left */

// list.pop()

// console.log(list)

/* It has pop bird off of the end of the array */

// list.push('elephant')

// console.log(list)

// list.concat(['bee', 'deer'])

// console.log(list)

/*
var list = ['tiger', 'cat', 'bear', 'bird']

list.concat(['bee', 'deer'])

console.log(list)

list.sort()
*/

/*
var myList = ['cat', 'bear', 'elephant', 'deer']

var myNewList = myList.concat(['monkey'])

console.log(myList)

console.log(myNewList)
*/

/*
var user = {
	name: 'JohnyMentero',
	age: 34,
	hobby: 'Soccer',
	isMarried: false,
}

var list = ['apple', 'banana', 'orange']

user.favouriteFood = 'spinach'

user.isMarried = true
*/

/*
var user = {
	name: 'JohnyMentero',
	age: 34,
	hobby: 'Soccer',
	isMarried: false,
	spells: ['abrakadabra', 'shazam', 'boo'],
	shout: function () {
		console.log('AHHH!')
	},
}

var list = [
	{
		username: 'andy',
		password: 'secret',
	},
	{
		username: 'jess',
		password: '123',
	},
]

var emptyObject = {}

var nullObj = null
*/

/*
var database = [
	{
		username: 'andrei',
		password: 'supersecret',
	},
]

var newsFeed = [
	{
		username: 'Bobby',
		timeline: 'So tired from all that learning!',
	},
	{
		username: 'Sally',
		timeline: 'Javascript is sooo coool!',
	},
]

var userNamePrompt = prompt("What's your username?")
var passwordPrompt = prompt("What's your password")

function signIn(user, pass) {
	if (user === database[0].username && pass === database[0].password) {
		console.log(newsFeed)
	} else {
		alert('Sorry, wrong username and password!')
	}
}

signIn(userNamePrompt, passwordPrompt)
*/

// function declaration
function newFunction() {}

// function expression, can be an anonymous function
var newFunction = function () {}

// function expression, can also have names
var newFunction = function nameFunction() {}

// expression, is st that produces a value
1 + 3
var a = 2
return true

// Calling or invoking a function
alert()
newFunction(param1, param2)

// assign a variable
var a = true

// function vs method
function thisIsAFunction() {}

var obj = {
	thisIsAMethod: function () {},
}

thisIsAFunction()
obj.thisIsAMethod()
