/*
Welcome back 
I wanna talk to you quickly
about a very important topic fo developers
and that is debugging
debugging is the act of
looking over code
understanding what is doing
and figuring out why is not acting
as expected
maybe its not even running
you are getting errors
or something that the user does in a website
is triggering a weird behavior
thats what debugging is
figuring out why the program isn't acting the way it is

And when you work as a developer
a lot of your time is spent debugging
So its a very important topic
and I wanna talk about some of the strategies
that we can use for debugging

I have over here a
pretty complex function

const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  (a, b) => a.contact(b), [];
)

and frankly ...
unless you have 
a lot experience with javascript
this is a pretty hard function to understand
Lets say  that you get into work
and somebody says
hey, I dont know 
what is going on with this function
can you look it into
and you  have to figure out what it does
and whether is working fine or not

So I am going to take you though the steps I would use
to debug this code
maybe is working fine maybe its not

But I wanna understand what this piece of code does

So the first thing I would do is just read it
I say 
ok, we are assigning a variable
'const flattened ='
and it looks that it have an array
it is a nested array
So there is an array inside an array
'[[0, 1], [2, 3], [4, 5]]'
and it looks this code wants tto do something called 'flattened'
ok, we know that 'reduce' 
from what we've learn before
'a' is the 'accumulator'
I can change the name 
so it makes more sense to me
.reduce(
  (a, b) => a.concat(b), []
)
//

.reduce(
  (accumulator, b) => accumulator.concat(b), []
)
and 'b' 
what is 'b'?
'b' is this
[0, 1]
[2, 3]
[4, 5]
because we are iterating, 
looping over the first the first array
[[],[],[]]
so it gives us three array
So I can just say 'array' here

.reduce(
  (accumulator, array) => accumulator.concat(array), []
)

ok
I also see that
within this reduce
I have the accumulator, 
I have the array
.reduce(
  (accumulator, array)
)
and I want the 'accumulator'
to start off with an empty array

.reduce((a,b)=>a.concat(b), [])
//

.reduce(
  (accumulator, array) => accumulator.concat(array), []
)

That makes sense so far
the accumulator its gonna 
be an empty array when we start off

.reduce(
  ([], array) => [].concat(array), []
)

and what we are gonna do 
its empty array dot concat

.reduce(
  (accumulator, array) => [].concat(array), []
)

and concat attaches the contents of an array
into what ever its being concated

.reduce(
  (accumulator, array) => accumulator.concat(array), []
)

One thing i can do its open up this function
so now instead of just having one line
I can say console log array
and we will find what array is

const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  (accumulator, array) => {
    console.log('array', array)
    accumulator.concat(array)
  }, []
)

and we also say: console.log(accumulator)
and we also make sure that we are return this
because  we remove it from a single line
which already means in it return
to making it to two lines
so lets just refresh
and add this function
and see if can get some console.log 
to figure out what its doing
ok so we have the console opened

//

const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  (accumulator, array) => {
    console.log('array', array)
    console.log('accumulator', accumulator)
    return accumulator.concat(array)
  }, []
)

//

'array' [ 0, 1 ]
'accumulator' []
'array' [ 2, 3 ]
'accumulator' [ 0, 1 ]
'array' [ 4, 5 ]
'accumulator' [ 0, 1, 2, 3 ]

//

thats gonna be three loopings
and in the first looping 
it looks like it says
the array is zero one
'array' [ 0, 1 ]
and the accumulator is the empty array
'accumulator' []
ok it makes sense
and then we see the second loop around
the two and three array
which is here
'array' [ 2, 3 ]
and the accumulator now has zero and one
'accumulator' [ 0, 1 ]
soo it looks like that after first loop through
I added the zero and one oof the array
into the empty array
just the accumulator
ok 
and the last pass through four and five 
I now
attach  the array of four and five
'array' [ 4, 5 ]
into accumulator
which has
zero, one, two, three
'accumulator' [ 0, 1, 2, 3 ]
so it looks like what we are doing
its we are grabbing
each array
and we are adding it into the accumulator
and because it looks like something like this
'return accumulator.concat(array)'
so this is ow it looks like the first pass through
'return [].concat([0, 1])'
we are just using the concat function
to join the arrays
.concat([0, 1])
we are flattening the arrays 
that means instead of having an array inside of an array
we can just completely flatten everything
That means that with 
'flattening' 
console.log(flattened)
if we look at what it does
well it just flatten the array
[ 0, 1, 2, 3, 4, 5 ]
awesome.

there is one other trick that I am gonna show you
that is instead of using console.log
we can use something call debugger
and you notice that the color turns red
and you notice that the color turns red
and that means yep, its a javascript keyword
and what this allows us to do
ok lets  see  what happens when I run this function
and I am gonna refresh 
and I going to run it

const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  (accumulator, array) => {
    debugger;
    return [].concat([0, 1])
  }, [])

oh, what just happened
when the javascript engine in the
browser run to the word debugger
it stops
its a word that tells
whatever is reading this file
hey stop whatever you are doing just freeze
and it opens up the window for us
exactly where it stopped
let me make this full screen and show you
it stops in the middle of its execution
we see that here
accumulator its an empty array
because well, we started it 
the array is zero and one
and now I have a couple of options
I can hit play which resumes the entire thing
and I can hit step over
Now lets see what happens with step over
it goes to the next line
and if I click again
it goes to the next line
and now that I see the accumulator
is zero and one
and the array is now two and three
'accumulator = (2) [0, 1], array = (2) [2, 3]'
so I now that in the next line
the accumulator
well, I change this to an array by mistake
but this will be the accumulator
will be zero and one dot concat two and three
.concat([2, 3])
and I can keep stepping though this
and see how the parameter changes
and literally go through the entire function
lets close that down

if I bring this to what the way it was
which is the accumulator

//

const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  (accumulator, array) => {
    debugger;
    return accumulator.concat(array)
  }, []
)

//

So i am gonna make this full screen
so array is zero, one
array = (2) [0, 1]
accumulator is an empty array
accumulator = []

Notice that it also tells us:
- Variables in scope
- Context (this value)

I am gonna step through
that changes accumulator
is now zero, one
two, three
array = (2) [2, 3]
and I keep stepping through 
and I know exactly what is happening in the code
and when its done executing
it returns 
and look at that
we have our console back

Isn't that cool
debugger
allows us to literally
going to the function and see what happens
step by step
as I return this to the way it was

const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  (a, b) => a.concat(b), []
)

I want just take this with you
and understand that although
we see something overwhelming
with enough time
and using console
and debugger
we are able to understand what a function
if its doing something that you dont expect
or if its something wrong
you can do these techniques to fix it
its a very useful skill
that you are gonna use a lot
so good luck have fun
bye bye

*/
