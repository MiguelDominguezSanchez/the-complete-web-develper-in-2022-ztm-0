/*
013 Pass by Value vs Pass Reference

Welcome back 
lets talk about

Pass by reference vs Pass Value

To finish our discussion javascript types
Now in the previous video

I said that primitive types are immutable
what does it mean?
It means that we can't change them,
in order change them 
we completely remove
the primitive type
and lets say if
variable 'a' equals '5'

var a = 5

Well in order for me to change
what that 5 value is
I have to literally move it from memory
and create something new
like 'a' equals '10'

'var a = 10'

I can't modify it
just something new was created

Primitive types are exactly like that
when I assign variable 'a' to '5'
somewhere in memory variable 'a'
is going to contain a referenced to value '5'

If I do variable 'b' 
equals to let's say '10'
again the same thing

'var b = 10'

and they dont really know of each other's existence
this is what we called 
'Pass by Value'
Objects 
on the other hand
are what we calle
'Pass by Reference'

Lets write some code to figure out what this really means

If I do:

var a = 5;

and then I do:

var b = 10;

Well 'a' now has an address
of where this primitive value '5' sits in memory
and the same with 'b'
'b' has an address on where the primitive value '10' sits in memory

What if I do variable b equals to a?

var b = a

What happens then?
Remember primitive types they are 'pass by value'
When we do 'pass by value'
Well, What if I do something like 'b++' here
so that is add '1' to 'b'
if I console.log 'a'

console.log(a) // 5

I have '5'

If I console.log 'b'

console.log(b) // 6

and this is because 'pass by value'

All I did,
or all the javascript engine did
was copy the primitive type value '5'
as if I was doing 'b' equals '5'

var b = 5;

But now b has a reference 
to the value primitive type '5'
all we did was copy the value

so looking at this 
this diagraman should make sense (video diagram)

anytime, 
even when we do 'b' equals to 'a'
'b' simply copied the value
and put it into a new memory space in our machine

Remember our 'memory heap' or our 'stack'
where we store information
we simply made a copy
they dont really have any connections whatsoever

and thats what 'pass by value' means
'pass by value' simply means copy the value
and we create that value somewhere else

//

var a = 5;
var b = a;

b++;

console.log(a) // 5
console.log(b) // 6

//

////////////////////////////////
Now lets see how object are different

unlike what we have before
lets keep this here so you can see

var a = 5;
var b = a;

b++;

I create an object
lets say object one

let obj1 

and object one has name of Yao

let obj1 = { name: 'Yao' }

lets say that this is a user that also as a password
123 as the password super secure I know 

let obj1 = { name: 'Yao', password: '123' }

and we also are gonna create another object

let obj2

and this is gonna be...
we just copy the first object

let obj2 = obj1;

//

let obj1 = { name: 'Yao', password: '123' };
let obj2 = obj1;

But, what if I go ahead and
with object 2 I change password
to equal easypeasy

obj2.password = 'easypeasy'

what happen then?

if I console.log object 1

console.log(obj1)

and if I console.log object 2

console.log(obj2)

//

let obj1 = { name: 'Yao', password: '123' }
let obj2 = obj1

obj2.password  = 'easypeasy'

console.log(obj1) // {name: 'Yao', password: 'easypeasy'}
console.log(obj2) // {name: 'Yao', password: 'easypeasy'}

//

and I run

Woo, what just happen?
Password has been changed.
both, object1's password
and object2's password
updated
by doing this

obj2.password = 'easypeasy'

and this is due to pass by reference

You see,
objects in javascript
are stored in memory
and are 'pass by reference'
which means we do not copy the values
like we did we primitive types
we simply when we assign
object 1 to object 2
we simply said,
hey this is where the object is in memory
if we go back  to the code
object 1 and object 2
are both pointing
somewhere in memory
we don't know where
somewhere in the 'memory heap'
a shelve that contains this information

{ name: 'Yao', password: '123' }

so all I did by saying:

object 2 is equal to object 1

let obj2 = obj1;

is, hey,
this is lets say
the address in memory

let obj2 = 'address in memory'

of what ever this is is located

{ name: 'Yao', password: '123' }

So that what that means is when I change
like this
obj2.password = 'easypeasy'
I am saying :
well, change this password on this object in memory

{ name: 'Yao', password: '123' }

that also object 1 is pointing to
its referencing
thats where 'pass by reference' comes from

Now, why do you think this is a good idea?
lets think about this
Why is this good?
Its kind of nice, right?
because by  just having one object here

{ name: 'Yao', password: '123' }

I am saving space in memory

we are not copying and cloning the object
creating multiple version
we can simply save memory
for instance just one location
instead of just loading up our 'memory heap'

But, why this also be bad?
because unlike a primitive type
we might have this issue
where by mistake, 
somebody else changes a property on that reference object

So this is something that we need to be careful

lets do another example,
and just to prove
like I said before,
that arrays are simply objects,
lets try this with an array,

by do:
variable 'c'

var c

and this variable c has 1,2,3,4,5

var c = [1,2,3,4,5]

and then variable 'd' is equal to 'c'

var d = c;

and finally we say:
d dot  push some giant number

d.push(187628761) 

if I console.log(c)
or lets console.log(d) first


//

var c = [1,2,3,4,5]
var d = c
d.push(187628761)
console.log(d) // Array(6) [ 1, 2, 3, 4, 5, 187628761 ]

//

I run tis and we see 
that yes we modified the array

but because the arrays are objects
they are passed by reference
'c' should also has change

if I console.log(c) and I run

//

var c = [1,2,3,4,5];
var d = c;
d.push(187628761)
console.log(d)
console.log(c) // Array(6) [ 1, 2, 3, 4, 5, 187628761 ]

//

'c' has also changed as well
we know there is something here
this is good we are saving memory
we are not just constantly copying things

Imagine that 'c' is a massive massive object
if we were copying the different parts of the code
every time
well, this would create a lot of memory
but there are times where maybe we do wanna clone an object
copy it so we dont modify it like this
how can we do that?

well, with something like an array
there is different ways of doing it
but I can simply do an empty array

var c = [1,2,3,4,5];
var d = []

and the do concat method
which pushes whatever I have in 'c'

var c = [1,2,3,4,5];
var d = [].concat(c)

into this empty array
So when I run here 

var c = [1,2,3,4,5];
var d = [].concat(c);
d.push(187628761)
console.log(c) // Array(5) [ 1, 2, 3, 4, 5 ]

you see that 'c' is the same
but if I go to 'd'

var c = [1,2,3,4,5];
var d = [].concat(c);
d.push(187628761)
console.log(d) // Array(6) [ 1, 2, 3, 4, 5, 187628761 ]

I have a new array
It's cloned an array

Objects are a little bit more difficult

Let's say we have an object
that equals a is 1,
lets say b is 2

thats a little confusing

lets do a: a
then b: b;
and then finally c: c 

let obj = {a: 'a', b: 'b', c: 'c'}

and this object
I wanna a copy
I wanna have
this piece of code

{a: 'a', b: 'b', c: 'c'}

this object
in a different location in memory
How can we do that?

Well, I can do
another object
like this 

let obj2 = obj

//

let obj = {a: 'a',b: 'b', c: 'c'}
let obj2 = obj

//

because its gonna simply pass by reference
and we still referencing the same object

Instead we can  clone an object
by doing something like this:
Object.assign()

//

let obj = [1,2,3,4,5];
let clone = Object.assign()

//

let obj = [1,2,3,4,5];
let clone = Object.assign(
  // and in here the first parameter
  // is the object to copy to
  // an empty object
  {},
  // and what  is the source
  // so that from which to copy the  properties
  // so in my case it 'll be the object
  obj
)

//

so that now
if I change 
lets say object 'a'

obj.a

let's do object 'c'

obj.c

to equal '5'

//

obj.c = 5

//

If I console.log de 'clone' object and I run

//

let obj = {a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({}, obj);

obj.c = 5;
console.log(clone) // Object { a: "a", b: "b", c: "c" }

//

Look at that the 'clone' object
was not affected at all

Object { a: "a", b: "b", c: "c" }

Even though we change 'c'
to be '5'

remember if we didn't do this

'Object.assign({}, obj)'

let clone = Object.assign({}, obj)

we didn't clone it
and we just did object

'obj'

let clone = Object.assign(obj)

That would have been 'pass by reference'
and you would see the change that we  saw in the array

But because Object.assign
we were able to clone the object

Very cool
There is also another way of doing it
and that is using the spread operator
I can do :

let clone2

Create an object
and then do: 
dot dot dot '...'
and then obj

let clone2 = {...obj}

nice and clean
and this is a new feature '...'
that we got in the javascript language
which is really really nice
and once again if we run this code

//

let obj = {a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({}, obj);
let clone2 = {...obj};

obj.c = 5;
console.log(clone) // Object { a: "a", b: "b", c: "c" }

//

I see that clone hasn't been modified
If I do clone2

//

let obj = {a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({}, obj);
let clone2 = {...obj}

obj.c = 5;
console.log(clone2) // Object { a: "a", b: "b", c: "c" }

//

that hasn't been modified either

Just for reference 
I will add the original object as well
to see that indeed is different
that what we ave before

//

let obj = {a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({}, obj);
let clone2 = {...obj}

obj.c = 5;

console.log(obj) // Object { a: "a", b: "b", c: 5 }
console.log(clone); // Object { a: "a", b: "b", c: "c" }
console.log(clone2); // Object { a: "a", b: "b", c: "c" }
//

Awesome
cloning is great
But let me ask you this:
What do you think it will happen 
with the code that we have
if we have an object inside of an object?
for example if 'c',
instead of just being a string

let obj = {a: 'a',b: 'b', c: 'c'}

its another pass by reference object
that lets say as 'deep' as a property

let obj = {a: 'a',b : 'b',c: {deep:}}

and this deep is going to equal
'try and copy me'

let obj = {a: 'a', b: 'b', c: {deep: 'try and copy me'}}

I hope it makes sense
let me adjust the indentation in here
so you see it better
what is happening

let obj = {
  a: 'a',
  b: 'b',
  c: {
    deep: 'try and copy me'
  }
}

So what happens here?
We have an object

{
  a: 'a',
  b: 'b', 
  c: {
    deep: 'try and copy me'
  }
}

that is reference somewhere in memory
and inside of that object
there is again another pointer
to another place in memory
that references this object

{ deep: 'try and copy me' }

Let's run this code

// 

let obj = {
  a: 'a',
  b: 'b', 
  c: { deep: 'try and copy me' }
}
let clone = Object.assign({}, obj);
let clone2 = {...obj};

obj.c = 5;
console.log(obj); //  Object { a: "a", b: "b", c: 5 }
console.log(clone); // Object { a: "a", b: "b", c: {…} }
​
a: "a"
​
b: "b"
​
c: Object { deep: "try and copy me" }
​
<prototype>: Object { … }
console.log(clone2);// Object { a: "a", b: "b", c: {…} }
​
a: "a"
​
b: "b"
​
c: Object { deep: "try and copy me" }
​
<prototype>: Object { … }

//

well, nothing has change
I mean 'c' has obviously has changed
and something that we already saw before
what if I change 'deep' this time around?
What if I do: ?
obj.c.deep
and deep is now going to say 'hahaha'

What do you think it will happen here?

Let's run this code

let obj = {
  a: 'a',
  b: 'b', 
  c: {
    deep: 'try and copy me'
  }
}
let clone = Object.assign({}, obj);
let clone2 = {...obj};

obj.c.deep = 'hahaha';
console.log(obj); // Object { a: "a", b: "b", c: {…} }
​
a: "a"
​
b: "b"
​
c: Object { deep: "hahaha" }
​
<prototype>: Object { … }
console.log(clone); // Object { a: "a", b: "b", c: {…} }
​
a: "a"
​
b: "b"
​
c: Object { deep: "hahaha" }
​
<prototype>: Object { … }
console.log(clone2) // Object { a: "a", b: "b", c: {…} }
​
a: "a"
​
b: "b"
​
c: Object { deep: "hahaha" }
​
<prototype>: Object { … }

//

oh no
we cloned everything
but it got overwritten

I thought we cloned everything
What happened here?

Remember ...
each object
gets 'pass by referenced'

So although we clone the object
the initial object
this is what we call a 'shallow clone'
it clone the first the first level
so that is the memory address
in this object

{
  a: 'a',
  b: 'b', 
  c: {
    deep: 'try and copy me'
  }
}

but within this object there was another address
to another object
So again remember
this is just another address
that we have some place in memory

{
  a: 'a',
  b: 'b',
  c: '87912879812'
}

  c: '87912879812'

and this address,
well it will never change
it always reference this object

{
  deep: 'try and copy me'
}

So this is shallow cloning
we only clone the first layer

{
  a: 'a',
  b: 'b',
  c: {
    deep: 'try and copy me'
  }
}

thats a big problem right
how can we do 'deep cloning'?

and the way we can do this is:
well a little funky,
we use JSON
we say let superClone

let superCLone

and we are going to use the JSON.parse method

let superClone = JSON.parse

and this is beyond the scope of the course
you can read on what JSON.parse does
but this JSON object is going to say
JSON.stringify

let superClone = JSON.parse(JSON.stringify())

we are going to stringify what is in here into a string

let obj = {
  a: 'a', 
  b: 'b', 
  c: {
    deep: 'try and copy me'
  }
}

and then once we turn everything into a string
we are gonna to parse it
and turn that string back into an object

So that if I do superClone now
at the bottom here
console.log(superClone)
and I run

//

let obj = {
  a: 'a', 
  b: 'b', 
  c: {
    deep: 'try and copy me'
  }
}

let clone = Object.assign({}, obj);
let clone2 = {...obj};
let superClone = JSON.parse(JSON.stringify(obj))

obj.c.deep = 'hahaha';
console.log(obj); // Object { a: "a", b: "b", c: {…} }
​
a: "a"
​
b: "b"
​
c: Object { deep: "hahaha" }
​
<prototype>: Object { … }
console.log(clone); // Object { a: "a", b: "b", c: {…} }
​
a: "a"
​
b: "b"
​
c: Object { deep: "hahaha" }
console.log(clone2); // Object { a: "a", b: "b", c: {…} }
​
a: "a"
​
b: "b"
​
c: Object { deep: "hahaha" }
​
<prototype>: Object { … }
console.log(superClone) // Object { a: "a", b: "b", c: {…} }
​
a: "a"
​
b: "b"
​
c: Object { deep: "try and copy me" }
​
<prototype>: Object { … }

//

Look at that 'try and copy me'
superClone version made a deep clone of the object
very very cool

Now before I end this video
I hope 
'pass by reference'
and
'pass by value'
make sense to you
I  do give you a bit of a warning
However if you are doing a deep clone
well you should be careful
because this has some performance implications
if this object was extremely deep,
a massive object,
its gonna take a long time
to clone everything
so you will see this out in the wild
too much
if you are cloning objects
like this
there is most likely other ways that you should be  doing it
but I want you to show you
the idea of 'pass by reference'
the idea of 'shallow cloning'
and some of the ways that we can use objects
to get the desired output

all right,
I hope that was fun
I see you in the next video

////////////////////////////////




































*/
