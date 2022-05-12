/*
ES2020!
// BigInt
// Nullish Coalescing Operator ??
// Optional Chaining Operator
// Promise.allSettled
// globalThis

Hello
welcome back to the latest feature
of ECMAScript
they keep adding new things,
but this is new
a really good one,
so the latest ES2020
has some really new features
and I gonna show you some of my favorite ones
you can see them right here

BigInt
Nullish Coalescing Operator ??
Optional Chaining Operator ?.
Promise.allSettled
globalThis

Now iin this video we are gonna talk about these three

BigInt
Nullish Coalescing Operator ??
Optional Chaining Operator ?.

and later on we will have separate lectures for ES2020

Promise.allSettled
and also
globalThis

those lectures will be title
ES2020 with the respective names
Because these last two
are better understood
once we go over a few different new topics

So lets just focus on
these three for now

BigInt
Nullish Coalescing Operator ??
Optional Chaining operator ?.

Lets get started with BigInt
and BigInt is a really really exciting
new feature
its a new type in javascript
why do I mean by that

Well,  now in javascript
we have a new 
typeof bigint
its a new type
just like we have 
number,
just like we have boolean
different types in javascript

Well, lets test out that theory

Lets say we wanna find out in  our console over here
if I do:
typeof
it gives me the type of something
if I do:

typeof 4 // 'number'

its a number
if I do:

type of lets say true
typeof true // 'boolean'

but what if I do type of a really really long number

typeof 12397884598639864964047832948328294 // 'number'

Well that stills a number

You see 
BigInt stands for big integer
but andrei you have told me that BigInt
its a new type
and how come I dont see it here

Well, to get the bigInt type
lets clear this
you simply add the letter 'n' after
after a number 
so for example I can do 
1n
so if do:
typeof 1n // 'bigint'
I get
BigInt

but what does really means
here is a fun javascript little trick
oh a gotcha
javascript has something called max safe integer
and I am gonna leave some resources in this video 
if you wanna dive deep
you can read about it
javascript has something called a safe number
and it can go up to certain
safe integer 
which is
this number right here
9007199254740991
but aas soon as it goes a little bit higher
the calculation
991start breaking down
so if we scroll all the way down here
we found out that the max safe integer
has a value of this number
9007199254740991
the reason behind that number 
is that javascript uses 

'double-precision floating-point format numbers'
oh thats a mouth full
essentially there is a limit to
to how much information we can store
in memory
well, kind of
and because of the way javascript
is built
and this is also in 
other programming languages as well
there is a certain number that we can  old
and BigInt solves this problem

lets experiment this here
because I always love
learning a new thing to
to make sure that we truly understand this

So I am going to open up the console once again
and I am gonna try something I am gonna say

Number.MAX_SAFE_INTEGER // 9007199254740991

which gives me the number 
that we have here
soi this is the max 
that we can do in javascript
so what if I do this number plus one?
9007199254740991 + 1 // 9007199254740992
will that work?
9007199254740992
yep that worked
what if I do this this number plus ten
9007199254740991 + 10 // 9007199254741000
No it doesn't
this number plus ten
shouldn't equal that
9007199254741000
you see how we just broke something
what if I do this?
what if I do ...
this number right over here minus one
9007199254741000 - 1 // 9007199254741000
oh boy its
it messed up again
it doesn't make sense 
does it?
So BigInt is used
when we want to use a number 
that is larger that this 
MAX_SAFE_INTEGER
and we wanna do some calculations with it
so instead if I do this
9007199254741000n-1n // 9007199254740999n
Well, I get an operation
9007199254740999n
between this two BigInt s
and you see  that its working
its minus one

Again if we enter our max integer over here
and we do plus ten
9007199254740991 + 10 // 9007199254741000
we see that this doesn't work
as soon as we add 'n'
to both of these
there we go
9007199254740991n + 10n // 9007199254741001n
our operations work
So we are able  to use BigInt
as a new type
remember if I clear this

and I say :
1n + 2n // 3n
well I get a BigInt 
typeof 3n // 'bigint'
typeof BigInt
that we do calculations on
specially for big numbers
but as we can see we also just do
regular numbers as well
as long as we enter 'n'
pretty cool
most of the time you are not gonna use this feature
but its nice to know
and its interesting to know
that there are these limitations with javascript
and BigInt
solve them

alright lets do something even more fun

The next one is :
'Nullish Coalescing Operator'
actually you know what
lets start with this
the 
'Optional Chaining Operator'
and then we will into the 
'Nullish Coalescing Operator'
lets pretend that we are playing pokemon
hopefully everybody knows pokemon
the greatest game
as was growing up
i think it still popular

lets imagine that I have an user
and we say 
let
will is a pokemon trainer
let will_pokemon = {
  // and this user 
  // and this user 
  // has lets say a pokemon pikachu
  pikachu: {
    // and pikachu
    // is lets say a species 
    // that is a mouse pokemon
    species: 'Mouse Pokemon',
    // its got a height of 0.4
    height: 0.4,
    // and lets say a weight of 6
    weight: 6
    // So height 0.4 centimeters and weight 6 grains of weight
  }
}
Now lets imagina that
that we want to find out  the weight
of pikachu
and holded in  a variable
what we would usually do:

Its say let weight
let weight = 
and within here
we do:
will_pokemon.pikachu.weight

let weight = will_pokemon.pikachu.weight

so if we console.log
and we do weight

console.log(weight)

lets copy this 

//

let will_pokemon = {
  pikachu: {
    species: 'Mouse Pokemon',
    height: 0.4,
    weight: 6
  }
}

let weight = will_pokemon.pikachu.weight
console.log('weight',weight) // 'weight' 6

//

ok this is working 
but here is a problem
lets say that we have a different user
and this time
the new user is andrei
and andrei doesn't have pikachu
instead andrei has raichu
again a different kind of pokemon
still a mouse pokemon
but some of the details are a little bit different
say that height is 0.8
and the weight is 30 kilograms

let andrei_pokemon = {
  raichu: {
    species: 'Mouse Pokemon',
    height: 0.8,
    weight: 30
  }
}

so now if I want to find out
the weight let say raichu

let weight2 = andrei_pokemon.pikachu.weight
console.log('weight', weight)

and I run this command

//


let will_pokemon = {
  pikachu: {
    species: 'Mouse Pokemon',
    height: 0.4,
    weight: 6
  }
}

let andrei_pokemon = {
  raichu: {
    species: 'Mouse Pokemon',
    height: 0.8,
    weight: 30
  }
}

let weight = will_pokemon.pikachu.weight
console.log('weight',weight) // 'weight' 6
let weight2 = andrei_pokemon.pikachu.weight
console.log('weight', weight)

//

I  get an error:
TypeError: Cannot read properties of undefined (reading 'weight')

and why is that?
well because andrei
doesn't have pikachu
we dont have that pokemon 
instead we have raichu
so when we try to grab the pikachu
from the andrei pokemon object
is going  to say error

So in the past the way we will solve this
we would do an if statement
right?

So let me just remove wil for now
and in here 
lets minimize this so just 
andrei_pokemon object

and inhere instead of doing what we have done
we would do if
lets say andrei_pokemon dot pikachu
and if andrei pokemon dot pikachu dot weight

lets make it a little bit smaller so we can see

if(andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight) {
  // then we want to create weight2 variable
  let weight2 = andrei_pokemon.pikachu.weight
} else {
  // otherwise let weight2 is undefined
  let weight2 = undefined
}

So by doing this we wont get that error
we can check to see if andrei
to see if andrei has pikachu
if we just copy this over
lets just remove this for now
if just copy this over 
hit enter

//

let will_pokemon = {
  pikachu: {
    species: 'Mouse Pokemon',
    height: 0.4,
    weight: 6
  }
}

let andrei_pokemon = {
  raichu: {
    species: 'Mouse Pokemon',
    height: 0.8,
    weight: 30
  }
}
if(andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight){
  let weight2  = andrei_pokemon.pikachu.weight
} else {
  let weight2 = undefined
  console.log(weight2)
}

//

I get no errors
you see I get undefined

because it will realize that
andrei_pokemon object doesn't contain pikachu

so this is actually pretty annoying to do
and you see often code basics

doing this && and the doing andrei_pokemon
and they keep checking
does this object exist, does this object exists does this object exists and so on and so forth

So te cool thing of optional chaining
is that well, this avoid this complication

So I can change this
to say :

let weight3 = andrei_pokemon

I can say:
Is there an object?

let weight3 = andrei_pokemon?

and then pikachu

let weight3 = andrei_pokemon?.pikachu

Is there an object?

let weight3 = andrei_pokemon?.pikachu?

or a property of andrei_pokemon
that is pikachu?
and then do dot weight

let weight3 = andrei_pokemon?.pikachu?.weight

So by doing this,
check this out
If I console.log weight
and I copy this:

//

let andrei_pokemon = {
  raichu: {
    species: 'Mouse Pokemon',
    height: 0.8,
    weight: 30
  }
}

let weight3 = andrei_pokemon?.pikachu?.weight
console.log(weight3) // undefined

//

I get the same result
I get undefined
because iit checks all of these
eventually because 'pikachu' cannot be found
in this object 'andrei_pokemon'
its going to assign undefined
to weight3 without any errors

if i did have pikachu
and i try this again

//

let andrei_pokemon = {
  pikachu: {
    species: 'Mouse Pokemon',
    height: 0.8,
    weight: 30
  }
}

let weight3 = andrei_pokemon?.pikachu?.weight
console.log(weight3) // 30

//

you see that I have 30
so everything is working

So instead of having 
those long if statements
I can just check for properties
with this question mark '?'
very very cool

Now this video is getting long 
So lets take a pause
and then we are gonna visit 
'Nullish Coalescing Operator'
in the next video
Bye bye

//7/ part 3

welcome back,
lets talk about
the 
'Nullish coalescing Operator'
and it is this double question mark '??'

So remember
we learned about the 
'BigInt'
and we also learn about the 
'Optional Chaining'
the question mark and the period 
'?.'

So what does this double question mark '??' means
This double question mark ??
can often be used
instead what we see before 
the 
or operator 
'||'
So let me show what I mean
Lets imagine that I have a new property
and we call it power
and power for pikachu
is lightning

//

let andrei_pokemon = {
  pikachu: {
    species: 'Mouse Pokemon',
    height: 0.8,
    weight: 30,
    power: 'lightning'
  }
}

//

Now if I want to get the power of
my pokemon
then I can simply do this:

let power = andrei_pokemon?.pikachu?.power

and grab the property called power
but lets say we weren't sure that
we have this property for the pokemon
so we cant really do question mark period '?.'

let power = andrei_pokemon?.pikachu?.power?.

because that really doesn't make sense
remember the optional chaining operator
works on objects and check in the properties
but power is the end of the chain
we can't really do anything
Most of the time 
what we can do is an or operator '||'

So if lets say pikachu doesn't have a power
let's say 'no power'

let power = andrei_pokemon?.pikachu?.power || 'no power'

so lets imagine here that we have an empty string

let andrei_pokemon = {
  pikachu: {
    species: 'Mouse Pokemon',
    height: 0.8,
    weight: 30,
    power: ''
  }
}

or maybe not even the property

let andrei_pokemon = {
  pikachu: {
    species: 'Mouse Pokemon',
    height: 0.8,
    weight: 30
  }
}

if I copy this code and run this

//

let andrei_pokemon = {
  pikachu: {
    species: 'Mouse Pokemon',
    height: 0.8,
    weight: 30
  }
}

let power = andrei_pokemon?.pikachu?.power || 'no power'
console.log(power) // 'no power'

//

I get no power

'no power'

that make sense right?
but what iif we had
power in here
but its an empty string
what would happen then?

well, if I run this again 

//

let andrei_pokemon = {
  pikachu: {
    species: 'Mouse Pokemon',
    height: 0.8,
    weight: 30,
    power: ''
  }
}

let power = andrei_pokemon?.pikachu?.power || 'no power'
console.log(power) // 'no power'

//

I get no power again

'no power'

and thats because this or operator ||
works by checking
if this is truthy
(referring to the left part of the or operator ||)

andrei?.pikachu?.power || 

if its no truthy it resorts to 'no power'
(referring to the right part of the or operator ||)

|| 'no power'

thats how javascript works
so this empty 
    power: ''
evaluates as false
and I get no power
but, what if the power were false

let andrei_pokemon = {
  pikachu: {
    species: 'Mouse Pokemon',
    height: 0.8,
    weight: 30,
    power: false
  }
}

once again this would resort to false

andrei?.pikachu?.power ||

and I get 'no power'

but what  if this to be an empty string

let andrei_pokemon = {
  pikachu: {
    species: 'Mouse Pokemon',
    height: 0.8,
    weight: 30,
    power: ''
  }
}

we wanna check if this is null or undefined
    power: ''
only then we wanna get no power
otherwise maybe this pikachu
still evolving
and doesn't have any power
but we don't necessary want to say 'no power'
well, in that case we say
the 
'Nullish Coalescing'
'??'
and this instead of the or operator ||
doesn't check if a value is falsy
instead it checks
if its null or undefined

So things like zero 0 for example

let andrei_pokemon = {
  pikachu: {
    species: 'Mouse Pokemon',
    height: 0.8,
    weight: 30,
    power: 0
  }
}


let power = andrei_pokemon?.pikachu?.power ?? 'no power'
console.log(power) // 0

I get power of zero
0

if this was an or ||

let power = andrei_pokemon?.pikachu?.power || 'no power'

in that case the result will be different

//

let andrei_pokemon = {
  pikachu: {
    species: 'Mouse Pokemon',
    height: 0.8,
    weight: 30,
    power: 0
  }
}


let power = andrei_pokemon?.pikachu?.power || 'no power'
console.log(power) // 'no power'

//

the result will be no power
and we though actually have a value

So again 
Nullish Coalescing
is really really useful
for those occasions
that you might use the orr operator ||

Pretty pretty cool
a think thats enough
there is a few moe to cover
with ES2020
again we are gonna encounter 
those throughout the rest 
of the sections
because they require a bit of other knowledge
we are gonna ...
So lets take a brake 
and I see you in the next one
*/
