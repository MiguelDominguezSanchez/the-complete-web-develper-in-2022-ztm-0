/*
ES7 which was introduced in 2016
It is very very easy to grasp
Why?
Because unlike ES6
had a lot of changes
ES7 Only has two additions
which in this video I will go through them

The first one we are gonna talk about
is 'includes' method
That was added on strings and arrays

Let me show you
Something like 'Hellooo'

'Hellooo'.includes

and I can say 'o'
and it includes 'o'

'Hellooo'.includes('o')

I get a true

'Hellooo'.includes('o')
true

We can use it on arrays
for example 
if I have an array
call it 'pets'

const pets = []

and in the pets
have cat, dog, and bat

const pets = ['cat', 'dog', 'bat']

and now if we do here 'pets'

pets.includes()

includes 'dog'

pets.includes('dogs')

if I run this in the console, I get true

//

const pets = ['cat', 'dog', 'bat'];
pets.includes('dog')

//

const pets = ['cat', 'dog', 'bat'];
pets.includes('dog')
true

//

if I do pets.includes('bird')

pets.includes('bird')

I get false 
because
it doesn't include bird

pets.includes('bird')
false

very simple
That's it that's one of them
and then
The second one is 'exponential operator'
So if I want to have a function
that let's say squares something
can do function x is x
star star two

const square = (x) => x**2

and that means x to the power of two

So again if I run this
and I do square of two

square(2)

//

const square = (x) => x**2
square(2) // 4 

//

I get four
if I do square of 5

//

const square = (x) => x**2
square(5) // 25 

//

if I want to expand on this 
and do a 'cube'
well I do:

const cube = (y) => y**3

three, exponential three
So again, if I clear this
just to make a bit of space
and I do cube of three 
I get 27

//

const cube = (y) => y**3
cube(3) // 27 

//

const cube = (y) => y**3
cube(4) // 64

and that's it isn't that nice

ECMAscript is going to release
small incremental changes
every year
so it is easy to stay on top of language and avoid scenarios
like ES6
tat all of these change where made
and people had a hard time learning all of them

Now with these simple two things in your tool belt
practice them and I see you in  the next video

*/
