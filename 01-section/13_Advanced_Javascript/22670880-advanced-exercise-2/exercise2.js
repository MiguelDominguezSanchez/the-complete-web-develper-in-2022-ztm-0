//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
	if (winBattle()) {
		return 10
	} else {
		return 1
	}
}

//

var experiencePoints = function () {
	winBattle ? 10 : 1
} // mine mistaken

var experiencePoints = winBattle() ? 10 : 1 // andrei

//Using this function, answer the questions below:
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

//#2 return value when moveCommand("forward");

moveCommand(forward)

//#3 return value when moveCommand("back");

moveCommand(back)

//#4 return value when moveCommand("right");

moveCommand(right)

//#5 return value when moveCommand("left");

moveCommand(left)

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

function visitMuseum(museum) {
	var youEncountered
	switch (museum) {
		case 'El Prado':
			youEncountered = 'Las Meninas'
			break
		case 'Reina Sofia':
			youEncountered = 'Gernica'
			break
		case "Sorolla's Museum":
			youEncountered = "Sorolla's atelier"
			break
		case 'Royal Mint':
			youEncountered = 'History of Coinage'
			break
		case 'National Library':
			youEncountered = 'Writing History'
			break
		default:
			youEncountered = 'A long way ahead'
	}
	return youEncountered
}

visitMuseum('El Prado')
visitMuseum('Reina Sofia')
visitMuseum("Sorolla's museum")
visitMuseum('Royal Mint Museum')
visitMuseum('National Library Museum')

function visitMuseum(museum) {
	var youEncountered
	switch (museum) {
		case 'El Prado':
			youEncountered = 'Las Meninas'
			break
		case 'Reina Sofia':
			youEncountered = 'Gernica'
			break
		case "Sorolla's Museum":
			youEncountered = "Sorrolla's atelier'"
			break
		case 'Royal Mint Museum':
			youEncountered = 'Coinage History'
			break
		case 'National Library Museum':
			youEncountered = 'Writing History'
			break
		default:
			youEncountered = 'a long way ahead'
	}
	return youEncountered
}

visitMuseum('El Prado')
// "Las Meninas"

visitMuseum('Reina Sofia')
// "Gernica"
