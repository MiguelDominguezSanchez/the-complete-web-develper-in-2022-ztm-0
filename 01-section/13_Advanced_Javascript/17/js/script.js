/*
// Modules

When I first started learning javascript
Modules 
that topic was the most 
was the most confusing thing ever for me
I had a really though time 
getting a grasp of the concept
it took me year to actually get it
But I created a mental image in my mind
to understand it better

And as we do in this course
we first start with the problem
then go to the solution that we have now
to see where we where
and where we are now

This is the mental model than I created
and I call it
Climbing the Mountain of Modules

Let me explain this
when I first started writing javascript
and create websites with javascript

Well, we have an html file
and the very first time
people start using javascript
you use the script tag 
and what we call
an inline script

and an inline script is exactly that
we just inline all
of the javascript within 
within the html
now there is problems
that I see with this

Imagine this getting massive, 
a massive javascript file
thousand of hundreds of lines of code
one is the lack of code reusability
and you hear this term a lot

if we need to add another page
maybe an about html page
we have to copy this code
and put it into the other html
and the second was
the pollution of the global Namespace
and that is ...

// 

go to html in this folder

//

/.../

// --- IIFE ---
// js1 first file loaded.
var myApp = {}

// js2
(function(){
  myApp.add = function(a, b) {
    return a * b;
  }
}());

// jQuery uses this: allows us to use $

// js2

an IIFE actually wraps a function
in brackets

(function(){
  myApp.add = function(a, b) {
    return a * b
  }
})

so that javascript read this and says 
oh I have to evaluate this
and execute this


//

(function(){})()

//

(function(){
  myApp.add = function(a, b) {
    return a * b
  }
})()

//

and then this brackets at the end
says run the function
so after you evaluate this
run this function
so it was a confusing form to
to make sure of one thing
that is by using this method
you dont pollute the global namespace

Now if in the first file you have

var myApp = {}

that be in  the window object
but everything else 
that it inside the function
as you know creates a new scope

// js1 file loaded
myApp = {}

// js2
(function(){
  myApp.add = function(a, b) {
    return a * b;
  }
})()

so all the files
because they are wrapped
in this IIFE
has their own scope
if you wanted to add
to myApp
add it everything as a property or a method
so awesome thats reduce our global namespace
to just what
I mean its not zero
but one its a lot better right

but there is still one issue to this
the order of the files
still important

and I worked on apps
that were using so many script
that this was close to a hundred script tag
and every time you need a file 
you need to make sure 
that you added it in the right place
because that file might be dependent
on another file loading before

so as we know 
thats its lack of dependency resolution
and frankly it doesn't look very pretty

// js1 first file loaded.
var myApp = {}

// js2
(function(){
  myApp.add = function(a, b) {
    return a * b;
  }
})()

so then you have 'browserify'
this nice looking logo
Now what the browserify do
it actually do something called common js
So I am gonna comment it the IIFE out

and so you what browserify did
it uses common js
which allows us to use a common syntax
and it looks something like this

--- CommonJS + Browserify ---
// js1
module.exports = function add(a, b){
  return a * b
}

// js2
var add = required('./add')

if I wanted to have
my first javascript file
a function add 

// js1
function add(){
  return a * b;
}

I can say module dot exports

// js1
module.exports = function add(a, b){
  return a * b;
}

and now in the second javascript file
I could require the add
we are assuming the js1 file is called add.js

// js2
var add = require('./add')

add function
to my javascript two file

Now browserify
use this common js syntax
but its actually a 'Module Bundler'
and what that means?
well, it runs before
you put the website online
what that means is
it reads through all the javascript files
it reads through all this syntax

// js1
module.exports = function add(a, b) {
  return a * b;
}

// js2
var add = require('./add')

and it bundles everything into a single file
once you run all the files to browserify
and again its simple tool
that allows us to dump all our javascript files

all of these (referring to the javascript files attached in the html script tag)

  <script type="text/javascript" src="./1.js"></script>
  <script type="text/javascript" src="./1.js"></script>
  <script type="text/javascript" src="./1.js"></script>
  <script type="text/javascript" src="./1.js"></script>

into browserify
and as long as we use the common js syntax
it will know what to do
and it automatically
create one file

<script src="bundle.js"></script>

it will be call something like bundle.js
so all our scripts
will be just into one massive asset file
and yep, it might be bad
when we are actually developing
when its out on the internet
in the real world
I don't really care how it looks
because
we are just doing this 
to send it somewhere to a server
so that the webapp can be view by user
this it not what it actually going to look
when developers are working on it
when developers are working on it 
we just have our own separate files
we are just run it through browserify
right before deploy
that its put it out to the public

ok so that was very cool
and we are getting closer 
to the top of the mountain

all of these problems here

'Inline Script'

'Script Tags'

'IIFE'

it was all because javascript 
didn't have what we call a module system 
built-in into the language
and think of modules as building blocks
different pieces of code
so instead of having one giant thing
you have modules
each piece is really really 
good at doing one thing
and because javascript didn't have
this module system
it so recent that we have 
so many ways
of importing and exporting modules
and there is actually quite a few more 
that I didn't show because 
well, frankly it will be too much
but things have recently change
with the introduction of ES6
we can now
do something a lot nicer
and it looks something like this

with ES6
we have two new things
export and import

//

--- ES6+Webpack2 ---
// js1
export const add = (a, b) => a * b;
// or
export default function add() {
  return a * b;
}

// js2
import { add } from './add';
// or
import add from './add'

//

for example in javascript one file
I can have a function
and you can see we are using arrow function here 

// js1
export const add = (a, b) => a * b;

and I simply export it
or I can simply just export default
// or
export default function add() {
  return a * b;
}

in the second file 
If I wanted to use
the add function
all I say is import
and then you see here the destructuring
you might remember from ES5 ES6 video
and we are simply just grabbing add

//js2
import { add } from './add'

or the export was default

// or
export default function add() {
  return a * b
}

which means that with 
this you can export multiple functions 
in the same file

//js1
export const add = (a, b) => a * b

versus here

// or
export default function add() {
  return a * b;
}

that you can only export one file
well on that case
you dont need the brackets
we can just add form add function

very cool
thats nice
thats reads pretty nicely
we have just put 
the imports at the top
so each file we now exactly 
what each file needs
everything is clean 
everything works and 
we don't have to care about this stuff
(referring to CommonJS + Browserify)

well yep, kind of
as you know by now
I feel like a broken record
browsers aren't supporting everything yet
because its a new feature
again we still waiting on browsers to implement them

this is what this blue thing is for
called webpack
and webpack
just like browserify
its a module bundler
that is
its bundles modules
which is
which is javascript files
and just like browserify
it traverses the dependency tree
which is the export
and import tags
into a single file
or it can even have multiple files
based on your needs
and with webpack
we can actually use ES6
in our browsers isn't that awesome

this is where we are now
we have climbed the mountain
of modules
we have a really really good system
right now in javascript
it was really hard getting there
but we are in a good place right now

this is what we are gonna be using
and this is what the industry is using
get used to this syntax

I leave a link at the end
of this video 
so you can check out more
when we get to react
we are gonna be using this
a lot
and its gonna be a ton of fun
and its gonna be really nice and clean for us

one thing I wanna to show you
you might think

hey this webpack
seems to be kind a hard
like how this it do it
its very simple 
it just ave a config file
just like this

//

// webpack
module.exports = {
  entry: './app/main.js',
  output: {
    paths: './dist',
    filename: 'bundle.js'
  }
}

//

we can just have an output
that is bundle.js

and you dont need to worry to much about it
when somebody is starting a project
its one person on the team
that configure this file
and everything is done 
the rest you just build on top of

its very very simple to get started 
I dont think its super important
for us to tackle it right now
but again a very
useful tool
it creates a nice bundle.js file
so, now all our htmls looks nice and simple

and you now what 
thats is
we've cover most of the topics on javascript
and some really really hard topics
and I know you brain is hurting for all this information
you've done it
we've finish this section
and previous sections
that we can actually
build amazing apps
with the tools that we have

I can't wait to show you
how all these piece come together
to build something amazing

I see you on  the next video
bye bye

// 

*/
