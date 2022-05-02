// Complete the below questions using this array:
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

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
// andrei
let newArray = []
array.forEach((user) => {
	let { username } = user
	username = username + '!'
	newArray.push(username)
})
console.log(newArray) // Array(4) [ "john!", "becky!", "susy!", "tyson!" ]

//Create an array using map that has all the usernames with a "? to each of the usernames
// andrei
const mapArray = array.map((user) => {
	let { username } = user
	return username + '?'
})
console.log(mapArray) // Array(4) [ "john?", "becky?", "susy?", "tyson?" ]

//Filter the array to only include users who are on team: red
// andrei
const filterArray = array.filter((user) => {
	return user.team === 'red'
})
console.log(filterArray) // Array [ {…}, {…} ]
​/*
0: Object { username: "john", team: "red", score: 5, … }
​
1: Object { username: "susy", team: "red", score: 55, … }
​
length: 2
*/

//Find out the total score of all users using reduce
// andrei
const total = array.reduce((acc, user) => {
  return acc + user.score
}, 0);
console.log(total) // 71 

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9]
const newArray = arrayNum.map((num, i) => {
	console.log(num, i)
	alert(num)
	return num * 2
})
// andrei
const newArray = arrayNum.map((num, i) => {
  return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
// andrei
const answer = array.map(user => {
  user.items = user.items.map(item => {
    return item + '!'
  })
  return user;
})
console.log(answer)
/*
Array(4) [ {…}, {…}, {…}, {…} ]
​
0: Object { username: "john", team: "red", score: 5, … }
​​
items: Array(3) [ "ball!", "book!", "pen!" ]
​​​
0: "ball!"
​​​
1: "book!"
​​​
2: "pen!"
​​​
length: 3
​​​
<prototype>: Array []
​​
score: 5
​​
team: "red"
​​
username: "john"
​​
<prototype>: Object { … }
​
1: Object { username: "becky", team: "blue", score: 10, … }
​​
items: Array(3) [ "tape!", "backpack!", "pen!" ]
​​​
0: "tape!"
​​​
1: "backpack!"
​​​
2: "pen!"
​​​
length: 3
​​​
<prototype>: Array []
​​
score: 10
​​
team: "blue"
​​
username: "becky"
​​
<prototype>: Object { … }
​
2: Object { username: "susy", team: "red", score: 55, … }
​​
items: Array(3) [ "ball!", "eraser!", "pen!" ]
​​​
0: "ball!"
​​​
1: "eraser!"
​​​
2: "pen!"
​​​
length: 3
​​​
<prototype>: Array []
​​
score: 55
​​
team: "red"
​​
username: "susy"
​​
<prototype>: Object { … }
​
3: Object { username: "tyson", team: "green", score: 1, … }
​​
items: Array [ "book!", "pen!" ]
​​​
0: "book!"
​​​
1: "pen!"
​​​
length: 2
​​​
<prototype>: Array []
​​
score: 1
​​
team: "green"
​​
username: "tyson"
​​
<prototype>: Object { … }
​
length: 4
*/