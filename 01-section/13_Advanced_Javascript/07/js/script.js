/*
//
// Pass by value
// make a copy
//
var a = 5
var b = a

b++

console.log(a)
console.log(b)

let obj1 = { name: 'Yao', password: '123' }
let obj2 = obj1

// Pass by reference
obj2.password = 'easypeasy'

console.log(obj1)
console.log(obj2)

// Pass by reference
// stored in memory
// we dont copy the values
// like we did with primitive types
// We simply when we assign object1 and object2
// we simply say hey this is where the object is memory
//
// obj1 and obj2 are both pointing somewhere in memory
// we dont know where somewhere in the memory
// to a self that contains this information
// all we are saying by doing
// obj2 = obj1
// this is the address in memory of wherever obj1 is allocated
//
// let obj1 = {name: 'Yao', password: '123'}
// let obj2 = 'address in memory'
//
// What that means is
// that when I change obj2 password like this
// obj2.password = 'easypeasy'
// I am saying, well ..
// change password on this object in memory wherever in memory is
// {name: 'Yao, password: '123'}
// that also obj1 is pointing to
// thats where pass by reference comes from
//
// Why do you think this is a good idea
// let think about this
// Why is this good?
// its kind of nice right?
// Because by just having one object here
// we are saving space in memory
// we are not copying and cloning the object
// creating multiple version
// you can simply save memory
// reference just one location
// instead of loading up our memory
// butt why this also be bad?
// because unlike a primitive type
// we have this issue
// that by mistake
// that somebody else changes a property
// on that referenced value
// this is something that we need to be careful
//
//
// Arrays are simply objects
// lets try this with an array
var c = [1, 2, 3, 4, 5]
var d = c
d.push(1877628761)
console.log(d) // (6) [1, 2, 3, 4, 5, 1877628761]
// 'c' has already changed as well
console.log(c) // (6) [1, 2, 3, 4, 5, 1877628761]
// this is good we are saving memory
// we are not just copying things
// imagine that 'c' were a massive object
// if we copy to different parts of the code
// this would create a lot of memory
// But then there are times
// when we may want to clone an object
// so we dont modify it like this
// How can we do that?
//
// with something like an array there is different it
// I can simply do array
// an empty array []
// with a concat method
// that pushes what ever I have
var c = [1, 2, 3, 4, 5]
var d = [].concat(c)
d.push(1876287661)
// 'c' still the same
console.log(c) // (5) [1, 2, 3, 4, 5]
// with 'd' I have a new array
console.log(d) // (6) [1, 2, 3, 4, 5, 1876287661]
//
// Objects are a little bit more difficult
//
let obj = { a: 'a', b: 'b', c: 'c' }
// this object I wanna copy it
// I wanna this piece of code, this object in a  different location in memory
// let obj2 = obj // pass by reference, references to the same object
// Instead we clone an object
let clone = Object.assign(
	// in here the first parameter
	// is the object to copy to, an empty object {}
	{},
	// the second parameter, what is the source
	// so that is from which we copy the property
	// so in my case it will be the object
	obj
)
// so that now,
// if I change lets say
// obj.c = 5
console.log(clone) // Object
// a: "a"
// b: "b"
// c: "c"
// the clone object was not affected at all
// even though we change 'c' to '5'
// we didn't do this
// let clone = obj
// that would have been pass by reference
// and you see change on the original object
// and because Object.assign()
// we are able to clone the object
//
// There is also another way of doing it
let clone2 = { ...obj }
// nice and clean
console.log(clone2) // {a: 'a', b: 'b', c: 'c'}
// that hasn't been modified either
obj.c = 5
console.log(obj) // {a: 'a', b: 'b', c: 5}
// it is different to what we have before
//
// So cloning is great
// Let me ask you this
// What do you think it would happen with the code we have?
// if we have an object inside an object?
// for example if 'c' instead of just being 'c' string
// is another pass by reference object
let obj = {
	a: 'a',
	b: 'b',
	c: {
		deep: 'try and copy me',
	},
}
// we have an object that is somewhere referenced somewhere in memory
// and inside of that object
// again we have another pointer
// to another place iin memory
// which is this object
//
// What if I change
obj.c.deep = 'hahaha'
// We clone everything but it got overwritten
// I though I cloned  everything
// /.../
// This is what we calle a shallow clone
// we clone the first level
// this is the memory address
// = {
// 	a: 'a',
// 	b: 'b',
// 	c: {
// 		deep: 'try and copy me',
// 	}
// }
//
// But within this object there is another object
// again remember this is another address 'c'
// some place in memory
// it never change it always reference to this object
// this is shallow cloning
// when wwe only clone the fist layer
// that's a big problem
//
// How can we do a deep clone
// the way we do it is a little funky
// we use JSON
//
// let superClone = JSON.parse
// JSON 'parse' method
// this is beyond the course
// you can read what JSON parse does
// but this JSON object its going to say
// we are going to stringify
// that is turn everything into the obj into a string
// and once we turned every thing into a string
// turn that string back into an object
let superClone = JSON.parse(JSON.stringify(obj))
//
// So that if I do superClone now
console.log(superClone)
//
//
//
//
//
*/

let obj = {
	a: 'a',
	b: 'b',
	c: {
		deep: 'try and copy me',
	},
}

let clone = Object.assign({}, obj)
let clone2 = { ...obj }
let superClone = JSON.parse(JSON.stringify(obj))

obj.c.deep = 'hahaha'
console.log(obj)
console.log(clone)
console.log(clone2)
console.log(superClone)

/*******
{a: 'a', b: 'b', c: {…}}
a: "a"
b: "b"
c: {deep: 'hahaha'}
[[Prototype]]: Object
script.js:222 
{a: 'a', b: 'b', c: {…}}
a: "a"
b: "b"
c: {deep: 'hahaha'}
[[Prototype]]: Object
script.js:223 
{a: 'a', b: 'b', c: {…}}
a: "a"
b: "b"
c: {deep: 'hahaha'}
[[Prototype]]: Object
script.js:224 
{a: 'a', b: 'b', c: {…}}
a: "a"
b: "b"
c: {deep: 'try and copy me'}
[[Prototype]]: Object */

/******************************* */

/*
superClone
version made a deep clone of the object
Before this video
pass by value or pass by reference
makes sense 

This is a bit of a warning however,
because this has some performance implications

This object was extremely deep
a massive object
its gonna take a long time time clone everything
so you wont see this 
'JSON.parse(JSON.stringify(obj))'
out in the wild to much
if you are cloning objects like this
there is most likely other ways that you should be doing it
but I want you to show you the idea of pass by reference the idea shallow cloning
and some of the ways that
we can use objects
to get the desired outcome

******************************/
