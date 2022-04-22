/*
Scope
//

An important concept in Javascript,
called scope.
Now what is scope,
scope means variable access
what variables do I have access to
when a code is running.
//

So by default in Javascript you are iin the root scope,
which is the window object.

Let me show you what I am talking about.

If in my console I do:

function aa() {
  console.log("test")
}

Now te function aa()
is part of the scope.

If I do window here.(in the console)
and open up window.

you see the 'aa' function,
has been added to the window scope,
So when you are working in a browser
this is called the 'root' scope,
so the 'parent' scope.

Now what if I do something like this:

unction bb(){
  var a = "hello"
}

This function,
if I run this in the console.
If I now do:
'console.log(a)'
will that work?

No because 'a' only lives within the function 'bb'.

The scope is inside of the function,
the only way we can do:
'console.log(a)'
is within the function to add
'console.log(a)'

function bb() {
  var a = "hello";
  console.log(a)
}

So now if I run the function:

'bb()'

I have:

'hello'

 */

/*
Now the interesting thing is that
functions have access to any variable 
in the 'root' scope.

Now if I do:

var b = "Can I access this?"

'function bb()' has access to this variable 'b'

function bb() {
  var a = "hello";
}

Because as you know,

'window.bb'

exists and 

'var b = "Can I access this?"'

lives on the window object.
So they both have the same parent.

Let me show you what I mean by copying this 
and put it into the console.

now within 'function bb()' 
If I do: 
console.log(b)

var b = "Can I access this?"

function bb() {
  var a = "hello"
  console.log(b)
}

We have access to this:

'Can I access this?'

*/

/*
Ok what if I do something along the lines of:

var b = "Can I access this?";

function bb() {
  b = "hello";
}

and now I do:

'console.log(b)'

I have:

'Can I access this?'

Because I haven't run the function.
But If I run the function 

'bb()'

Now if I do console log variable 'b':  

'console.log(b)'

I get:

'hello'

Because 'b' is the same variable.
*/

/*

ok lets do something a little bit more complex.
So knowing what we know,
We know that this is the root scope
in our case is the window

Root Scope (window)

within here we can declare a variable

'var fun = 5'

we also declare a function,

'function funFunction() {
  // as soon as we create this curly braces we've created a child scope in here
  // So within here I say
  var fun = "hellooo"
  // and console log fun
  console.log(fun)
}'

and we create another function,
lets say this one we call it funner

function funnerFunction() {
  // child scope
  var fun = "Byee";
  console.log(fun)
}

And finally we create a third function
and we call this the funnest

function funnestFunction() {
  // child scope
  // and within here we romevo the variable
  // and we say: 
  fun = "AHHH"
  console.log(fun)
}

and at the bottom we say console log fun

console.log(fun)

Let's go over this
We declared a variable fun equals five
We declared three functions.
And each of these functions,
create their own scope,
and each of these functions,
console log fun,
but what fun means,
in each one of them,
is different based on their scope.

So the first one
we title it '1',
just so we know,
the second,
lets say '2',
the third '3'
and finally here we just say, 'window'


var fun = 5

function funFunction() {
  var fun = "hellooo"
  console.log(1, fun)
}

function funnerFunction() {
  var fun = "Byee";
  console.log(2, fun)
}

function funnestFunction() {
  fun = "AHHH"
  console.log(3, fun)
}

console.log('window', fun)

*/

/* 

So we have

'window 5'

which means this line over here:

'console.log('window', fun)'

the fun variable is '5'
nothing has been run,
we read through this script 
and we see the variable fun equals five

var fun = 5

and then we see these functions 
but none of them are run

but now if I do 
'funFunction'
and we actually run this
'funFunction()'
and we do 
'funnerFunction()'
and finally the 
'funnestFunction()'


var fun = 5

function funFunction() {
  var fun = "hellooo"
  console.log(1, fun)
}

function funnerFunction() {
  var fun = "Byee";
  console.log(2, fun)
}

function funnestFunction() {
  fun = "AHHH"
  console.log(3, fun)
}

console.log('window', fun)
funFunction()
funnerFunction()
funnestFunction()

I copy and paste this the console:

We see we have:

window 5 
1 hellooo 
2 Byee 
3 AHHH

window 5 // line console.log('window', fun)
I got run which is variable five, var fun = 5;
1 hellooo // The first function we have the variable fun equals to hello.
Because we ' ve created a new scope, and within this function lives variable fun. var fun = 'hellooo'
That has hello, so that gets overwritten.
2 Byee // And then we have the second function that has bye.
Again the same thing as above. Because we have a new scope.
A new variable fun equals bye. var fun = "Byee"
3 AHHH // And the third one, we have fun equals "AHHH",
and again that gets changed

*/

/*
here is the fun part though
If I do:
console.log(fun)
in the browser console
its now equals to 'AHHH'
Because in the third function we modified
fun which is this variable,
equals to 'AHHH'
fun = "AHHH"

One thing that I am gonna show you 
its that in the first two functions
I wont be able to access the 
fun variable
var fun = 5
in the root scope
because I essentially overwritten them
within the funFunction,
and the funnerFunction,
fun equals something
that its their own meaning,
so within this funFunction
'funFunction()'
fun equals hellooo
within the funnerFunction
'funnerFunction()'
fun equals bye
and no matter what 
we wont have access to
the root scope.
And this is called a:
'Naming Conflict',
where we name things the same way
as something that lives let's say 
in the parent scope
and we lose access to it.

So to finalize this point

when somebody runs

function funnestFunction() {
  console.log(fun)
}

we run this and javascript reads 
console.log(fun)
ok, fun, do we know her?
we look at the scope here in the function
Hey, do you know what fun is?
and the function says, no, sorry friend
I dont really know fun
but ask my parent,
so now we go outside of the function,
in this case the root scope
and we say,
hey, do you know fun?
Yes, we have a variable fun equals five,
so now console log logs five.

But if fun doesn't exists,
we ask the parent and the parent
says, sorry I have no idea what fun is,
and we get an error,
so the last check is always a root scope,
in our case the window object,
if we cant find it
we get this error in the console we always see
your friend variable doesn't exist
I think you make her up

thats it for scope


*/
