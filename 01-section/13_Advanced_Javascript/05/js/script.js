// Advanced Arrays

/*
And we are back to talk about arrays again

In the First Section when we talk about arrays,
we said that they look something like this:

var array = [
  // square brackets
  // and we put whatever we want
  //  ie a few numbers
  1, 
  2, 
  10, 
  16
]

So this are arrays
and we talk about the fact that
we can do fo loops 'forEach' with them which is new in ECMAScript
and today we are gonna learn a few more

but before we do that
lets remember how the 'forEach' works

Lets say we wanna to multiply
every single number in the array
we can just 'const' remember
now we can use our new ES6 syntax
and we can say that :

const newArray = array.forEach(
  // and for each array
  // we are gonna use a number
  (num)
  // and we are gonna use 'arrow function'
  // again no more 'function' word
  // everything looks nicer this way
  // with the fat arrow
  => {
    // and forEach number of the array
    // we say number times two
    num * 2;
    // so multiply number by two
  }
)

Now lets see what it gives us:

//

const array = [1,2,10,16];

const newArray = array.forEach((num) => {
  num * 2;
})

console.log(newArray) // undefined

Because that's not how forEach works
forEach says:
I am going to loop over these elements
and I am going to multiply number by two

But we are not changing the array

if we look at the array right now

array

Well, still the same thing

Array(4) [ 1, 2, 10, 16 ]

We are just randomly multiply the numbers by two
but we are not storing the numbers

If we wanna do what we are doing
we have to say:
const double
and we say that double is an array

const double = []

then 

double.push

So we are pushing
on to the array
as we loop through it
'num' times 2

const array = [1,2,10,16]

const double = []
const newArray = array.forEach((num) => {
  double.push(num * 2)
})

console.log(double)

Now lets see what double give us:

Array(4) [ 2, 4, 20, 32 ]

Ok
the ones we are gonna talk about today
is: 

// map, filter, reduce

I would say that these three
are the three most important methods 
that you are going to use
in your day to day
Javascript

They are super useful
so really start to become familiar with them
and any time you think of doing some sort of a loop
most likely you are gonna do one of these three

Lets start with map
the above way of doubling each thing in the array
and creating a new array
well with map
We can do

const mapArray = array.map((num) => {
  num * 2
})

and the way map works is that
is always needs to return something

Because whats different
for map than it is for forEach
well, forEach just loops over something
and it just does whatever the function says
versus
with the map mapArray
we can do what we couldn't with forEach
which is loop over each element
each num 
and return a new array

Let me show what I mean

Every time the array loops
So lets see over here
the first one is number one '1'
we return one '1' time two '2'
1 * 2
that gets put into
mapArray
which is now two '2'
[2]
and we go to the next number
2 * 2
added to the array
[2, 4]
10 * 2
gets added to the array
[2, 4, 20]
and
16 * 2
gets added to the array
[2, 4, 20, 32]

So thats why we return it
and by doing this

if we:

console.log(mapArray)

//

const array = [1, 2, 10, 16];

const double = []
const newArray = array.forEach((num) => {
  double.push(num * 2)
})

console.log(double)

// map

const mapArray = array.map((num) => {
  return num * 2;
})

console.log(mapArray);

//

Array(4) [ 2, 4, 20, 32 ]
Array(4) [ 2, 4, 20, 32 ]

you see that mapArray ...
so the first one iis double
and the second one is mapArray

We name these so
we know the difference
and we just redo it all over again

By the way 
Do you know why I am copying,
instead of copying and pasting it
down here...

because we are using const
so the array has already been declared

So I have to refresh

//

const array = [1, 2, 10, 16];

const double = []
const newArray = array.forEach((num) => {
  double.push(num * 2)
})

console.log('forEach', double)

// map

const mapArray = array.map((num) => {
  return num * 2;
})

console.log('map', mapArray);

//

forEach 
Array(4) [ 2, 4, 20, 32 ]

map 
Array(4) [ 2, 4, 20, 32 ]

//

there you go ...
forEach and map

Looking at these two
they seem to both been doing the same thing
but there is a critical difference between 
map and forEach

And I am here to tell you
whenever you are gonna loop
do a simple loop and take some action
on something like an array
you wanna use map over forEach

With forEach the operation may do nothing
you can just leave this completely blank
or do console.log
because
all forEach cares about
to iterate
which is going one by one
to iterate over a collections of elements
[1, 2, 10, 16]
and apply whatever operation 
we tell it to
on each element

Now map on the other hand,
has a restriction on the operation
It expects the operation to return
an element

So with map ...

with forEach
you can have multiple lines of code
doing all these crazy things
versus map,
with map
you always have a return element

The map iterates
again, loops through
over a collection of elements
applying the operation on each element

and finally storing the result on each
invocation of thee operation
into another collection
which is mapArray

In other words
transforms the array
'map'
It creates a new array
which is 'mapArray'

versus

'forEach',
which does a whole bunch of actions
based on the array
and what does those actions are 
aren't really that limited
If we wanna return a new array 
we have to create our own array
and the 'push'

double.push(num * 2)

and you might notice here something that
we spoke about in the last section
with advanced functions
and that is the idea of
'side effects'

we go back ...

with 'forEach'
we can do a whole bunch of 'side effects'
in the function:
ie 'console.log'
you can create a new array
you can push to that array
you can return undefined

You show that
when we the first
did the forEach
we are even now not returning anything
so we are returning 'undefined'
versus
with 'map' all these 'side effects'
are theoretically gone

Because with a map we have to return
let me show you
if I dont return here:

const array = [1,2,10,16]

const mapArray = array.map((num) => {
  num * 2;
})

console.log('map', mapArray)

lets see what happens:
I get:

map 
Array(4) [ undefined, undefined, undefined, undefined ]

right away we know that
we are doing something wrong 
that we need to return

and
as we mention in the previous section
we have now created a pure function
well, there is no question on 
whether we return or not
We have 'inputs'
'function'
with no 'side effects'
and just simply returns a 'value'

Again a very important concept
we wanna keep things
acting in an expected way
we dont wanna have a piece of code
that lives on a website
lets say for four years
and somebody comes along
who doesn't know it intimately
and all of a sudden 
have all these 'side effects' happens
that they don't know about
again
We wanna write 'pure' simple functions
and that is what 'map' allows us to do

and the other important thing is 
that we are no changing the array
this array stays exact same with map
because we are always
just making a new copy of the array
we are never mutating the data

so thats was 'map'

lets bring back the 'return' here

const array = [1, 2, 10, 16]

const mapArray = array.map((num) => {
  return num * 2;
})

console.log('map', mapArray)

map 
Array(4) [ 2, 4, 20, 32 ]

and lets bring back the console

I also wanna show you 
that when you only have a single parameter
with an arrow function
you can actually avoid the brackets

Again, because when we are returning
and we are just returning
a single line here
we can do a shorthand
which is this:

// no shorthand
const mapArray = array.map((num) => {
  return num * 2
})

// shorthanded single line
const mapArray = array.map(num => num * 2)

How much  cleaner does it look?

Let's again test it out

//

const array = [1, 2, 10, 16]

const double = []

// forEach
const newArray = array.forEach(num => {
  double.push(num * 2)
})

console.log('forEach', double)

// map

const mapArray = array.map(num => num * 2);

console.log('map', mapArray)

//

forEach 
Array(4) [ 2, 4, 20, 32 ]

map 
Array(4) [ 2, 4, 20, 32 ]

Here we go everything is looking nice
look at that difference between

the map and the forEach:

const array = [1, 2, 10, 16]

//

const mapArray = array.map(num => num * 2);

//

const double = []
const newArray = array.forEach((num) => {
  double.push(num * 2)
})

//

The next one I am gonna show you is:

// filter

now with filter,
we say 'filterArray'

const filterArray = array.filter(num => {
  // and as the name suggest it filters the array with a condition
  // in our case
  // we can say
  // lets return all the elements in the array above five
  // so we can say number ris greater than five
  //
  num > 5
  //
  // and as with map
  // this 
  // 'filter'
  // returns a new array
  // so we have to return something
  // because 'filterArray'
  // is going to contain that information
  // So the way you read this is
  // filter this array
  // which is up here
  // const array = [1, 2, 10, 16]
  // as you are going
  // one by one
  // so number will be thee first one
  // is one greater than five
  // 'return 1 > 5'
  // in this case its going to say:
  // that's false
  // so we are not going to add this into the filteredArray
  // then, it iterates to:
  // two is greater than five
  // 'return 2 > 5'
  // oh thats false so its not going to go  into the filteredArray
  // It is ten  greater than five
  // 'return 10 > 5'
  // yes it is, good
  // ten is going to go into the 'filteredArray'
  // and it is sixteen greater than five
  // 'return 16 > 5'
  // jap, then sixteen is going to go into the 'filteredArray'
  //
})

and again
because it is just a single line
we can do the short fom here:

//

const array = [1,2,10,16]

const filteredArray = array.filter (num => num > 5);

console.log('filter', filteredArray)

and refresh,
we get the filtered
containing the ten and sixteen

filter 
Array [ 10, 16 ]

//

If we do: 
'num === 5'

//

const array = [1, 2, 10, 16]

const filteredArray = array.filter(num => num === 5);

console.log('filter', filteredArray)

and we get an empty array
because nothing equals five

filter 
Array []

//

So you can put any condition in here
if you have a string
and you wanna see if the string contains the word 'hello'
well you can do that as well

what you can do is return true or false
if it returns false
it wont go into the array
if it returns true
it will go into the array

well very cool, very useful

//

// reduce

What else do we have
well the last one I am gonna show you is reduce
and this is really really powerful,
you can do a lot with 'reduce'
you can actually do filtering and mapping
with reduce
its a really really powerful methods
but I am going to show you one easy way to get you started

What we are gonna do is:
we are gonna to say

const reduceArray = array.reduce(
  // reduce takes 
  (
    // something called accumulator
    accumulator, 
    // and the number
    num
    // Now, obviously
    // this can be any name
    // sometimes you see 'acc'
    // for 'accumulator'
    // we can leave like that now 
    // so we can see
    // 
    // we know what number is 'num'
    // number is 1, 2, 10, 16
    // 
    // but what is 'accumulator'
    // accumulator is something 
    // that we can store information 
    // that happens in the body of the function

    // 

    ) => {
          // 
          // Let me explain it
          //' accumulator + num'
          // and again because 
          // with 'reduce' we are returning an array
          // we have to return a value
          return accumulator + num
          //
          // and what we are saying here is that
          // every time you iterates
          // so lets say
          // the first go around
          // you have number one '1'
          // 'accumulator + 1'
          // equals
          // lets say the accumulator is zero '0'
          // then equal one '1' now
          // zero plus one equals one
          // 0 + 1 = 1
          // when two '2' comes around
          // we do one plus two 
          // 1 + 2
          // because the accumulator remembers 
          // what was there previously
          // and wen ten comes around
          // you go 
          // 3 + 10
          //
          // Now what is the accumulator
          // we haven't defined yet
          //

    },
          // In reduce
          // after the function you have a second parameter
          // and here we can specify 
          // where we want our accumulator 
          // to start with the default value
          // in our case lets say 0
          0
          );
    // 
    // Now if I do 
    console.log('reduce', reducedArray)
    // 
    // lets see what happens:

    // reduce

    const array = [1, 2, 10, 16]

    const reduceArray = array.reduce((accumulator, num) => {
      return accumulator + num
    }, 0);

    console.log('reduce', reduceArray)
    
    // 

    lets see what happens:
    we get reduce 29,
    because 10 + 16 = 26 + 3 = 29
    
    reduce 29
  
    // 
    
    If I change this to '5'
    meaning the second parameter after the function

    //
    
    const array = [1, 2, 10, 16]

    const reduceArray = array.reduce((accumulator, num) => {
      return accumulator + num
    }, 5);

    console.log('reduce', reduceArray)

    //

    we get 34
    because  the starting number is now '5'

    reduce 34

    //  
    
    very cool

    That's it I want you to remember
    the three methods
    because you are gonna to use them a lot in your career
    they are very very useful, 
    they are pure
    which means tat every time we do an operation
    whatever inputs we get it
    it always returns a value
    and tey have no side effects
    and as you can see 
    they are very easy and simple to read
    so get it used to them
    and good luck with the exercises after this video

    I see you in the next one,
    bye bye

*/
