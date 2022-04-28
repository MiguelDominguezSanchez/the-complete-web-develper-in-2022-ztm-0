//  Advanced Control Flow

/*
Up to this point we learnt the 
if statement
else statement
and the
else if statement

And if you remember our section outline
I haven't mention these two

<!-- ternary operator -->
<!-- switch -->

for javascript conditionals
so we are gonna tackle those today

as you can see there are two more to get trough
Dont be scared
these are not going to introduce anything new
there are just different ways
of doing control flow
but the wont do anything
that a simple if else cant do

However there are cases
where it will be much easier to do these two
than if we do something with the if else statement

So lets check them out

The first one that we are gonna talk about
the ternary operator

Its something like this:

condition ? expr1 : expr2;

and that is the syntax

is this true or false 'condition'
if it is true '?' provide this value 'expr1'
if it is false ':' provide this value 'expr2'

Let me show you an example of this:
a function that accepts a boolean

function isUserValid(bool) {
  // which return the boolean value
  return bool;
}

and says: 
variable answer equals isUserValid
and we just say true for now
'?' question mark
so if that's true we say 
"You may enter"
otherwise ':'
we say "Access Denied"

So again, all that we say is:
if this is true: 'isUserValid(true)', '?'
then do this expression:
"You may enter"
if this is false: 'isUserValid(true)' ':'
do this expression: 
"Access Denied"

var answer = isUserValid(true) ? "You may enter"

If I do answer: 
I get "You may enter"

if we say 'false'
'isUserValid(false)'
'answer'
in that case I get: 
'Access Denied'

Let's do a little more complicated answer

var automatedAnswer = 
// in a new line
"Your account # is "= ( 
  // Because we have this braces
  // we can have an expression inside of here
  isUserValid(false) ? "1234" : "not available" )















*/
