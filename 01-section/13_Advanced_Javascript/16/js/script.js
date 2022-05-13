/*
How does javascript actually work?
Imagine getting this question during an interview.
and how about this?
Explain the difference 
between asynchronous and synchronous
javascript

Or maybe they ask you to explain the statements
javascript iis a single threated language
that can be non-blocking

Oh boy
we are going to help you to answer those questions
This is a video you need to visit a few times

as you progress to really get it
so dont feel discouraged 
if dont feel a 100% confident

so just keep watching it and you'll get it

you dont need to know
how javascript works internally 
to write a program

but it is important to learn
I have seen people 
how have been developers for years 
and dont know this

it is like being a pilot and not know 
how a  plane can fly
ok, that is a little bit dramatic
but you get my point

So, lets start

first:
what is a program?
- allocate memory
- parse and execute

well a program
has to do
some simple things

it has to allocate memory
otherwise we wouldn't be able to
have variables or a file in our computer

it also has to parse and execute scripts
which means read and write commands

Now we also know that
from our previous discussion
there is the javascript engine
that each browser implements 
and chrome its the v8

and the v8 engine
reads the javascript that we write
and change this
into machine executable instructions
for the browser
Now the engine consist into two parts
the 'memory heap' and the 'call stack'

Now the 'Memory Heap'
this is where the memory allocation happens
dont worry we are gonna talk about

and the 'Call Stack'
is where your code is read and executed
it tells where you are in the program

So lets simplify this 
and I will show what does means

I have sublime text over here
and for to allocate memory
in the memory heap

well it is a simple as doing:

const a = 1

we just allocate a memory
when we assign this
the javascript engine its going to remember
that oh yep, 
'a' has a value of '1'
we have used up the 'Memory Heap'
and I can keep going on, on and on
I can keep copying and pasting
and changing these variables
b and c
and I can change the values to a hundred
and maybe here it will be ten

const a = 1;
const b = 10;
const c = 100;

Now what is an issue that we have seen this
something called a 'Memory Leak'
that you are gonna hear as you grow as develope

what we have do here is
we have created all these variables
these global variables

const a = 1;
const b = 10;
const c = 100;

that are in the 'Memory Heap'
but you see this box right?
and with all memory we have a limited amount
that we can actually have
so by increasing the number of variables
the number of variables that we have, 
imagine that we have
this page full of variables
instead of just numbers they like
very very big arrays

well Memory Leaks happens 
when you have unused memory
such as lets say we are not using 
the variable 'a' but still there
by having unused memory
just laying around
it fills up this memory
thats what you may here 
why global variables
are bad
global variables are bad 
because if we dont forget to clean after ourselves
we fill up this memory heap
and eventually the browser is not able to work

all right, so
thats memory, 

lets talk about the 'Call Stack'
what is that?
Well with a 'Call Stack'
we can have something like this

// call stack
console.log('1')
console.log('2')
and then finally 
console.log('3')

if I run this code
in my browser terminal

console.log('1')
console.log('2')
console.log('3')

we have 1, 2, 3

'1'
'2'
'3'

So the 'Call Stack' 
if you remember 
thats what reads and executes
our scripts
so what the 'Call Stack'
does is:
reds the first line console.log('1')
it gets put in the 'Call Stack'
so the javascript engine says:
uh, console.log('1') has been added
lets pop it onto the 'Call Stack'
and then it runs and creates one
and it says ok I am removing the first 
console.log('1')
because I just finished run it
and place the second console.log('2')
into my 'Call Stack'
and says:
yep, execute two, console.log('2')
and then it removes that
it pops it,
and then gets console.log('3')
and logs console.log('3')
and then finally removes it

but lets have a bit a more of a complex example here
to demonstrate this point

Imagine I have something
like this
I have a function const one

const one = () => {}

and inside 
this function 
we have another function 
const two

const one = () => {
  const two = () => {}
}

and for now its not really do much
its gonna console.log('4')

const one = () => {
  const two = () => {
    console.log('4')
  }
}

and then in here we say we run the two() function

const one = () => {
  const two = () => {
    console.log('4')
  }
  two()
}

So if I copy and paste this 
and place it into ou console
and I run one

//

const one = () => {
  const two = () => {
    console.log('4')
  }
  two()
}

one() // '4'

//

I get four
'4'
you see that we get four

what happen here according to the Call Stack
well if we have the Call Stack here

// CALL STACK
we first run the one function
so on top of the Call Stack
the one function is run

one()
// CALL STACK

and as we enter into this callback
we see that we run another function
two()
so two() goes on top of the Call Stack

two()
one()
// CALL STACK

and now we run the two function 
which is
console.log('4')
so we have console.log('4')
thats run inside the two() function

console.log('4')
two()
one()
// CALL STACK

so now that we have read this
the Call Stack its going to say
ok there is nothing else inside this
I am going to run console.log('4')
so its gonna print out number four
its going to remove that

two()
one()
// CALL STACK

from the Call Stack
and then remove the two()

one()
// CALL STACK

and then remove the one()
because its just being called

// CALL STACK

and the Call Stack its now empty
alright awesome
lets revisit the statement
for the beginning of the video

'Javascript is a single threaded language 
that can be non-blocking'

Single Threaded means 
that it has only one Call Stack 
and one Call Stack only
you can do only one thing at a time

and as you saw a Call Stack
is 'First In Last Out'
So what ever its on the Call Stack
run first 
then below that below that below 
that until the Call Stack
is empty

now other languages can have multiple
Call Stacks
these are called 'Multi Threated'

You can also see 
how that might be beneficial
to have multiple Call Stacks
so that we dont keep waiting around for something

Why does javascript designed to be single threaded
well, write code in a single thread can be easy, 
since you dont have to deal with complicated scenarios
that are in multi-that arise in multi threaded environment

you just have one thing to worry
and when I say issues
well, with multi threaded environment 
you can have such a thing as
'Deadlocks'
Now guess what
you just learn what
synchronous programming means

synchronous programming simply means
line one gets executed
console.log('1')
line two gets executed
console.log('2')
and then line three gets executed
console.log('3')

the ladder can start
before the first finishes
so this console.log('2')
doesn't start until console.log('1') finishes
and console.log('3')
doesn't start until console.log('2') finishes

because, well, we look at the Call Stack
because of the Call Stack
You might have heard of the site
stackoverflow
if you  are a developer you use it on a daily
and have you ever wonder what stackoverflow means
well, stackoverflow is this
when a stack is overflowing
kind of like we talked about 'Memory Leaks'
and how the 'Memory Heap' of he Javascript Engine
can overflow

well, with 'Stack Overflow'
this happens
when the 'Call Stack'
gets bigger and bigger and bigger
until it just doesn't have enough space anymore
how can we do that
can we recreate a stack overflow?
yep, I can show you quickly
that to create a stack overflow
all you have to do is
function foo()
like we have in here 
and in this function
we will just have foo()

function foo() {
  foo()
}

and I am gonna run our foo() function

//

function foo() {
  foo()
}

foo()

//

RangeError: Maximum call stack size exceeded

Alright thats looks confusing
what is happening here
this is something called recursion
and recursion means
a function that calls itself
so if you look at what this function does

we run foo and foo is executed
what foo does
is well, we run foo again
so it keeps looping
over and over and over
having a recursion
but there is not end of the site
we keep adding foo()
to the call stack
and keep adding iit ove and over
and over and over and over
and over and over
and over
and we have a stack overflow
so if you wanna have fun
go to the browser go to the console and run
something like this
and see what happens

// Recursion
function foo() {
  foo()
}

foo()

you are gonna get a stack overflow

Alright so hopefully
this now makes sense
the javascript engine 
which is the v8 in chrome
has a 'Memory Heap' and a 'Call Stack'

Now Javascript is single threaded
only statement is executed at a time
but there iis problem now isn't it
what if line two
was a big big task we needed to do
maybe loop through an array
and add millions of items
what will happen there?

well, we have this 
console.log('1')
executed
then this second line 
console.log('2')
that is a massive massive job
will just work there
and console.log('3')
will get a really long time to get load

in our small example it doesn't mean much
but if we have this on a website
well, the user would be able to do anything
the website will pretty much freeze
until the task is done
and the user just waits it
thats
Not very good, 
is it?

well with synchronous tasks
if we have one function 
that takes up a lot of time
its going to hold on the line
imagine a buffet restaurant

all the people wanna eat but bobby
said hold on guys I have to keep eating
I am putting ¿? in my plate
everyone has to wait in line
so it sounds that we need something non-blocking

Remember our first statement
at the beginning of this video

'Javascript is a single threaded language that can be non-blocking'

already we dont wait around for things that take time
so how do we do this?
well,
asynchronous to the ?¿

think of asynchronous like a behavior
asynchronous execution is great 
because its predictable

we know what happens first
console.log('1')
what happens next
console.log('2')
what happens third
console.log('3')

but it can get slow
so when we have to do things
like images processing
or making request over
the network like APIs call
and dont worry we are gonna 
talk about this in future videos
we need something more that synchronous tasks

alright so your are thinking to your self
andrei
how do we do asynchronous programming then?
well, let me remove some of this clutter

we can do asynchronous programming by doing
something like this
setTimeout()
which we are gonna talk about
is a function that comes within our browser
and allows to do a time out

setTimeout(() => {
  console.log('2')
})

and we just give it the first parameter 
the function that we want
and the second parameter is 
how many seconds do we wanna wait
we wanna wait two seconds
2000 milliseconds
if I do this now 
lets do that into the console
and lets see what happens

console.log('1')
setTimeout(()=>{
  console.log('2')
}, 2000)
console.log('3')

//

1
VM2392:5 3
undefined
VM2392:3 2

//

What just happened?

I get console.log('1')
1
console.log('3')
3
and then console.log('2')
2
two seconds later

it looks that we just skip this whole step
and then
put this at the very end
well, you just 
witnesses asynchronous programming

in order to understand this
and what just happened
I need to take you to the next pat

and that is in order for javascript
as we know it to run
for the javascript engine
Memory Heap and Call Stack
to run
we need more than 
the javascript engine
we need what we call a javascript runtime environment
and javascript runtime environment
is again part of the browser
its included in the browser
they have extra things
on top of the engine 
they have something called 
'web APIs'
'callback queue'
and 
'event loop'

and as you see here 
setTimeout is part of the web API
it is not technically part of javascript
it is what the browsers
give us to use
so we can do asynchronous programming

So looking at this diagram
lets see if we figure out what our code
was doing
we can create here our own
'Call Stack'

// CALL STACK

we have web API

// WEB API

and then we have a call back queue

// CALLBACK QUEUE

and then event loop

// EVENT LOOP

just like we have in our javascript runtime environment

// CALL STACK

// WEB API

// CALLBACK QUEUE

// EVENT LOOP

So what is happening in here
first we have console.log()
that goes into the callstack

console.log('1')
// CALL STACK

// WEB API

// CALLBACK QUEUE

// EVENT LOOP

and that gets run
so that console.log into the browser

// CALL STACK

// WEB API

// CALLBACK QUEUE

// EVENT LOOP

we then get setTimeout into our callstack

setTime(() => {
  console.log('2')
}, 2000)
// CALL STACK

// WEB API

// CALLBACK QUEUE

// EVENT LOOP

Because we finish this first task
we are going into the second one
and with setTimeout
what is gonna happen is
well, the 'Call Stack'
is gonna say
hey, I am gonna have
setTimeout()
and because setTimeout is not part of javascript
but part of the web API
it has this special characteristic
what is gonna happen is ...
it triggers the web API
and says 
hey
setTimeout()
has just been called


setTime(() => {
  console.log('2')
}, 2000)
// CALL STACK

setTimeout()
// WEB API

// CALLBACK QUEUE

// EVENT LOOP

and because we notify the web API
we then pop it out of the 'Call Stack'

// CALL STACK

setTimeout()
// WEB API

// CALLBACK QUEUE

// EVENT LOOP

Now the web API starts a timer here
a timer of two seconds
its gonna know that into seconds
you are gonna do something

// CALL STACK

setTimeout(), 2000
// WEB API

// CALLBACK QUEUE

// EVENT LOOP

and because the 'Call Stack'
its empty
the javascript engine
its gonna do console.log('3')

console.log('3')
// CALL STACK

setTimeout(), 2000
// WEB API

// CALLBACK QUEUE

// EVENT LOOP

and executes this
no we have done 1 and 3
but we still have setTimeout()

// CALL STACK

setTimeout(), 2000
// WEB API

// CALLBACK QUEUE

// EVENT LOOP

Now after two seconds
when our time limit is up
the web API is gonna say 
ok, setTimeout 
should be run
lets see wht is inside of it
well, we have console.log('2')
but, what is gonna happen is 
its gonna say 
hey, setTimeout is done

// CALL STACK

// WEB API

// CALLBACK QUEUE

// EVENT LOOP

we have a callback

// CALL STACK

callback()
// WEB API

// CALLBACK QUEUE

// EVENT LOOP

and this callback of setTimeout
we added to the call back queue
saying that hey
we have to run something
we are ready to run it

// CALL STACK

// WEB API

callback()
// CALLBACK QUEUE

// EVENT LOOP

now the last part the 'Even Loop'
the 'Event Loop' over here
checks and says
hey its the 'Call Stack' empty
and it keeps checking all the time
if the stack is empty
if the call Stack is empty
and if the call stack is empty 
and there is nothing
right now running in the javascript engine
its going to say hey
do you have any callbacks
its gonna check the callback queue
and say
ummm, is anything in there
because the Call Stack is empty
we can throw something in there
and  make it do some work
in our case we say
yea, I do
let me put this into the Call Stack
so now we put the callback into the callstack

callback()
// CALL STACK

// WEB API

// CALLBACK QUEUE

// EVENT LOOP

and the callback
we run it
and by run it
we see that we have 
console.log('2')
so its going to say console.log('2')

console.log('2')
callback()
// CALL STACK

// WEB API

// CALLBACK QUEUE

// EVENT LOOP

its going to run this function
and once its done
its going to pop it out of the console

callback()
// CALL STACK

// WEB API

// CALLBACK QUEUE

// EVENT LOOP

and again we are done with the callback
and we remove it
we are done every thing its empty

// CALL STACK

// WEB API

// CALLBACK QUEUE

// EVENT LOOP

and we just run this:
1
3
2

and go through the entire 
web API
callback queue
event loop
and its gonna console log 2
that was a lot of information
so you might need to watch it a few times
but hopefully that makes sense
of why we notice this behavior
and I wanna challenge your understanding here
knowing what you know
and what i have just taught you
what happens if I change this to zero

// call stack
console.log('1')
setTimeout(() => {
  console.log('2')
}, 0)
console.log('3')

that means zero seconds

and I give you a second to think about
what will happen
and I will try this out
clean the console, copy  and paste this and run it

1
VM46:6 3
undefined
VM46:4 2

well, one three and two
1, 3, 2

did you get it right?
think about why that happen?
even though this is zero seconds
still went through the process
it still got enter into
the 
web API
and then the
Callback Queue
and then the 
Event Loop

and by the time that it was happening
the Call Stack
have already moved to the console.log('3')
and only when the 
console.log('3')
is done
and the 'Call Stack' was empty
the Event Loop said
oh yea, we can call console.log('2')
Hopefully that makes sense for you
if you are able to understand that
you are actually have a lot of people that 
hire for javascript roles questions like this
in an interview
so you have to explain why that is
take makes sense to you
you can use it to your advantage
in the next interview

Let's recap
iif you wanna 
to load your latest twits 
on to a webpage and you do it synchronously 
then visitors to your site
wont be able to do anything
until those twits are loaded
this can cause a long delay before
we get to see the content the content of your site
they might not be able to click anywhere and the page 
will feel like its frozen
not a very good users experience
is it?
another way to think about
is calling your teacher with a question
synchronous way is
you call the teacher,
you wait on the phone
until the teacher answers the phone
and ask him the question
and hopefully get an answer
so you let the phone ring until he picks up
but you arre not doing anything else in the mean time

Asynchronous
means you send a text to a teacher with a question
and then when the teacher
he or she has the time
will respond to you and call you with the answer
you can do other stuff in between

So javascript is asynchronous
we can leave it a message
and a callback tells you
hey mr teacher has a message for you 
when you are not too busy
and thats why we call it a callback function
and a callback queue
we are calling back to let know that
hey there is some stuff waiting for you

Noe we se over here that we have
DOM (document)
AJAX (XMLHttpRequest)
Timeout (setTimeout)

and there is some other few things 
but you also see the Callback Queue
we have:
onClick,
onLoad,
onDone

Do you remember the event listeners
well with an event listener we have something
like an 

element

and add an event listener

element.addEventListener()

and in the listener we can say listen for a click

element.addEventListener('click')

and then we have a function

element.addEventListener('click', () => {})

and then you have  a function
that perhaps just console.logs click

element.addEventListener('click', () => {
  console.log('click')
})

well, similar to a asynchronous way of  programming
we have created this click function
and now we just listening to it
and every time a click happens
on the webpage
so on the DOM
we run the callback function
which console. logs click

so to finish things off
when is asynchronous happening
it happens a lot when you try
and talk between machines
like speaking to a data base
making network request
image processing
reading files
dont worry we will go through this in the feature

but to recap what we have just learnt
javascript is a single threated language that 
can be non blocking
it has one Call Stack
and it does one thing at a time
in order to not block 
the single thread 
it can be
asynchronous
with callback functions
and these callback functions
gets run in the background 
through the Callback Queue
and the Event Loop
to bring it back to the Call Stack

So next time you get asked  
what is the difference between synchronous and asynchronous programming?
Or 
How does Javascript work?
you should  have a little bit more confidence
to answer the question
and I hope
this was helpful
I see you in the next video
Bye, bye
*/
