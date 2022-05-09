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

*/
