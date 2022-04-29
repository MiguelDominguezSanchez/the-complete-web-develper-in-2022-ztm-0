/*
Welcome back
Now what you'll learn in the next few videos
is quite advanced
it does take some time to really grasp the concept
and understand them
and the best way to do it is
to do it yourself

Use these videos
as a reference to come back to
when you have questions

I am going to cover the main topics
that you see out in the wild
you can come back and reference tese videos
when you have questions
and in this video we are gonna tackle advanced functions

Now I have a sample function for you here
knowing what we learnt about the new javascript syntax

We are gonna convert tis first to what we should write Modern Javascript


function first() {
  var greet = 'Hi';
  function second() {
    alert(greet)
  }
  return second
}

var newFunc = first();
newFunc()


function word is gone now,
you can say
const first =
arrow function
and this arrow function has a greet
which can be a constant
a function which again can be a constant second
and finally this can be a const as well

const first = () => {
  const greet = 'Hi';
  const second = () => {
    alert(greet);
  }
  return second;
}

const newFunc = first()
newFunc()

we also learnt about scope
an important property of function is
that the variables created inside of them
including the parameters
are local to the function
that means that every time you run 
the first function
this block of code is executed
and the greet variable is executed every time

Now this is actually good for us because 
we make sure that
if our program
every time run first
remember the greet
well it have conflicts
because
its a constant
and we are constantly reassign the same thing
to a variable
that already exists

So this way within a function
we make sure that every time we run it
its a clean slate
you can name the variables
because there is nothing else that will collide it

Like I said
this behavior
helps prevent accidental interference
between functions
and as developers we want to
minimize to the number of bugs or errors
that are in our code

If all variables were shared by the whole program
It take a lot of effort to make sure
no name is ever use for two different purposes

Imagine if greet was in another function
and we have no idea
and we cant use it
well luckily 
by having
our separate scope
we are able to make sure
we can use greet
without having to check the entire code base

Now by treating functions local variables 
as existing all in  within the function
our language makes it possible to read
and understand functions
as small universes
where whatever happens to that universe
only matters to itself

But I also want to demonstrate 
an interesting concept
with javascript
that is closures
you can think of it as this

// Closures

A function runs
the function executed
now its never gonna be executed again
kind of like the first function
which is executed right here

const newFunc = first()

and the result we put into a new function
its going to remember that there are references
to those variables are live in the memory first

However we see a problem here

when we load up this program
on a website

const first = () => {
  const greet = 'Hi';
  const second = () => {
    alert(greet);
  }
  return second;
}

const newFunc = first()
newFunc()

the javascript engine will see this
and say ok
we have a variable first that's a function
and then in the next line
well we wanna assign 
oh
we wanna assign a variable newFunc
and we wanna get the result of first()

const newFunc = first()

so the program run first
sees that we wanna create a constant greet hi
and we also see that 
we have another function called second
and we are returning that function
but there is a problem here. right?
'second' needs to remember what 'greet' is
although 'first'
runs and return 'second'

so you think of this
once we do this
we will only have the second function

//

//

//

//




const newFunc = const second = () => {
  alert(greet)
}
newFunc()

I now this looks confusing but just look at the highlighted here
thats why called first means

but you see over here that the greet variable
second doesn't ...
well it is not within the scope of second

What closure does and that is a rule in javascript
is that
the child scope
always has access
to the parent scope
so it is almost as if it remembers
it always remembers that there is a reference
to those variable alive
inside the web browser
the web browser said
this second function needs 'greet'
so I am going to remember
I am going to remember that for you

const first = () => {
  const greet = 'Hi';
  const second = () => {
    alert(greet);
  }
  return second;
}

const newFunc = first();
newFunc();

I am going to copy this into the console,
now I have new function
if I run 
'newFunction()'
I get:

'Hi'

Even though first its never gonna be run again
the only thing that we have left is the second function
the web browser remembers 'greet'

again this is confusing concept
when you hear it from the first time

but like I said just remember

// Closures is saying:

- a function ran.
- the function executed.
- its never going to be executed again
- BUT its going to remember that there are references to those variables
- so the child scope always have access to the parent scope

Now you maybe wondering
if I did here

const name = 'bobby'

const first = () => {
  const greet = 'Hi';
  const second = () => {
    const name = 'bobby'
    alert(greet)
  }
  return second;
}

const newFunc = first()
newFunc()

will the first function have access to 'bobby'
no it would,
so think of it this way

Children always have access to their parents
but parent scope they dont have access to their children

OPk  lets get into a few more things

next we are gonna talk about currying

// Currying

Currying is the process of converting a function
that takes multiple arguments
into a function that takes them one at a time
let see what I mean

we have a function here that we call it 'multiply'
and 'multiply' accepts two parameters

const multiply = (a, b)

and again we are using our new function syntax
we say:

=> a * b;

//

const multiply = (a, b) => a * b

now currying means
where are changing this function 
to accept one parameter at a time
so that means we do 'curriedMultiply'

// Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;

oh oh oh
what do we just do 
and again this looks very confusing
but think of these arrows
as functions
so right now if I do:

curriedMultiply(3)

well lets see this in action
what happens

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)

//

I get a function that accepts 'b' multiply 'a'

(b) => a * b

//

So by running this 
is saying that a is 3
and now we know that when we multiply
'a' is '3'

const multiply = (a, b) => a * b;
const curriedMultiply = (3) => (b) => a * b;
curriedMultiply(3)

and now we know that
when we multiply 'a' is '3'

const multiply = (a,  b) => a * b;
const curriedMultiply = (3) => (b) => 3 * b;
curriedMultiply(3)

and because this have a function in another function
'const curriedMultiply = (3) => (b) => 3 * b;'
this 
'curriedMultiply(3)'
just return this part
'(b) => 3 * b;'
so it returns a function as you can see here
So now in order to make this work
in order to make it work
we have to say 
'curriedMultiply(3)(4)'

and I get:

12

If we look at this function:

'curriedMultiply(3)(4)'

compare to here:

'const curriedMultiply = (a) => (b) => a * b;'

we see exactly what we did
we created a variable
'curriedMultiply'

const curriedMultiply =

that accepts a parameter
so its a function that accepts '(a)' 

const curriedMultiply = (a)

in this case its '3'
and once you call that function

=>

const curriedMultiply = (a) =>

it returns another function
that accepts '(b)'

(b) => 

const curriedMultiply = (a) => (b) =>

and that function multiplies 'a' and 'b'

a * b;

const curriedMultiply = (a) => (b) => a * b;

So what I am doing here is saying
curriedMultiply
'a' is '3'
curriedMultiply(3)
'b' is '4'
curriedMultiply(3)(4)
and now multiply 'a' times 'b' 

as you can see the 
as I said about currying
its the process of converting a function
that takes multiple arguments
like I said
into a function
that converts them one at a time

Now, Why do we even need to do this?
because now is more extensible
I can  do something like:

const multiplyBy5 = curriedMultiply(5)

so any time I want to multiply by 5
I can just say:
copy this

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5)

now every time I want to multiply a number by 5

multiplyBy5(5)

multiplyBy5(5)
25

multiplyBy5(10)

multiplyBy5(10)
50

multiplyBy5(11)

multiplyBy5(11)
55

and now I have this function 
that always
multiply things by 5
which is very cool

All right
we are get into one more thing
and then I promise
I will make your head stop hurting
its called 'compose'

// Compose

Compose is the act of putting two function together
to form a third function
where the output of one function
is the input of the other
even me saying
what I did just said
a compose looks like this

const compose = (f, g)

parameters 'f' and 'g'
return a function
that takes parameter 'a'

const compose = (f, g) => (a)

that returns a function that
has this

const compose = (f, g) => (a) => f(g(a))

Holy Moly
if you look this and have no idea 
about whats going on
this is something that takes years for some to get
its really really advanced topic
if you are able to understand the inner workings of this
you can pretty much do anything

let's give it a go

What is happening here?

const compose = (f, g) => (a) f(g(a));=

well
it looks like looking at 'f' and 'g'
it looks like 
'f' is a function
because well we have the brackets
it even highlights it in blue for you

f(g(a))

'g' is also a function

g(a)

if I have a 'sum'
const sum
that let say it takes a number
const sum = (num)
and just add 1
const sum = (num) => num + 1;

what we can do with compose
is I can say compose
compose()
again we have the function here

const compose = (f, g) => (a) => f(g(a))

const sum = (num) => num + 1;

compose(sum, sum)

so both 'f' and 'g' are sum
and now because it takes another bracket I can say 5

compose(sum, sum)(5)

so lets run this 
and then we can go step by step
to show you what it does

// Compose
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5)

I get:

7

So, Why is that? 
lets take a look one by one
if both 'f' and 'g' are sum
and 'a' is '5'

compose (sum, sum)(5)

we look at what the function returns
f(g(a))
because, again, 
we have two brackets 
(sum, sum)
we are executing
the first part of the function
which returns us another function
which is this
(a) => f(g(a))
and within it we get the 'a' '5'
and when this function runs it says:
'a' is '5'
f(g(5))
and then lets run the inner function 'g'
g(5)
in this case is sum
(sum(5))
if you remember sum
sum is just saying give me 5 and then + 1
const sum = (num) => num + 1
so now this 
f(sum(5))
changes to '6'
f(6)
and finally the 'f' function runs
which again 'sum'
compose(sum,)
in this says 'sum' is giving me '6'
const sum = (num) => num + 1;
const sum = (6) =>  + 1;
is '7'
and this whole thing returns '7'
const compose = (f, g) => (a) => f(7)

Ouh right that was a 
whole ton of stuff
but I want you to remember
this three keywords,
because
when you get to advance javascript
function are really really important

you will hear words like
closures
currying
compose
a lot and you will find tools
and libraries that use these
heavily

Now you dont need to know thee definition them
you just be able to read a piece of code
and understand what is going on
that is why  i like to show all of this
although it's really advanced
and
its very hard to grasp
by understanding this
step by step
process of how a function works
this is really useful
because now if you encounter this in  the wild
you understand how everything works

Now to finish off this function section
I am going to tell you  the most important
that you can do as a web developer
when creating code
and that is the idea of 

// Avoiding Side Effects, and Functional Purity.

What does that mean?

let's go back to my diagram here
remember this from the first part
wwe said:

an input is
well we give a function
of some sort
it can be empty input or have parameters like (5, 10)
a function does something that we defined
it has its own scope
it creates its own universe
it can have console.log()
it can do a bunch of stuff
and them it ask ...
Am I returning anything?
so you can return
a value 
or if it doesn't return anything
it just does undefined

Now the two words
that I just said
Side Effects
and
Functional Purity

Well Side Effects
are any of these things
any actions
that happen inside of the function
that we dont know anything about
if it interacts
or reads or writes
to an external variable for example 
or console.logs
well thats a side effect
if we change in here a variable 1
var a = 1;
and then I have a function that changes 'a'
var a = 1
function b() {
  a = 2
}

well that is a side effect
that is something that 
the function is doing 
to affect the outside world

remember we wanna think of functions as its own universe
and if it starts affecting the outside world
I mean its not the end of the world
we have done console.log before
we have done this before
but it is good practice 
to avoid these side effects
by avoiding these side effects
we have something called
function purity
and functional purity
its a concept that we say
in order for us to write 
really really good programs
we wanna avoid
side effects
and we always wanna
return
so that this and this gone
we always return something
and what is the power of this?
by avoiding side effects
and always returning
we create something
that we call 'deterministic'
and 'deterministic'
is a word that you might ave heard
it means that, no matter what
if my inputs let say (5, 10)
go this function
this little universe
the current value will be always the same

Let me say it again
the input whatever we put in the parameters
whether it empty or it has certain parameters
it always returns  
if we run this a thousand times
it always returns the same value
thats determinism
its a very important concept
and thats a key principal to avoid 
bugs
because if this function always does the same thing
then you know exactly what it does
and we wont have random errors popping up
here and there
thats what I wanna leave you with

Although this is not the law
and you will find code basics
that will have a lot of side effects
there is gonna be a lot
things happening inside function
that maybe even affect
variables that lives inside of the function
it is a really really good practice
be a top performing developer
to have this in mind
of creating functions
that minimized side effects
and have functional purity
what we call determinism
where anything that you put into the function
always returns the same thing

all right
that's it for now
go and try out some exercises
I will see you in these next one bye bye

*/
