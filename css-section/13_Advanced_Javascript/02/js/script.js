/*

condition ? expr1 : expr2

is this true or false?

'condition'

if its true provide this value:

'expr1',

if its false provide this value:

'expr2'

/.../

*/

/*

function isUserValid(bool) {
	return bool
}

var answer = isUserValid(true) ? 'You may enter' : 'Access denied'

function isUserValid(bool) {
	return bool
}

var answer = isUserValid(false) ? 'You may enter' : 'Access denied'

//

function isUserValid(bool) {
	return bool
}

var answer = isUserValid(true) ? 'You may enter' : 'Access denied'

var automatedAnswer = 
	"Your account # is " + ( isUserValid(false) ? "1234" : "not available")

//

function isUserValid(bool) {
	return bool
}

var answer = isUserValid(true) ? 'You may enter' : 'Access denied'

function condition() {
	if (isUserValid(true)) {
		return "You may enter";
	} else {
		return "Access denied"
	}
}

var answer2 = condition()

*/

function moveCommand(direction) {
	var whatHappens
	switch (direction) {
		case 'forward':
			whatHappens = 'you encounter a monster'
			break
		case 'back':
			whatHappens = 'you arrived home'
			break
		case 'right':
			whatHappens = 'you found a river'
			break
		case 'left':
			whatHappens = 'you run into a troll'
			break
		default:
			whatHappens = 'please enter a valid direction'
	}
	return whatHappens
}

// window.moveCommand('forward')
