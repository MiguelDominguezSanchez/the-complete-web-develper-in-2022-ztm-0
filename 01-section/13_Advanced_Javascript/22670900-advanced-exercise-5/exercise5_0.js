// Complete the below questions using this array:
/*
const array = [
	{
		username: 'john',
		team: 'red',
		score: 5,
		items: ['ball', 'book', 'pen'],
	},
	{
		username: 'becky',
		team: 'blue',
		score: 10,
		items: ['tape', 'backpack', 'pen'],
	},
	{
		username: 'susy',
		team: 'red',
		score: 55,
		items: ['ball', 'eraser', 'pen'],
	},
	{
		username: 'tyson',
		team: 'green',
		score: 1,
		items: ['book', 'pen'],
	},
]
*/

const array = [
	{
		username: 'john',
		team: 'red',
		score: 5,
		items: ['ball', 'book', 'pen'],
	},
	{
		username: 'becky',
		team: 'blue',
		score: 10,
		items: ['tape', 'backpack', 'pen'],
	},
	{
		username: 'susy',
		team: 'red',
		score: 55,
		items: ['ball', 'eraser', ' pen'],
	},
	{
		username: 'tyson',
		team: 'green',
		score: 1,
		items: ['book', 'pen'],
	},
]

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

let newArray = []

array.forEach((user) => {
	let { username } = user
	username = username + '!'
	newArray.push(username)
})
console.log(newArray)
/*
(4) ['john!', 'becky!', 'susy!', 'tyson!']
0: "john!"
1: "becky!"
2: "susy!"
3: "tyson!"
length: 4
[[Prototype]]: Array(0)
*/

//Create an array using map that has all the usernames with a "? to each of the usernames

//Filter the array to only include users who are on team: red

//Find out the total score of all users using reduce

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
