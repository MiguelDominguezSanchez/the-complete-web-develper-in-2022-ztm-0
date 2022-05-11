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

*/
