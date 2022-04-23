// let + const

// const player = 'bobby'
// let experience = 100
// let wizardLevel = false

// if (experience > 98) {
// 	let wizardLevel = true
// 	// console.log('inside', wizardLevel)
// }

// console.log('outside', wizardLevel)

// experience = 80

// experience

// player = 'Sally'

// const a = function () {
// 	console.log('a')
// }

// const obj = {
// 	player: 'bobby',
// 	experience: 100,
// 	wizardLevel: false,
// }

// obj = 5

// obj.wizardLevel = true

// Destructuring

// const obj = {
// 	player: 'bobby',
// 	experience: 100,
// 	wizardLevel: false,
// }

// const player = obj.player
// const experience = obj.experience
// let wizardLevel = obj.wizardLevel

// const { player, experience } = obj
// let { wizardLevel } = obj

// const lorem = 'john snow'

// const obj = {
// 	[lorem]: 'hello',
// 	['ray' + 'smith']: 'hihi',
// 	[1 + 2]: 'hihi',
// }

// const a = 'Simon'
// const b = true
// const c = {}

// const obj = {
// 	a: a,
// 	b: b,
// 	c: c,
// }

// const obj = {
// 	a,
// 	b,
// 	c,
// }

// const name = 'Sally'
// const age = 34
// const pet = 'horse'

// const greeting = 'Hello ' + name + ' you seem to be doing ' + greeting + '!'

// const greetingBest = `Hello ${name} you seem to be ${
// 	age - 10
// }. What a lovely ${pet} you have`

// greetingBest
// 'Hello Sally you seem to be 24. What a lovely horse you have'

// Default Arguments

// function greet(name = '', age = 30, pet = 'cat') {
// 	return `Hello ${name} you seem to be ${
// 		age - 10
// 	}. What a lovely ${pet} you have`
// }

// greet()
// ;('Hello  you seem to be 20. What a lovely cat you have')

// greet('john', 50, 'monkey')
// ;('Hello john you seem to be 40. What a lovely monkey you have')

// Symbol

// var sym1 = Symbol()
// var sym2 = Symbol('foo')
// var sym3 = Symbol('foo')

// sym1
// Symbol()
// sym2
// Symbol(foo)
// sym3
// Symbol(foo)
// sym2 === sym3
// false

function add(a, b) {
	return a + b
}

// const add = (a, b) => {
// 	return a + b
// }

const add2 = (a, b) => a + b

add(4, 2)
6
add2(4, 2)
6
