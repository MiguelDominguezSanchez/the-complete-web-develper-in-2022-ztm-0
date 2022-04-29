/*
function first() {
	var greet = 'Hi'
	function second() {
		alert(greet)
	}
	return second
}

var newFunc = first()
newFunc()
*/

const first = () => {
	const greet = 'Hi'
	const second = () => {
		const name = 'bobby'
		alert(greet)
	}
	return second
}

const newFunc = first()
newFunc()

// const newFunc = first()
/*
const newFunc = const second = () => {
	alert(greet)
}
newFunc()
*/

// Closures - a function ran, the function executed. It's never going to execute again.
// BUT it's going to remember that there are references to those variables
// so the child scope always has access tto the  parent scope

// Currying
const multiply = (a, b) => a * b
const curriedMultiply = (a) => (b) => a * b
// curriedMultiply(3)
// curriedMultiply(3)(4)
const multiplyBy5 = curriedMultiply(5)
multiplyBy5(5)
// 25

// Compose
const compose = (f, g) => (a) => f(g(a))

const sum = (num) => num + 1

compose(sum, sum)(5)

// Avoiding Side Effects, functional purity.

var a = 1
function b() {
	a = 2
}
