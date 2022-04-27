/** 
Welcome back,
in this video,
we are gonna talk about an important concept in Javascript
called 'scope'
SCOPE

Now wat is 'scope'
scope means variable access
what variables do I have to when a code is running

So by default in Javascript
you are in the root scope which is the window object

Let me show you what I am talking about:

If in my console I do something like:

function aa() {
  console.log('test')
}

and we close up that function.

Well now the:

'function aa() {console.log('test')}'

is part of the window scope.

If i do window here,
and open up window:

Window {window: Window, self: Window, document: document, name: '', location: Location, …}
$: ƒ ( selector, context )
Constants: {MID: '18e2c4209383d2d425f2bbdc8d7e092b', CHANNEL: 'bf05da39-8513-4ffa-9460-b7545e6d0b5b'}
GoogleAnalyticsObject: "ga"
NProgress: {version: '0.2.0', settings: {…}, status: null, configure: ƒ, set: ƒ, …}
Popper: ƒ t(o,n)
Swal: ƒ Ue()
SweetAlert: ƒ Ue()
Sweetalert2: ƒ Ue()
Swiper: ƒ t()
aa: ƒ aa() ------------------- HERE ----------------------
alert: ƒ alert()

You see that the aa() function
has been added to the window scope

So when you are working in a browser
this is called the 'root scope'
so the 'parent scope'

Now, What if I do something like this?
If I go:

function bb() {
  // and within this function
  // I do:
  var a = "hello";
}

Well this function,
if I run this in the console,
If I now do:

console.log(a)

Will that work?

VM1017:1 Uncaught ReferenceError: a is not defined
    at <anonymous>:1:13

No, because 'a' only live in the function bb()
the scope is inside of the function

So the only way we can do 
'console.log(a)'
it's within the function
to add

function bb() {
  var a = "hello";
  console.log(a)
}

Now if I run the function

bb();

I have:

hello

The interesting thing
is that functions have access to any variable in the root scope

For example if I do:

var b = "Can I access this?"

function bb() {
  var a = "hello";
}

function bb()
has access to this
because as you know 
'window.bb() '
exist
and variable b
'var b'
lives on the window object 
'window.b'

So they both have te same parent

I show you what I mean by copying this
and copying this into the console

var b = "Can I access this?";

function bb() {
  var a = "hello";
}

now in: 

var b = "Can I access this?";

function bb() {
  var a = "hello";
  // if we do
  console.log(b)
}

Well we have access this:

bb()
Can I access this?

ok what if I do something about the lines 
of variable b can I access this?
I do b equals hello

var b = "Can I access this?";

function bb() {
  b = "hello";
}

if I copy this
and now I do: 

console.log(b)

I have:

console.log(b)
Can I access this?

because I haven't run the function
but if I run the function 
'bb()'
Now if I do 
console.log()
variable b
console.log(b)

I get:

console.log(b)
hello

Because 'b' is the same variable

//

Ok lets do something a little bit more complex,
so knowing what we know
that this is the root scope
in our case is the window

// Root Scope (window)
Within here we can declare a variable
var fun = 5
and we also declare a function
funFunction()

function funFunction() {
// and within the function 
// as soon as we create tese curly brackets
// We have created a child scope within here
//
// child scope
//
var fun = "hellooo";
console.log(fun)
}

//

function funFunction() {
  // child scope
  var fun = "hellooo";
  console.log(fun)
}

and we create another function
and this one we will call it funnerFunction

function funnerFunction() {
  // child scope
  var fun = "Byee";
  console.log(fun)
}

and finally we create a third function
and we call this the funnestFunction

function funnestFunction() {
  // child scope
  //
  // and within here we remove the variable
  // and we say AHHH
  fun = "AHHH"
  console.log(fun)
}

and at the bottom we 
console.log(fun)

So let's go over this
we declare a variable fun

We've created tree functions
and each of these function
create their own scope
and each of these function console log 'fun'

But what fun means in each one of them
is different based on their scope
so the first one we title it 1,
so just we know
the second we say 2
the third 3
and then finally here we just say 'window'
So lets run this function and see what happens

var fun = 5;

function funFunction() {
  // child scope
  var fun = "hellooo";
  console.log(1, fun)
}

function funnerFunction() {
  // child scope
  var fun = "Byee";
  console.log(2, fun)
}

function funnestFunction() {
  // child scope
  fun = "AHHH";
  console.log(3, fun)
}

console.log("window", fun)

Lets see if we can guess whats about to happen

so we have:

'window 5'

which means this line over here
'console.log("window", fun)'

the fun variable is well 5

'var fun = 5'

noting has been run
we read through the script
and we see that variable fun equals 5
and then we see these functions,
but not of them are run
and now if I do:
'funFunction()'
to actually run this
and we do 
'funnerFunction()'
and finally the funniest function
'funniestFunction()'

var fun = 5;

function funFunction() {
  // child scope
  var fun = "hellooo";
  console.log(1, fun);
}

function funnerFunction() {
  // child scope
  var fun = "Byee";
  console.log(2, fun);
}

function funnestFunction() {
  // child scope
  fun = "AHHH";
  console.log(3, fun);
}

console.log("window", fun);
funFunction();
funnerFunction();
funnestFunction();

if I copy and paste this and this
we see we have:

window 5 // line got run which is variable 5
1 hellooo // within the  first function, we have fun equals to hellooo, because we have created a new scope, within this function lives variable fun as 'hellooo'. So that get overwritten
2 Byee // and then we have the second function that has 'Bye'. Again the same thing as above, a new s, a new variable, fun equals 'Bye'
3 AHHH // and the third one, we see that we have find equals 'AHHH', and again tat gets changed and that equals to fun

Here is the fun part though
if I now do:
'console.log(fun)'
its now equals to:
'AHHH'
Because in the third function 
we have modified 'fun'
which is this variable
'var fun = 5'
to equal to 'AHHH'
One thing I gonna show you
is that in the first two functions
I wont be able to access the fun variable
in the root scope
because I essentially overwritten them
because the funFunction and the funnerFunction
fun equals something that is their own meaning
so this function 'funFunction()' fun equals 'hello'
within the 'funnestFunction()' fun equals 'Byee'
and no matter what
we wont have access to the root scope
'var fun = 5'
it is called a naming conflict
when we name things the same way
that lives lets say in the parent scope
and we lose access to it

So to finalize this this point
let just delete this and go over
whats happening here
so lets delete this,
and just a console.log here



var fun = 5;

function funnestFunction() {
  // child scope
  console.log(fun)
  // we look at the scope here
  // hey do you know what fun is
  // and the function say
  // sorry friend I dont really know fun
  // ask my parent
}

so now we go outside the function
in this case the root scope
Hey, do you know fun?
ye ye ye, we have a variable fun equals 5
so now console.log can log 5
if if fun doesn't exist ...
we ask te parent
and the parent says 
sorry, I have no idea what fun is
then we get an error
so the last check is our root scope
in our case the window object
if we cant find it we get this error in the console
sorry your friend variable doesn't exist
I think you made it up

and that's it for scope

I have a fun exercise for you right after this video
give it a try
I see you in the next one































*/
