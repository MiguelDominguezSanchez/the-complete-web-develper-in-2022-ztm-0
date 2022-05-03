/*
Welcome back,
we are gonna talk about 
some advanced object concepts

Now as I said wit both,
arrays and functions
these are advanced concepts
you are probably not gonna get it 
a hundred percent
the first time around
but use these videos 
as a reference to come back
as you progress through career

Now in this video
I am gonna talk about
three things tat are important with objects
we are gonna talk about
'reference type'
we are gonna tal about 
'context'
and finally we are gonna talk about 
'instantiation'

// reference type
// context
// instantiation

So lets get started with the first one

// reference type
What I mean when I say reference type?
Well I want you to see
if you can guess whats gonna happen
when I do:
array equals array
[] === []
what do you think the answer its gonna be?
lets see ... 

[] === [] // false

interesting
ok 
what if I do:
array one equals array one
[1] === [1] // false

ok 
what about something like this?
object one equals value of ten

var object1 = { value: 10 } 

and we say object two equals object one

var object2 = object1;

and we finally say object three equals value ten

var object3 = { value: 10 }

So looking at these
and I am actually
copy it on here
so you can see it as well
looking at these 
What happens if I do object one equals object two

object1 === object2

What do you think it will happen?

//

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 }

object1 === object2 // true

ok that makes sense I mean
object two is object one
'var object2 = object1'
but 
what if I do ... ? 

object1 === object3 // false

Here I get false
but Why is that?
We have value 10 
'var object1 = { value: 10 }'
value 10
'var object3 = { value: 10 }'
they are both the same thing, 
right?

Let's check something else

What if I do ...?

'object1.value = 15' // 15

and now I do

'object2.value' // 15

it equals five-teen
but now if I do

'object3.value' // 10

I get ten

Oh that was confusing right?
Lets look at what is actually going on?

And this is the first topic 
we are talking about
which is 'reference type'

Let's look at the diagram

objects are what's called reference type in javascript
up until this point
all the other javascript types that we've learnt
including numbers, null,
we have undefined, booleans, strings
even symbols
they are defined by the programming language
So javascript, the person who wrote javascript and ECMAscript the standard
says:

these are primitive types:
- number 1,2,3...
- null
- boolean - true,false
- strings - "hello"
- undefined 

we tell you what they are

Now a reference type,
which is a non-primitive type
are not defined by the programming language 
what does means is that
they are created by the programmer

so lets look over here
as an example

When I say:

'var number1 = 1'

Javascript knows what '1' is
it is a number
it is a primitive type
it is always the same thing
it is inmutable
every time it uses the '1'
that's the same '1'
that javascript knows about it

when I do:

'var number2 = 1'

yep
its using the same number '1' 
that javascript knows about it

However
when we created

'
var object1 = { value:10 };
var object2 = object1;
var object3 = { value: 10 }
'

Well those are created by the programmer,
they are 
'reference type'

What we say was
I want 'object1'
create a new object
lets say this box over here
this falling cabinet
and in it put value 10
into this box

object2 says:
I want you to just 'reference'
'var object2'
its where the word comes from
reference 'object1'
saying I want you whatever is inside this box

When object three is created

'var object3 = { value: 10 }'

its a new object 
because we have the new brackets
and it is saying put value '10' in this box

Essentially what we are doing is
saying, 
when we create

'var object1 = { value: 10 }'

we are storing just a reference,
an address to where are we storing value '10'
which is 'Box 1'

So we are just saying 
'object1'
I am just letting you know that this is the address
of all the contents that all the contents that you want
and thats on 'Box1'

'object2'
is saying:
I want whatever is in 'object1'
and we look in 'object1'
and 'object1'
just have the information of 'Box1'
So it references that
and 'object3'
creates a new object
so it saying:
I am gonna put my own content in 'Box3'
and I am gonna just have the address of the box
saying 'Box3'
its right over here

So going back to the example
this makes sense

if we change 'object1.value' to '15'

object1.value = 15;

we change the content of 'Box1'
so when we do' object2.value'
just referencing the same box as 'object1'
that's fifteen '15'
but 'object3'
that value doesn't change
because that's in a completely different box
its in 'Box3'

and going back to the first example
arrays

[] === []

well, as I mention in previous videos
arrays are just objects
at the end of the day

So when we create an array
its the same thing 
creating a box
a data structure (referring to the  first array)
[] === 
and this (referring to the second array)
[] === []
is creating a second data structure

So thats reference type

a very important concept
but I think
I think you get it
lets get to the next one,
lets get a little trickier

this one is called 'context'

'context'

and 'context' gets confused a lot with 'scope'
if you remember
we said that scope is created
when it sees curly brackets

// context vs scope

we say that if we create a function

// function() {
//   // as soon as we create a function
//   // there is a new scope that's created
//   // and we can have:
//   // let a = a;
//   // and that lives within this universe
//   // it doesn't know anything about the root scope
//   // which is over here
//   // so we console.log(a)
//   // well its not gonna work
//   // we have actually to assign something
//   let a = 4;
// }

and we need to name it,
so lets tto say 'b'

function b() {
  let a = 4;
}

So if I do this:

console.log(a) 

will return
ReferenceError

console.log(a) //  in the root scope
Uncaught ReferenceError: a is not defined

because it doesn't exist

So that's scope

Now how is context different?
Context tells you where we are
within the object
let me explain
if we say

console.log(this)

well you see I get some highlighted
and this is the first time we see this
and this is a special word in javascript
probably the most confusing word that
a lot of people have trouble in
Even people tat have been in the industry for years
still have a difficult time with this

Lets see what it is

Window {window: Window, self: Window, document: document, name: '', location: Location, …}

'this' is as you can see the 'window' object

So just to doublecheck
if I do: 
console.log(this === window) // true

I get:
true

and I can access this.alert("hello")
So what 'this' means is
what is the object environment that we are in now

The best way to think about it
is what is to the left of the dot
So right now I am able to do alert
because its inside the window object
so doing 'window' or doing 'this'
its the same thing

'window.alert'

'this.alert'

Now, why its that important?
when we get instantiation
I'll show you why it is
but it is a very important concept
again and again
this refers to wat object its inside of
two more examples to demonstrate

one is if do:

function a() {
  // within function a
  // we will say:
  console.log(this)
}

so if I call a what do you think It will happen

a()

Window {window: Window, self: Window, document: document, name: '', location: Location, …}

still the window object
'this'
still refers to the function

and if you remember thats because
it has to be what object we are inside of right now

technically function a()
I can go

window.a()

and run the function

so to the left of the dot
well thats the window

in order to create a new value for this
you have to do something
like this

const object4 = {
  ⁄⁄  a function a
  a: function() {
    // I do:
    console.log(this)
  }
}

well in that case 
if I copy this
run object4.a()

Well now

const object4 = {
    a: function(){
        console.log(this)
    }
}
undefined
object4.a()
VM1739:3 {a: ƒ}

this is the object
which is object 4

So why is that important to us?

First of all 
you will see it
in other code basics
so its good to now

but its really important when we do instantiation

instantiation is when you make a copy of an object
and reuse the code

imagine you are building a big multiplayer game online
this game is gonna have many many players
you can have wizards
you can have trolls, warlocks, elfs

Now if we have to create an object 
for every single player
thats a lot of repeated code
thats a lot of hussle
thats a lot of your time
and thats not really efficient

to solve that you can do something called 'instantiation'

// instantiation

you are making instances
or multiple copies
of an object
so let me show how we do
instantiation
in javascript

again, this is gonna look a little bit weird
at first 
just like for loops did,
just like functions did at the beginning
but it is just a syntax
and you will get used to it

So lets say we have a player class

// Instantiation
class Player
Now you see the new syntax already
and I capitalize a class
Now think of a class as something
that I wanna make a copy of
if I ever wanna make a copy of an object
its a good idea to do something like this
so that, well you will see
how easy it is to copy this now

So we do:
class Player {
  // and within here we say constructor
  // and I now this is weird 
  // but its just syntax
  constructor(
    // lets give it  ...
    // this player can have a 'name' and a 'type'
    name, type
  ) {
    // and within the constructor
    this.name = name
    // and 
    this..type = type
    // oh boy
  // what just happens here:
  //
  // constructor 
  // when you create a class
  // a Player class, it says
  // Every time I am making a copy of Player
  // the first thing that gets run is the 'constructor' function
  // and the constructor function 
  // is gonna create this properties 
  // on the player object
  // so 'name' and a 'type'
  }
  // and now I can create anything 
  // that I want for the player
  // Lets say we wanna create a method 
  // such as introduce
  introduce() {
    // that console.log
    // with backticks
    // and again we remember this syntax
    // template strings
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    // awesome
  }
  // Now I am saying:
  // this player class
  // any player that I create 
  // will always be able to introduce himself
  // and they also has: 
  // this.name
  //and 
  // this.player
  //
  // ANd the reason 
  // why we use 'this' here
  // is that when we create a player
  // we can access the name and type property
  // I show how that works
  // but tis is just a syntax
  // you gonna get used to it
  // in order to access
  // te player and make copies of it
  // you have to run a constructor
  // 
  // constructor(name, type) {
    // this.name = name
    // tis.type = type
  }
  // 
  // which is
  // all the properties and methods
  // that you want the player to have
  // you can also create methods
  // that players can have
  //
  // introduce() {
    // console.log(`Hi I am ${this.name}, I 'm a ${this.type}`)
    // 
  }
  //
  // and any type you wanna access a property
  // within the constructor
  // well, use 'this.name'
  // if I want to use 'introduce'
  // I have to do 'this.introduce'
  //
}
ok, so we have a player
when we are building a multiplayer game
we wanna now copy this
but add on to it (referring to the class)

Lets say we have a wizard Player
a player that is a wizard

In that case we do:

'class Wizard'

again capital letter
'class Wizard extends'
and again
'extends' is just a javascript keyword
'Player'

'class Wizard extends Player {}'

So what is that saying?
It is saying:
I want 'Wizard' to 'extends'
whatever 'Player' has
I wanna add on top on whatever 'Player' has

class Wizard extends Player {
// Again and because its a class
// we have to do a constructor:
// 
constructor(
  // and this wizard is gonna accept 'name' and 'type'
  name, type) {
    // 
// and within here
// this is the tricky part
// any time we 'extends' something
// we need also call 
// the 'constructor' function of the 'Player'
// we need to do something called 'super'
// with the 'properties'
// that we wanna pass to the 'constructor'
// in  this case 'name' and 'type'
// 
super(name, type)
//  I now this is confusing
// it is something that you have to do:
// whenever you 'extends' a class
// you wanna make use 'super'
// so that 
// you essentially have access to 'this'
// 
// ok, lets say that with the 'Wizard'
// we also want to have a 'play' function
play() {
  // and the 'play' function
  // just console.log(`WEEE I0m a ${this.type}`)
  console.log(`WEEE I'm a ${this.type}`)
  // 
  // and now that we have our 'Wizard'
  // 
  // Whats the power?
  // What is the reason that we just do this?
  // (referring to the class instantiation)
  // 
}
}
}

No we can do this
instead of constantly creating players
and saying that they are wizards
and they can play
now

I can say :

wizard1 equals 'new' Wizard()

'const wizard1 = new Wizard()'

and the fist wizard
and again we get 'name' and 'type'
so we will say:
'Shelly'
and she will be a healer 'Healer'

'const wizard1 = new wizard('Shelly', 'Healer')'

and if I wanna create a new wizard
I just say wizard2 equals wizard 'Shawn' and he is 'Dark Magic'

const wizard1 = new wizard('Shelly', 'Healer');
const wizard2 = new wizard('Shawn', 'Dark Magic')

ohh that was a lot
of new syntax

Lets go through it and make sure we understand

As we've learnt
let so console.log
to fully understand what we are doing:
I am gonna add a console.log
right at the top over here (within the class Player)
and we say 'this'
What is this?

Lets copy it ... into the browser

// instantiation
class Player{
  constructor(name, type) {
    console.log(this)
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type)
  }
  play() {
    console.log(`WEEE  I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard('Shelly', 'Healer')
const wizard2 = new Wizard('Shawn', 'Dark Magic')

//

and see what the console give us:

Wizard {}name: "Shelly"type: "Healer"[[Prototype]]: Player

Wizard {}name: "Shawn"type: "Dark Magic"[[Prototype]]: Player


We see that we get wizard

Let's go through everything

class Player {
  constructor(name, type) {
    console.log(this)
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I'm ${this.name}, I'm {this.type}`)
  } 
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type)
  }
  play() {
    console.lof(`WEEE I'm a ${this.type}`)
  }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic')

I say we have a 'class Player'
then a 'class Wizard' that 'extends Player'
and then we have two variables that we create
'wizard1' and 'wizard2'
the program is gonna see the 'new' keyword
and any time it sees the 'new' keyword
oh we are creating a new 'Wizard'
and this Wizard is going to have two parameters
'Shelly' and 'Healer'
the 'Wizard' class
because it has this 'new' word
it goes to the 'Wizard' class
hey Wizard
I want you to 'extends Player'
so its gonna go to the 'constructor'
and its gonna see this 'super'
and what it does is:
it take us up to the constructor of the Player
and it runs this:

constructor(name, type) {
  console.log(name, type) {
    this.name = name;
    this.type = type;
  }
}

and now it attaches 'this'
as the 'Wizard'
and then it introduces the new 'introduce()' function
and then adds the 'play()' function

Now if I go to
'wizard1'
and I say 'play()'

'wizard1.play()'

again WEEE I'm a Healer

wizard1.play()
WEEE  I'm a Healer

But I also have access to 
'wizard1.introduce()'

wizard1.introduce()
Hi I am Shelly, I'm a Healer

and we also have access to 
'wizard2'

wizard2.introduce()
Hi I am Shawn, I'm a Dark Magic

that sentence does not make sense john
but thats ok for now

Lets try something
if I do:
console.log('wizard', this)
and here we say:
console.log('player', this)
so we can distinguish between them

and we only gonna copy
first wizard1 
so that we dont get two of these running
again because we are creating two wizards
we are gonna have run this(instantiation example) twice

just for ourselves we will run 'Shelly'

//

class Player {
  constructor(name, type) {
    console.log('player', this)
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I'm ${this.name}, I'm a ${this.type}`)
  }
}

class Wizard extends Player {
  constructor(name, type) {
    console.log('Wizard', this)
    super(name, type)
  }
  play() {
    console.log(`WEEE, I'm a ${this.type}`)
  }
}

const wizard1 = new Wizard('Shelly', 'Healer');
// const wizard2 = new Wizard('Shawn', 'Dark Magic')

//

so I am gonna refresh and run 

VM53:14 Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    at new Wizard (<anonymous>:14:13)
    at <anonymous>:22:17

What that is saying is that
in order for me to access 'this'
console.log('wizard', this)
and get 'this.type'
console.log(`WEEE I'm a ${this.type}`)
I have to call 'super'
which runs a constructor function in 'Player'

So thats what 'super' is doing
it sounds kind of weird
but it is something what you need
I am gonna put this
at the bottom
after we call 'super'

constructor(name, type){
  super(name, type)
  console.log('wizard', this)
}

and now it should work
let's see

//

class Player {
  constructor(name, type) {
    console.log('player', this)
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I'm ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type)
    console.log('wizard', this) // 'this' after call super
  }
  play() {
    console.log(`WEEE I'm a ${this.type}`)
  }
}

const wizard1 = new Wizard('Shelly', 'Healer')



//

player Wizard {}name: "Shelly"type: "Healer"[[Prototype]]: 
Player
wizard Wizard {name: 'Shelly', type: 'Healer'}

//


class Player {
  constructor(name, type) {
    console.log('player', this)
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I'm ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player { 
  constructor(name, type) {
    super(name, type)
    console.log('wizard', this) // I get the first player wizard
    // so we call 'super'
    //
    //
    //
    //
  }
  play() {
    console.log(`WEEE I'm a ${this.type}`)
  }
}

const wizard1 = new Wizard('Shelly', 'Healer') 
// as soon as we say the 'new Wizard' 'Shelly' 'Healer'

class Wizard extends Player {
  // I go to the Wizard extends Player
  constructor(name, type) {
    // I run the constructor function
    // which says 'super'
    super(name, type)
    // hey, run the constructor function in the Player
    constructor(name, type) {
      // I run that
      // and thats where we log console.log('player', this) first
      console.log('player', this)
      this.name = name;
      this.type = type;
    }
    // 
    // and then we go to :
    console.log('wizard', this) // in the Wizard class function
    // 
    // and then run the rest of the class
    // very cool
  }
}

Now, just to show you something
this is actually new syntax
that you we'll see in react
it was part of ES6
but, back in the day
this is how we used to do it

the exact same code I have
up there
is right here

it is called Classical Inheritance

// Classical Inheritance
var Player = function(name, type) {
  this.name = name;
  this.type = type;
}

Player.prototype.introduce = function() {
  console.log('Hi I am ${this.name}, I'm a ${this.type}')
}

var wizard1 = new Player('Shelly', 'healer');
var wizard2 = new Player('Shawn', 'dark magic');

wizard1.play = function() {
  console.log(`WEEE I'm a ${this.type}`);
}

wizard2.play = function() {
  console.log(`WEEE I'm a ${this.type}`)
}

//

it doesn't look too too bad
but you see there is 'prototype'
which is another thing that you see
in javascript
and to be honest with you
you shouldn't really use it
it doesn't look very nice
and you see that we ha ve to attach 'play'
to both wizard1 and wizard2
and it doesn't looks as nice
as the 'class instantiation'

And once you get used to it
its not to bad

all we are saying is
as soon as we say 'class'
we say :
hey, I wanna make a copy
of this object 
so we wanna make copies of 'Player'
we wanna make copies of 'Wizard'
and thats called 'instantiation'

when I do the 'new' keyword

const wizard1 = new Wizard('Shelly', 'Healer')

I say make an instance of 'Wizard'
and 'Wizard' uses some functionality
from the 'Player'
and adds its own little 'play()' function as well

Holy molly
thats is a lot

This is something that you have to comeback to
and you wont get it right away

Its really really hard
to fully  understand the topic
without actually having to use it
in real life

just keep this in mind

every time 
you hear somebody talks about
'reference type'
or 
'context'
or even
'scope'
or instantiating something
'instantiation'

well, these are the things they are talking about
objects are really really complicated
they are really hard 
but
with that it gives a lot of power

So with that 
good luck with the exercises

I will see you in the next one









 */
