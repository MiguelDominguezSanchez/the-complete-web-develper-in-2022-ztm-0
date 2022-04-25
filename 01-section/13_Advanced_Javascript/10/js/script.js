const basket = ['apples', 'oranges', 'grapes']
const detailedBasket = {
	apples: 5,
	oranges: 10,
	grapes: 1000,
}

//1
for (let i = 0; i < basket.length; i++) {
	console.log(basket[i])
}

//2
basket.forEach((item) => {
	console.log(item)
})

// for of
// Iterating - arrays, strings
// for (item of basket) {
// 	console.log(item)
// }
// for (item of detailedBasket) {
// 	// Error detailedBasket is not iterable
// 	console.log(item)
// }

// for in - properties
// enumerating - objects
// for (item in detailedBasket) {
// 	console.log(item)
// }
for (item in basket) {
	// underneath the hood you can thing javascript arrays like objects
	console.log(item)
}

basket = {
	0: 'apples',
	1: 'oranges',
	2: 'grapes',
}

/********
a for in loop loops over enumerable properties,
enumerable property names of an object.
The for of loop,
doesn't work with objects
because they are not iterable
Now there small caveats and exceptions to this rule
but 99% of the time
you are using the for in loop
for objects
for loop for strings and arrays
 */
