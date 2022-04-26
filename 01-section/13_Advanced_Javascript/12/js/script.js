// .flat()
/*
const array = [1, 2, 3, 4, 5]
console.log(array.flat())
// (5) [1, 2, 3, 4, 5]
*/

/*
const array2 = [1, [2, 3], [4, 5]]
console.log(array2.flat())
// (5) [1, 2, 3, 4, 5]
*/

/*
const array3 = [1, 2, [3, 4, [5]]]
console.log(array3.flat())
// Not a completely flat array
// (5) [1, 2, 3, 4, Array(1)]
*/
/*
the interesting thing is how many layers tto flatten the array
*/

/*
const array3 = [1, 2, 3, 4, 5]
console.log(array3.flat(2))
// we have a completely flattened array
// (5) [1, 2, 3, 4, 5]
*/

/** 
How many layers
I wanna flatten the array
*/
/*
const jurassicPark = [
	['🦂 ', '🦟 '],
	'🌂 ',
	'🐢 ',
	['🐍', '🦎 '],
	[[[['🦖 ']]], ''],
]

const entries = ['bob', 'sally', , , , , , 'cindy']
console.log(entries.flat())
// (3) ['bob', 'sally', 'cindy']

flatMap()
*/
