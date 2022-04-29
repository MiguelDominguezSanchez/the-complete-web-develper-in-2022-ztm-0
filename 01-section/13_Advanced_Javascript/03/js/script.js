/*
If there is one thing
to learn this entire time in this course
is that there is nothing static of being a web develope
improvements are constantly made all the time
in html, css and javascript
and even the browsers are constantly updated
Libraries are also constantly being created
If you remember libraries are just pieces of code
that can be css, they can be html, they can be javascript
Pieces of code written by somebody else
so that we can use it
we dont have to start from scratch

Now, its human nature to want to constantly improve
and in this video we are gonna
learn the new features
that everybody will be using
but first lets recap something about our previous videos

If you remember javascript was created by the Netscape Browser,
and every else, all the browsers
starting using javascript
so Netscape submitted javascript
to something called ECMA international
so javascript can be standardized
and javascript can say hey:
everybody use this version of javascript on the browsers
that what EcMAScript is
ECMAScript is Javascript

ECMAScript === Javascript

it is the standard way of calling it so
wen the browsers implement what javascript should do
they read javascript
well, everybody agrees on the standard

Now every time you see something like this
like ES6
and you see that quite a lot
ES6 just stands for ECMAScript6 
ECMAScript version 6

So yes there is ECMAScript version 1
all the way through 6

we are currently is versión 7 (June 2016)
we are only learning version 5 and versión 6
But version 5 and versión 6 
introduces some new features
thats are really really powerful
and make coding and javascript really really nice
and most code basics that you see, these days (2016)
will be using these features
it is a very exciting for me,
its one of my favourite parts of javascript now
and I am excited to show you some of the new features
that will make your life a whole life easier 

Now, one thing you maybe thinking of its...
Ahhh Andrei, I dont want to learn something 
that browser dont support them
and I cant actually use them
dont worry my friend
these are new features
that are supported
you know why
mainly because something called Babel
You see 
a few years ago 
programmers created Babel
developers start using javascript features
as they come
remember ecmaScript releases versions all  the time
now without having to wait for browsers
to implement this features,
Babel allows us to use it right away

How do they do that?

Lets have a look
if I go try it out here (in Babel website)
you see that Babel shows me something
I can write and we will learn the syntax 
dont worry

I can write something like this,
that is the new way way of writing javascript
ECMAScript6
//

const a = (x,z) => x+z;

// 

and it compiles into this

// Babel

var a = function a(x,z) {
	return x + z;
};

//

what does it means,
it means that
it reads a file line by line
and then changes it 
to a version of javascript
that all browsers know
and it works in all browsers
when we actually deploy
our application or website
it means putting it online
after we done with it
can use Babel to say
hey read javascript file
and transform it into this
that works on all browsers
and without thinking about it
and write all you code
and the newest and best way of writing it
you can see how clean is it
and Babel will take care of 
changing everything
so all the browsers can read it
isn't that awesome,
enough of that

Lets learn some new syntaxes
and don't be afraid ES5
makes javascript a whole life easier
and fun to write

from now on we will take 
what we learnt in this video
to write
all of our code
it is what the industry is using right now
and this is what you will get as during interviews

So lets get started,

the first feature I gonna show you
is let and cons
these arre new ways of declaring variables

// let + cons

so if you see here our section outline
you see javascript variable now
ave two new ways of declaring a new variable

and a s a matter of fact
variable that we were using upp to this point
'var'
we wont use it again
we now have something called 'let'
to show you how both of these work

lets do a small example,
I am going to say const player
and 'const' stands for constant
we say 'bobby'
and we say let experience
equals to a hundred 100
say wizard level equals to false

const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
	let wizardLevel = true;
}

So this look like variables nothing different
lets run tis trough the console
and see what happens

ok if I now check 
wizardLevel
i get false

wizardLevel
false

Uhmmm thats estrange
right
because in the previous where we talk about scope
I had wizardLevel as a variable
I would have gotten 'true' here

so if this was variable
and this was variable

const player = 'bobby';
let experience = 100;
var wizardLevel = false;

if (experience > 90) {
	var wizardLevel = true;
}

wizardLevel instead of being 'false' 
it would be 'true'
now, that's confusing
that's because is not inside of a function
this is a little bit tricky

wit variable we only 
were able to create a scope
inside of a function
but never if it had a curly braces
inside of it
with 'let'
when I say 'let' and 'let'

//

const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
	let wizardLevel = true;
}

//

now I've created a 
wizardLevel variable
inside of if
so the only way that I can access this
is inside the if
if I do 
console.log(wizardLevel)
here
and console..log(wizardLevel)
outside
but 'inside' and 'outside'

//

const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
	let wizardLevel = true;
	console.log('inside', wizardLevel);
}

console.log('outside', wizardLevel)


//

inside I get true:
inside true

outside I get false:

Because now with let
every time iis wrapped around a curly braces
well it creates
a new scope
versus with a variable
if I change this tto a variable
and I copy this again and I refresh

//

const player = 'bobby';
let experience = 100;
var wizardLevel = false;

if (experience > 90) {
	var wizardLevel = true;
	console.log('inside', wizardLevel);
}

console.log('outside', wizardLevel)

//

I get:

inside true 
outside true

because wizardLevel has already change
now a new scope has been created
inside the curly braces
because this isn't a function

I now that this is really really confusing
but the one take away from this
just dont use the variable anymore
variable is actually quite confusing
now think of let
as the new variable
so from now on we arre gonna using
let for variables

but what is const
const its even cooler

watch this if i wanna change te experience level
I can say
experience equals 80

experience = 80

and now if I look at experience
well experience equals 80

but if I change tha player 'bobby'
to a new name equals 'Sally'
well, I get an error Assignment to a constant variable

what that means
a constant you are not able to reassign
to a variable
it cannot be updated
now, why would that be useful?
it is really really useful,
because a lot of bugs
happen when you are working on a team of people
you have something like player
and somebody changes the name of the player 
wile you are working
and you still thinking its bobby
and keep getting errors
because somebody else as touched
that's a bit of an issue
by using const you make sure 
that you are using this player variable
we always have the same value
this is actually very very useful

my recommendation
is if you have anything
that isn't going to change
it should be a constant
so a function could be
a constant

const a = function() {}

because well, if 
a function or the assignment of a
isn't going to change
then we will feel a lot of safer using const
than let say, using let
because we make sure that nobody assigns something else to 'a'

So the rule from now on is
use const if you are using a variable
that doesn't change
most of the time you use this
if you are using a variable that
you reassign something to
'wizardLevel' that it changes
from false to true,
from true to false
well then use let

one thing with const that you will need to keep in mind
is that if you do

const obj = {
	player: 'bobby',
	experience: 100,
	wizardLevel: false
}

if I copy this object
and try reassign this object to let's say a number

obj = 5;

I get an error
because its a constant
but if I try and change a property

obj.wizardLevel = true

now my wizardLevel is true

Object { player: "bobby", experience: 100, wizardLevel: true }

so one thing with constant is that you can change properties
of the object still you cant reassign the variable

All right on to more fun things

// Destructuring

lets do destructuring

and this that I am gonna show you will make your life a whole life more easier

again if we actually have
an object here:

const obj = {
	player: 'bobby',
	experience: 100,
	wizardLevel: false
}

I need to grab this objects
so if I do:

const player = obj.player;
const experience = obj.experience
let wizardLevel = obj.wizardLevel;

thats a whole lot of typing to access these properties

well with destructuring
you can do this:

const { player, experience } = obj;

so with this syntax
It does the exact same thing 
that the two lines here

const player = object.player
const experience = object.experience

you just select the properties
you want from an object

const { player, experience } = obj;

and now you have:

const player
and 
const experience 
available to you
so you can use
'player'
anywhere in you want in your code base

and then for let you can do wizardLevel object

'let { wizardLevel } =  obj;'

much cleaner

const { player, experience } = obj;
let { wizardLevel } = obj;

you have to get use to it
but much nicer to look at

another cool thing you can do with objects

const name = 'john snow'

you can start a new object here:

const obj = {
	// and we cn  say now:
	[name]: "hello",
	// and we can do:
	['ray' + 'smith']: 'hihi'
}

all right,
so this is a silly object
but I want you to show you
some new ways of declaring an object properties

Now in ES6
you can have,...
instead of having
just
	player
	experience
	wizardLevel

we can have something dynamic
that we can assign
like 'john snow'
or we can do:
'['ray' + 'smith']'
or we can do:
'[1 + 2]'
and have these dynamic property values
let me show you how they work

//

const name = 'john snow';

const obj = {
	[name]: 'hello',
	[1 + 2]: 'hihi'
}

// If I access object now

obj

⁄⁄ I have:

Object { 3: "hihi", "john snow": "hello" }

//

again new ways of declaring properties
very useful if you need to calculate something
for the property value

even cooler is
been able to do something like this
imagine you have:

const a = "Simon"
const b = true
const c = {//empty object}

and if we wanna to add this to an object
we would have to do:

const obj = { 
	a: a,
	b: b,
	c: c
}

and sometimes you wanna the property to match the value

again wit the new javascript
if property and value are the same
in that case 
we say:

const obj = { 
	a,
	b,
	c
}

so we can remove the declaration
that we have with property and value
if they are the same just keep it like this

and then this is something 
that when we get to the react section
its gonna become very very useful

Again something even more fun
and tis time is template strings

// Template Strings

remember when we have 
lets say greeting
ow annoying it was that we have to do:

const greeting = "Hello " + name + " you seem to be doing "  + greeting + "!"

and then lets say you have an exclamation mark
and then you have to make sure to add a backslash
"you\'s"
if you have to add an apostrofe
that was really tedious
and annoying

now you need something really fun
instead of doing it this way

we can have:
something called template strings
``
and these are back ticks
so the back ticks are right above the tab key if you have a mac
instead of using double quotes
this means template strings
``
and now we can do double quotes or single quotes
`""'''`
anywhere you want and it will be a string
but even cooler

const greetingBest = ``

if you have:

const name = "Sally"
const age = 34
const pet = "horse"

we can do: 

const greetingBest = `Hello ${name} you see to be ${age-10}. What a lovely ${pet} you have.`;

So notice what you have here

and I am copy this so just we have it
and comment this out(old way string)

no if we look into the console

you see that now instead of doing all that double quotes
an plu and worrying about space
within these back ticks
we say a piece of string
amd then add dynamically
by using the dollar sign
then the curly brackets 
the value that we want
we can again do
any sort of expression
so ${age-10}
what a lovely pet you have
lets see what happens
if I do:
greetingBest
"Hello Sally you see to be 24. What a lovely horse you have."

very cool so this is very very useful
we will definitely using this later on in the course

another thing I gonna show you is default argument

// Default Argument

you can do something like: 
function greet(name='//empty string', age=30, pet='cat')

let just copy
what we have before
with the greeting
and we will return this

function greet(name='', age=30, pet='cat') {
	return `Hello ${name} you see to be ${age-10}. What a lovely ${pet} you have.`;
}

nothing has change 
we just have a function that is returning a greeting
the only thing that is new is this (default arguments)

let me show what it does
if I comment this out,
I copy this into the console
and now I run greet

greet()
"Hello  you see to be 20. What a lovely cat you have."

did you catch that
even though a browser
and let me just refresh
so you know for sure
our browser has no idea
what age or pet is
but if I run tis function

because of the way I run the parameters
I give them default arguments
which is if I dont provide a value for name
which we haven't
I haven't given any arguments
well the name make empty string 
make age thirty
and make pet cat
if I do now greet john age 50, and pet monkey

greet('john', 50, 'monkey')

greet('john', 50, 'monkey')
"Hello john you see to be 40. What a lovely monkey you have."

this(name='// empty string')
gets ignored because I passed parameters
but otherwise I can pass a default parameter
so that when somebody
call this function
and we dont provide these arguments
my function wont fail
well because we have default arguments
very cool

what else do we have
lets refresh here
if you remember
we have one more type to do
javascript types
and that is a symbol
is actually that I use very often
but I want you to show you
because well its a type
that we wanna complete the seven types of javascript

// Symbol
and a symbol is special
because...
I create a symbol doing this syntax

var sym1 = Symbol();

and I can have a second symbol

var sym2 = Symbol('foo')
and
var sum3 = Symbol('foo')

if I copy this

var sym1 = Symbol()
var sym2 = Symbol('foo')
var sym3 = Symbol('foo')

and I access 

sym1

I get

Symbol()

I access 

sym2

I get

Symbol("foo")


I access 

sym3

I get

Symbol("foo")

But the unique thing
that if I do: 

sym2 === sym3

I get: 

false

Even though  the look they are the exact same thing
And symbols are used because they create this completely
unique type
So you can make sure that there is never going to be any conflict
and the symbol value is used as identifier
mostly for object properties
pretty much the only purpose of that
because sometimes 
you dont wanna an object property
if you have thousands of them
to collide and be the same ones
because they get bugs
You wont see it to much in the course
out in the wild too much 
but I wanna to show it to you regardless
because, well you wanna know
all the javascript types

All right one last one
I know we have cover a lot
but this is the best one
that is arrow functions

// Arrow Functions

Up to this point
if you wanted to do something like:

function add(a, b) {
	return a + b;
}

and you might have gone sick and tired
of constantly writing functions over and over and over

well now you have arrow functions
with arrow functions you can do:

const add = (a, b) => a + b;

look at that,
any time you look at this syntax
is the same thing as this function

function add(a, b) {
	return a + b
}

but now this is the short hand form
so that you dont have
constantly write function
and the beauty of it is that 
you could have done return a + b

const add = (a, b) => {
	return a + b;
}

and that completely works
so the only difference is that
we have a function expression
that accepts a parameter

const add = (a, b)

and we have this fat arrow

=>

but with an arrow function
if you have a single return
you can just put it on one line

const add = (a, b) => a + b;

and it assumes
that you want to return this

if I save this
and copy here

function add(a, b) {
	return a + b;
}

const add2 = (a, b) => a + b;

add(4,2)
6

thats the first function
and the new way
with the arrow function

add2(4,2)
6

again I get the same thing,
it returns automatically
because everything is on one line

it looks very very nice,
a lot easier
than the above

and there you have it
I know there was a lot of information
make sure that you  do the exercises
to get yourself familiar with the syntax
its just new ways of doing things
this is gonna help you to write better cleaner code
and just  to show you what we have cover

you manage to finish everything
in the section outline

from variables to conditionals to finally
the arrow function
we've cover everything that we wanted to
for javascript
and moving forward we are gonna be using these newer syntaxes to write our code
I hope you are excited as I am
to start using this
I see you in the next one
bye bye

*/
