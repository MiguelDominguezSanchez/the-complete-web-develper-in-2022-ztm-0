/*
Type Coercion

Ah type coercion
If there is one thing 
that is gonna make you
pull out all of your hair 
out of frustration
its type coercion

If you google 'type coercion' in Javascript
and look at some of the posts
you are gonna see a lot of people angry
some of the funky things
that Javascript does
and we are gonna talk about them

and I am going to give you a brief overview of it
because it does get really convoluted, complex and 
it is something that you should understand
and now what it is
but you dont have to know every single detail
because most of the tricky parts
well, you shouldn't be using it in your code
because its confusing

What is type coercion?

its something like this:
one equals to string one

1 == '1' // true

that equals to true
You see
type coercion means that
when the 'operand' ( 1 and '1')
that is the thing to the left 
and to the right of the 'operator' ('==')
are different types
that is 'number' and 'string' type
one of them will be converted 
into an equivalent value
by the javascript engine

So the javascript engine is going to say
number 1 equals to string 1
1 == '1'
I think you mean number 1
So its going to do this for us
1 == 1
and compare number 1 to number 1

Now, based on that definition
type coercion means
the language converting 
a certain type to another type

Let me ask you a question

Do all languages have type coercion?
What do you think?
Yes, they do
because, we always need to convert types between programs to do things
in memory different types
look completely different 
than when we type
the number 5 
in actual physical memory
is represented in ones and zeros
and all languages do this
there is some sort of type coercion
at different levels of the stack
it just so happens 
that javascript has 
an specially heavy type coercion
nature to it
because its dynamically typed
which is why it does this

lets go back to the example
in javascript
type coercion happens
when you use the double equal '=='
double equal sign simply means
compare the two values
and if they have different types
try to coerce one into the same type
if we go back and do a string here

1 == '1'

and I do: 
three equals

1 === '1'

and I run:
I get false

1 === '1'
false 

Because three equals in javascript means
compare two values
but don't try and coerce the value
be explicit with the comparison
and be exactly what I tell you

So is there ever a time you should use two equals
instead of three equals
umm, I would said that:
No there isn't

Some people may argue that
double equal can actually
has some interesting applications
where we coerce something
and we do some sort of checking very quickly
but its not predictable at all
it can be confusing
it can really be a gotcher and trick some people

So always use three equals
instead of two

Now type coercion doesn't happen just
with the equal sign
you can also do
an if statement

if ()

so if 1 return 5

if (1) {
  console.log(5)
}

and if I run this

if (1) {
  console.log(5) // 5
}
5

5 is logged
why is that?

Because javascript coerces 1
to equal true

if(true) {
  console.log(5)
}

What if I do zero here?

if(0) {
  console.log(5)
}

If I do zero
javascript coerces this and say
I am going to take your zero and convert it into a false

if(false) {
  console.log(5)
}

Now, this sort of type coercion
there is a lot of interesting specifics to it

as a matter of fact 
there is a nice little website
that show some of the comparisons that javascript does

https://dorey.github.io/JavaScript-Equality-Table/

with three equals, 
that is with no type coercion
things make sense
you see that false equals to false
false === false
and thats it
you can see that 
string false only triple equals
and returns true with
string false again
'false' === 'false' // true
but if we do double equals
well, oh boy that is just a mess
ins't it
for example
string one is the same as true
'1' == true
and array that contains one
is also true when is compared to string one
[1] == '1'
and there is so many little cases here
if you wanna play around with this
go for it
but I like to stick tripe equals
you can also see some of the if statement here
and some of the if cases
can really be tricky

Now if we go to the MDN:

https://

which I will link to it in this video
we see that we have double equals
the triple equals
but also something called 'Object.is'
its fairly new to javascript
this is an interesting one that
you most likely wont see very often
I think its interesting
so we are gonna talk about it

You see in javascript 
there is a concept of
negative zero
-0
and 
plus zero
+0

Strange I know
if I do negative zero
-0
triple equals plus zero
-0 === +0

and I run
I get rue

-0 === +0 // true 

But they are technically
different things in  javascript

So I can actually do 
'Object.is'
and give it the two parameters

Object.is(-0, +0);

run and I get false

Object.is(-0, +0)
false 

Why is this useful?

If we go back to this page (MDN)

you see that 'Object.is'
is pretty much the same as the triple equal
except for a few cases
the plus and negative zero
+0, -0
and if we scroll all the way down
to this funky little
'NaN'
Not a Number
and we can do a whole course on how weird this 'NaN' Not a Number

But if I did
NaN
which represents
Not a Number
in Javascript
and triple equals NaN
Not a Number

NaN === NaN

I get false

NaN === NaN // false 

But,
Why is that?
this should be equal
right?
So if we use 'Object.is'
it turns into a true

Object.is(NaN === NaN)

Object.is(NaN === NaN)
false 

Most likely in your day to day 
you will never encounter this problem

But I want to demonstrate to you
how confusing type coercion can be

And if you are the type of person who just love
type coercion
and wants to read all about it
and wants to understand all these intrincances
I will link you to the actual expect
that talks about how the Equality Comparison Algorithm 
works

https://www.ecma-international.org

for me if I read this
its a good bed time reading to make me fall asleep

if you are interested in it
you ca have a look
the main take away in here
is that you should use triple equals
because type coercion in javascript
can be really tricky
by the way as a fun little side note

This is a screen capture I took from Netflix
watching this hilarious documentary
you see that bugs in the code
are unavoidable
even the mighty Netflix
every once in a while
has an issue somewhere
NaN
Not a Number

All right 
thats it for now
I see you in the next one.
Bye bye.



*/
