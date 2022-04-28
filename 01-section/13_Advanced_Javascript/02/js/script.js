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
  // that we can evaluate
  isUserValid(false) 
  // if the user is valid
  ?
  // we say 
  "1234"
  // if not
  : 
  // we say
  "not available" 
  )


if we copy  and paste this in our console
and we can see it better
if user is valid we can say "1234" iif not "not available"

// 

function isUserValid(bool) {
  return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied"

var automatedAnswer =
"Your account # is " + ( isUserValid(false) ? "1234" : "not available")

// 

and now I do: 
'automatedAnswer'
I get:
"Your account # is not available"

Well because 
'isUserValid(false) '
is false
but if I give it 'true'
isUserValid(true)

// 

function isUserValid(bool) {
  return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied"

var automatedAnswer =
"Your account # is " + ( isUserValid(true) ? "1234" : "not available")

// 

well in that case:
'automatedAnswer'
"Your account # is 1234"

You might notice that 
this is actually not that different from if we do:

// 

function condition() {
  if(isUserValid(true)) {
    return "You may enter";
  } else {
    return "Access denied"
  }
}

//

This function over here condition
if we do: 

var answer2 = condition()

and copy these two:
and run them:

function isUserValid(bool) {
  return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied"

function condition() {
  if (isUserValid(true)) {
    return "You may enter";
  } else {
    return "Access denied"
  }
}

var answer2 = condition();

// 

and now if I look at answer

answer
"You may enter"

if I do answer2
I get

answer2
"You may enter"

Now its the exact same thing
but you see one way is nicer,
a simple one line:

var answer = isUserValid(true) ? "You amy enter" : "Access Denied"

a ternary operator is really really good for this
if else
where there is a check for condition
and there are two possible expression
that come out of it

*/

//

/*
ok lets learnt the next one which iis the switch statement
this is a fun one

So a switch statement looks something like this
you can build a simple game right now
to demonstrate how it works

I can say function moveCommand

function moveCommand(
  // and we will say:
  // it accepts parameter 'direction'
)




















*/
