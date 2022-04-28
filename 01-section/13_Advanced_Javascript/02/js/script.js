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
  direction
) {
  var whatHappens;
  // and we say: 
  switch (
    // the switch statement is gonna check 'direction'
    direction) {
      // and within here: 
      // we say:
      case "forward":
      // then whatHappens equals to "you encountered a monster"
      whatHappens = "You encountered a monster"
      break;
      // the rest of the case statements
      // the cse statements as see  are really good
      // because I  can just copy and paste
      case "forward":
        whatHappens = "you encountered a monster";
        break;
      case "back":
        whatHappens = "you arrived home";
        break;
      case "right":
        whatHappens = "you found a river";
        break;
      case "left":
        whatHappens = "you run into a troll";
        break;
      // and finally
      default:
        whatHappens = "please enter a valid direction";
    }
    // and we ended with a:
    returns whatHappens;
}

// ok, there was a lot whole of code

lets run this command first and then I will explain
what is happening
copy the code into the console

// 

function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case "forward":
      whatHappens = "you encountered a monster";
      break;
    case "back":
      whatHappens = "you arrived home";
      break;
    case "right":
      whatHappens = "you found a river";
      break;
    case "left":
      whatHappens = "you run into troll";
      break;
    default:
      whatHappens = "please enter a valid direction"
  }
  return whatHappens;
}

//

and now we have the moveCommand()
and if you remember the last video
now exist in the root scope

window.moveCommand(
  // within here
  // we 've just say:
  "forward"
);

now if I run this:

window.moveCommand("forward");
"you encountered a monster"

If I go back:

window.moveCommand("back");
"you arrived home"

if I go right:

window.moveCommand("right");
"you found a river"

If I go left:

window.moveCommand("left");
"you run into troll"

and if I do gibberish 

window.moveCommand("9871345");
"please enter a valid direction"

Thats is what switch statements are really good
for when we have a lot of conditions

instead of using:

if else if
if else if
if else if
if else if
statement

you can use a 'switch' statement 
and you can see it is easy to read, nicely
essentially  what is saying is

function moveCommand(direction) {
  // create a variable whatHappens
  var whatHappens;
  switch(
    // the switch¡
    // I want you to check whatever the condition is
    // whatever the  variable is,
    // in this case is the 'direction'
    direction) {

      // and in case the direction equals "forward"
      case "forward":
        // do this: 
        whatHappens = "you encountered a monster"
        break;
      // in case the direction is back
      case "back":
        // do this: 
        whatHappens = "you arrived home"
        break;
      // in case the direction is right
      case "right":
        // do this
        whatHappens = "you found a river"
        break;
      // in the case the direction is left
      case "left":
        // do this
        whatHappens = "you run into a troll"
        break;
      // default is:
      // if none of these conditions work
      // and remember the program goes line by line
      // so it checks "forward"
      // it checks "back"
      // it checks "right"
      // it checks "left"
      // and if nothing of those match
      // it says you can just default
      // "please enter a valid direction"
    }
    // and then we return 'whatHappens'
    // so tat the function rerun something for us
    return whatHappens
  }

and finally what is the break,
the break simply says
if cases "forward"
then assign:
"you encountered a monster"
and the 'break'
'break' is just saying
break out the switch statement
so instead of the program 
then checking to see
case "back",
case "right",
case "left",
default
if we say 'break' 
the program stops here
and then go under the switch statement
to return whatHappens

So if I actually do
'break'
before 
whatHappens = "you encountered a monster"

if I copy this:

function moveCommand(direction) {
  var whatHappens;
  switch(direction) {
    case "forward":
    break
      whatHappens = "you encountered a monster"
    case "back":
      whatHappens = "you arrived home"
      break
    case "right":
      whatHappens = "you found a river"
      break
    case "left":
      whatHappens = "you run into a troll"
      break;
    default:
      whatHappens  = "please enter a valid direction"
  }
  return whatHappens
}

we say:

moveCommand("forward")

Notice what happens now:
I get:

undefined

because we broke,
the program enter 
amd say:

oh ya,
he typed in "forward"
but we aren't able to assign something to the variable
I say break
exit out of the  switch statement
and return whatHappens 
which is only been declared
its unassigned
I just return undefined

all right, there you have it
there two other conditionals

and you' ve cover all of them
in javascript now
each one its good for its own
individual case
but they are all very useful
I see you in the next one
Bye

*/
