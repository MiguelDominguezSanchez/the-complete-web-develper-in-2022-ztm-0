/*
Welcome back

I want to talk you a bit about javascript looping

you see I actually 
left out a few other ways that we can loop in javascript
We talked about 
for loops
while loops
do while loops
and we also talked about 
forEach
but there is actually 
two other ways that we can loop
in javascript
and I am gonna show you how 
to do that in this video

Now lets imagine that we have a basket
and this basket is an array
that has a grocery list
then we wanna buy apples, we wanna buy oranges, and we also wanna buy grapes
because grapes are natural candy, 
grapes they are delicious

const basket = ['apples', 'oranges', 'grapes']

Now in order for us to loop through this basket
we learnt how to do this, right?

we learnt about the for loops
we can do
let i equals zero
let i = 0
unless i is less than the basket dot length
i < basket.length
we increment i one by one
i++
and then just console log basket index of i

for (i = 0; i < basket.length; i++) {
	console.log(basket[i])
}

//

const basket = ['apples', 'oranges', 'grapes']

for(i = 0; i < basket.length; i++) {
	console.log(basket[i])
}

//

if we run this in the browser
and hit enter
we get:

'apples'
'oranges'
'grapes'

//

Alright thats the first way 
we already know how to do that

we can also use the
'forEach' loop
that came new in ES5

basket.forEach()

and then we can say item
we use arrow function
that we 've learnt about

basket.forEach(item => {})

and in this arrow function
I just console.log item

basket.forEach(item => {
	console.log(item)
})

and that looks a lot cleaner that it was before
if I run this function now

//

const basket = ['apples', 'oranges', 'grapes']

basket.forEach(item => {
	console.log(item)
})

//

'apples'
'oranges'
'grapes'

I get the same thing
we are looping
over items

and I am not gonna show you 
how to do the while loop,  
and the do while loop
because we've talk about it

but there is two other ways 
that we can learn a few things
in javascript

The first one
is called the 
for of loop
and the other one is the 
for in loop

I now the naming is a little bit confusing but stick with me


// for of
the first one the for of loop
works in a way that
is very similar to these two
for loop and forEach loop
almost if we were combining these two together
and this is a new specification
in ES6,
so this is a new feature of javascript
the way it works is...
we star with a for loop

for()

and we say:
item of basket

for(item of basket)
you see the syntax colored nicely for me
its all blue
and in  here we simply console.log item

for(item of basket) {
	console.log(item)
}

not to bad right?
We are using the 'for' keyword here
by we are saying 'of'
and we are just creating a variable
we can name it whatever we want of basket
which is our array
and that is going to loop through it
So if I copy and save this here

// for of loop

const basket = ['apples', 'oranges', 'grapes']

for(item of basket) {
	console.log(item)
}

and hit enter 
I get the exact same thing

'apples'
'oranges'
'grapes'

And as we know in programing
there is many ways of doing things
and these are just some of the ways 
that we can loop
through this array
but I wanna mention a key term here
What we are doing here is something called
'iterating'
over this array
and this wording is very confusing
at first when you first hear it
but iterating simply means 
we are able to go one by one
through an item
lets say basket
which is an array
go one by one
and look at this items
and iterating is able to be done in javascript
with what we call iterables
and these iterables
is something that javascript provides us
that says hey you can iterate
over this thing
and
what is this thing?
in javascript 
you can iterate over arrays
and we 've seen that
and also strings
instead of basket 
if I just turns it into a string
and I run the for of loop here

for(item of 'basket') {
	console.log(item)
}

'b'
'a'
's'
'k'
'e'
't'

I see that I am iterating over
the string one by one
so both arrays and strings
are iterable
in javascript
Because we are able to iterate
over individual items
and for of
allows us  to iterate
over  these iterables

I know the wording is really really confusing
but in a lot of tutorials books
and even work place
you are gonna hear this word 
and you wanna know what it means

// for in

but lets talk about the  next thing
the for in loop

The for in loop looks something like this
actually lets bring this back to the way it was
the for of loop
so no strings 
is the array
and I am going to comment out or delete
the loop that we are familiar with
just so we have a better space here

now the for in loop works
with objects
So lets create an object
in here
and we call this object detailed basket

const detailedBasket

and this detailedBasket
will be an object that contains 
apples
and actually
the quantity of apples that we want
five apples,
and we will have oranges as well
and we maybe say have ten oranges
lots of vitamin c
and  finally we have grapes and they are delicious
so a thousand grapes for everybody

const detailedBasket = { 
	apples: 5,
	oranges: 10,
	grapes: 1000
}

with this detailedBasket now 
I can use a for in loop
and I can say for item in 
instead of of this time
detailedBasket

for(item in detailedBasket)

and I can console.log here
the item

for(item in detailedBasket) {
	console.log(item)
}

So if I clear this 
lets copy detailedBasket
so thats our object
and run the for in loop here

const detailedBasket = {
	apples: 5,
	oranges: 10,
	grapes: 1000
}

for (item in detailedBasket) {
	console.log(item)
}

Notice what happens
I get apples, oranges, and grapes

'apples'
'oranges'
'grapes'

the for in loop allows us
to loop over and see 
the object properties
so that I can check 
what I need
grocery shopping for
apples, oranges, grapes

Now here is the tricky part
and you will hear this word mention a lot
when you talk to your programming friends
and it can get really really confusing
what we are doing here is not iterating
because iterating
iterating is something 
that we can do with arrays and strings

with an object in javascript
we are doing something called enumerating
because properties of an object
are what we call enumerable
and an object in javascript is enumerable
if it allows us to see the properties
so apples, oranges, and grapes are enumerable
that is we can use it in a for in loop
to check them out

So enumerating
is for objects
Now enumerable and iterable
What happens if I switch this around?
What if I have basket in here,
and the detailedBasket in here

for (item of detailedBasket) {
	console.log(item)
}

for (item in basket) {
	console.log(item)
}

so we are using a for of loop 
with an object
what do you think it will happen?
I gonna copy and paste this
enter to console
and run 

const detailedBasket = {
	apples: 5,
	oranges: 10,
	grapes: 1000
}

for (item of detailedBasket) {
	console.log(item)
}

and I get an error

TypeError: detailedBasket is not iterable

and why is that?
well, we know that. right?

in javascript we have arrays and strings
that are iterable
in objects in most of the cases
are not iterable
you see for of loop 
doesn't work with objects
because
simply the javascript language 
needs to provide
this property
that is called iterable
and this property is only given by array
and strings
and because for of
only works with iterables
its going to give us this error
but 
what about here,
what if I do a for in loop
on the basket
which is the array
if I copy and paste this
I run this code

const basket = ['apples', 'oranges', 'grapes']

for(item in basket) {
	console.log(item)
}

look at that its working

'0'
'1'
'2'

I get zero, one, two
and that is because underneath the hood
you can think of javascript arrays
like objects
right?

Because an array
has an index of zero, one and two
so you can think of basket
as an object that has
property zero equals to apples
we have oranges that has index of one
then index of two we have grapes

basket = {
	0: 'apples',
	1: 'oranges',
	2: 'grapes'
}

So the for in loop
is enumerating over the properties
zero, one and two
which list out for us

Lets make this a little smaller
but I want to make this video for you 
because a  lot of people
are confused
between these two
and although you can go a long time 
without ever using for in loops
you can use something like:

Object.keys()

that we've seen before
or 'values' or 'entries'
or we can use 
forEach loops
or for loops
instead of for of

its good to know these differences
because if you see them in a code base
you wanna understand what is happening

and also if you ever hear somebody saying
'iterable'
or
'enumerable'
you kind have an idea of the difference now

to review
a for in loop
loops over enumerable properties
and enumerable property names of an object
the for of loop
doesn't work with objects
because they are not iterable

Now there are small caveats
and exceptions
to these rules
but 99% of the time you should consider this
you are using the for in loop for objects
and the for of loop for arrays and strings

I see you in the next one
Bey bye
*/
