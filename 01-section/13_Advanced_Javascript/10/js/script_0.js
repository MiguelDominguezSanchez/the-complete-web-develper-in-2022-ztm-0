/*
ES8 (ES2017)

ES8 have a few more new features
that were introduced in 2017
compared to ES7

In this video 
we will just go over 
the important ones

So the very first one
is string padding
we have new functions that we add to strings

'.padStart()'

and

'.padEnd()'

Now to demonstrate this 
lets go into the console
and lets just do:

'Turtle'.padStart(10)

'Turtle'.padStart(10)
"    Turtle" 

I get 10 'total' spaces used including the string
spaces before te string

if I do:

'Turtle'.padEnd(10)

'Turtle'.padEnd(10)
"Turtle    " 

I get 10 'total' spaces used including the string
spaces after the string

and this is useful just for aligning characters
of strings if you want a specific padding for them
very very easy to pick up
just another string method that we received

all right
lets go to the second one
the second one that we got
is something called trailing coma in functions parameters list in calls
ummm what does that mean

Now I can do something like :

const fun = (a,b,c,d,)

add a coma at the end
and I do a function

const fun = (a,b,c,d,) => {
	// and just lets say:
	console.log(a):
}

I can now run this function
like:

fun(1,2,3,4,)

and then a coma at the end
and this still valid javascript
If I run this:

//

const fun = (a,b,c,d,) => {
	console.log(a)
}

fun(1,2,3,4,)

//

const fun = (a,b,c,d,) => {
  console.log(a)
}

fun(1,2,3,4,) // 1

//

console.log a which is 1 is logged 

Now why this would be useful at all?
the main reason is
When we start getting really really big parameter

You see a lot of people doing:
things similar to this:

const fun = (
							a,
							b,
							c,
							d,
							) => {
								console.log(a)
							}

fun (1,2,3,4,)

just to make things a little bit cleaner
and when you start doing this
every time you add a new parameter
its a lot easier:

const fun = (
							a,
							b,
							c,
							d,
							e,
							) => {
	console.log(a)
}

fun(1,2,3,4,)

but also in github when we make changes
it actually makes the differences
the green and the red differences a lot cleaner

so its just syntactic
and just make things look a little bit nicer
again you normally wanna do something like this:
(referring to inline writing)
but, maybe when you have
a long parameter list like that
the ending coma is now valid 
and it wont give out an error

all right,
lets look at the next one

The next one
we have object dot values

'Object.values'

and object dot entries

'Object.entries'

and  these are very very useful
because before this
we have something called object dot keys

'Object.keys'

and object dot keys allow us 
to do something similar to
arrays but on objects

So for example
if we had an object
lets say we have an object

'let obj = {}'

and this object have username

let obj  = {
	// and this object will have:
	username0: 'Santa',
	// we have:
	username1: 'Rudolf', 
	// and we also have:
	username2: 'Mr.Grinch'
}

Now, looking at this object
because its not an array
we can't do the 'map'
or 'filter'
or 'reduce'
but this is kind of an ugly object
and this illustrates a new point:

Sometimes when we are working with servers
you get object that
you dont really like
or you dont wanna work with
but you still wanna iterate
over them

adn before we can something
like this with object do keys
let me do some space here so we can see

Object.keys(
	// and in here
	// we throw the object
	obj
)
and now we can use it like an array
it will go one by one
like an array
so its as if it is an array 
an array but accepts it has properties and values

let obj = [
	username0: 'Santa',
	username1: 'Rudolf',
	username2: 'Mr.Grinch'
]

so lets say we wanna do forEach loop

'Object.keys(obj).forEach()'

and for each key

'Object.keys(obj).forEach(key)'

that its for each key in the array
so for each username
we also have an index that is 0, 1, 2

'Object.keys(obj).forEach(key, index)'

so lets wrap this in brackets

Object.keys(obj).forEach((key, index) => {
	//  and now within here
	// we can say:
	console.log(key
		// and then object key
		obj[key]
		// So we are gabbing the object with  the key username:
		)
})

So if I console.log this
Lets copy and paste this

//

let obj = {
	username0: 'Santa',
	username1: 'Rudolf',
	username2: 'Mr.Grinch'
}

Object.keys(obj).forEach((key, index) => {
	console.log(key, obj[key])
})

//

And I see we have:

'username0' 'Santa'
'username1' 'Rudolf'
'username2' 'Mr.Grinch'

//

and thats one way for us 
to iterate or loop through objects
but with :

'Object.entries'

things become a little bit easier
for example we can do:

'Object.values'

and the object dot values
if I do a 'forEach' here
and simply grab  the value

Object.values(obj).forEach(value => {
	// and from value I can just simply
	console.log(value)
})

//

let obj = {
	username0: 'Santa',
	username1: 'Rudolf',
	username2: 'Mr.Grinch'
}

Object.values(obj).forEach(value => {
	console.log(value)
})

//

and Now I get the value
of each object:

'Santa'
'Rudolf'
'Mr.Grinch'

That is 
it loops through Santa, Rudolf and Mr.Grinch

With the entries:
If I do object dot entries,
well lets see what happens

Object.entries(obj).forEach(value => {
	console.log(value)
})

//

let obj = {
	username0: 'Santa',
	username1: 'Rudolf',
	username2: 'Mr.Grinch'
}

Object.entries(obj).forEach(value => {
	console.log(value)
})

//

[ 'username0', 'Santa' ]
[ 'username1', 'Rudolf' ]
[ 'username2', 'Mr.Grinch' ]

//

I get an array of :
username0 Santa,
username1 Rudolf,
username Mr.Grinch

So this gives you a lot of control
you get both :
property or key and value
you can do what ever you want with it
and use forEach, map, reduce, filter
all those array functions

Lets use a real live scenario
lets say we wanna to 
we just received this
from the backend
the backend just send us
a bunch of users
that they have in the data base
and we wanna generate users names
for them
because
we dont like the 
username0, username1, username2

we wanna display name
that displays the Santa
the id number 0
for Rudolf would be 1
for Mr.Grinch would be 2

How can we do that
using our new found powers
well, I can just simply do:
something with object dot entries

'Object.entries()'

and object dot entries will have 
an object 

'Object.entries(obj)'

that I can map over

'Object.entries(obj).map()'

and this will give us a value

Object.entries(obj).map(value => {
	// remember that tis will return arrays
	// and in here this will return value of 1
	// return value[1]
	// because we want to grab Santa, Rudolf and Mr.Grinch
	// so that is the second item in the array
	// and then we want add to that
	// like a string value[0]
	// return value[0] + value[1]
	// which is the first item
	// so username0, username1, username2
	// and here we want to replace
// return value[0] + value[1].replace
	// this is just a function that we can use on strings
	// and we wanna replace 'username'
	// with empty string ''
	// return value[0] + value[1].replace('username', '')
	return value[0] + value[1].replace('username', '')
})

So what we are doing here is creating a new string
Santa 0
because we dont need the username in here

So now even though we have an object
to begin loop through it
like an array
and look at that we have new username

//

let obj = {
	username0: 'Santa',
  username1: 'Rudolf',
  username2: 'Mr.Grinch'
}

Object.entries(obj).map(value => {
	return value[1] + value[0].replace('username', '');
})

//

[ 'Santa0', 'Rudolf1', 'Mr.Grinch2' ]

How cool is that
So this are really really useful
additions to the language 
specially 
Object.value
and
Object.entries
you can do a lot with it
but there is one ES8 feature
that has ??
that everybody is excited about
and they are called 
'Async Await'
now is brand new and everybody in  the community is excited about it
how ever in  order to fully grasp the benefit
and understand it
we need an entire video on its on

So I will see you in the next one
bye bye

*/
