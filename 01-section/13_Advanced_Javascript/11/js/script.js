/*
ES10(ES2019)

Hey there everyone

We are now ready for ES10
o ECMAScript 2019

thats right
every year 
they are constantly
trying to improve the language
that is javascript
and now ES10 is the latest

So, 
what new features 
o we get in this version of javascript ?

Well, luckily for you
they aren't to many

So, lets start off with my favourite one
and its called flat

.flat()

and flat is a method 
that we can use on arrays

Let me show you what I mean
lets I have  an array variable
that contains a very exciting array
1,2,3,4,5

const array = [1,2,3,4,5]

if I now run array flat

const array = [1,2,3,4,5]
array.flat() // Array(5) [ 1, 2, 3, 4, 5 ]

copy this code and run it here
what do you think it will happen?

well, absolutely nothing
we returned a new array

Array(5) [ 1, 2, 3, 4, 5 ]

it looks like
but it looks the exact same
but, this is where 'flat' get exciting

Imagine that this has nested arrays
for example 2 and 3
where in its on array
and 4 and 5
where also 
an array nested inside an array

if I now copy this
and lets call this array2

const array2 = [1,[2,3],[4,5]]
array.flat() // [ 1, 2, 3, 4, 5 ]

If I now copy this and copy it in the console
ey check that out
we get a new array
that is flatten
there is no nested arrays anymore

Alright, les keep going then
what happens if I have array3
and array 3 is even more nested
that we have before
lets say we have  1, 2, 3
like this
and maybe we have 5 that  is nested pretty deep

const array3 = [1,2,[3,4,[5]]]
array3.flat() // [ 1, 2, 3, 4, [ 5 ] ]

So now we have
an array inside other array
and inside of that there is another array

what do you think it will happen here?

We are going to copy and paste
run the code

[ 1, 2, 3, 4, [ 5 ] ]

So I get one array back
we see there is actually not a completely flat array

Instead we have 1,2,3,4
but then 5 
was only flatten one level
so essentially we remove these brackets

[1,2,[3,4,[5]]]
[1,2,3,4,5]

Now the interesting thing with flat is 
that we can tell it how many layers
flatten the array
so if we go back to our  example 
and in here the default was 1

array3.flat(1)

but if we change this to 2 now

const array3 = [1,2,[3,4,[5]]]
array3.flat(2) // [ 1, 2, 3, 4, 5 ]

lets copy and paste this
lets refresh this
and run again

[ 1, 2, 3, 4, 5 ]

Hey, look at that
we have
a completely flatten array

So in here I can tell it 
how many times
I wanna flatten
or how many layers flatten the array

alright but I have
a really exciting example
get ready for this

congratulations
you just become the owner of jurassic park

const jurassicPark = [['🦂 ', '🦟 '],'⛅ ','🐢 ',['🐍','🦎 '],[[[['🦖 ']]],'😠 '],['🐙 ','🦑 ']]

you have creatures
and the t-rex over here
is extremely dangerous
thats why
well,
it is in its own contained area
with a lot of barricades around
because
we dont want the t-rex going wild
but, here is a problem
you are a bad guy  at jurassic park
if I ask you
Hey can I completely
flatten this array
How do you go about it?
Pause the video and think about it
ready for the answer
well, you can do jurassic park dot flat
and you might count actually how many
arrays are nested in here
but there is a trick here
I could maybe do just 50
lets see what happens

const jurassicPark = [['🦂 ', '🦟 '],'⛅ ','🐢 ',['🐍','🦎 '],[[[['🦖 ']]],'😠 '],['🐙 ','🦑 ']]
jurassicPark.flat(50) // [ '🦂 ', '🦟 ', '⛅ ', '🐢 ', '🐍', '🦎 ', '🦖 ', '😠 ', '🐙 ', '🦑 ' ]

alright all the barricades are down and
and the animals are now going wild
I just randomly pick fifty because 50
because 50
i knew that 50 wasn't
how many nested arrays we have
we had less than 50

Now in the exercise of this video
I am gonna show you a cool little trick
of making sure that we can flatten
the upmost level
but that for the exercise

another really useful
think that you can do with flat
is ... lets say we have a lot of entries
and these entries from your users coming
and maybe we get 'bob'
we get 'Sally'
entering their name
but we also get a bunch of entries
that are completely empty
with maybe
'cindy' at the end

const entries = ['bob', 'sally',,,,,, 'cindy']

using flat
we can actually flatten the entries
and clean up our data

entries dot flat
like this

entries.flat()

copy and paste this

const entries = ['bob', 'sally',,,,,, 'cindy']
entries.flat() // [ 'bob', 'sally', 'cindy' ]

[ 'bob', 'sally', 'cindy' ]

look at that it cleans up the data
for me 
which is really really nice

alright the next feature
of ES10
is 'flatMap()'
and flat map
as the name suggest
allows us to flat function
and the map function
method on an array

So lets do something fun here
lets say that we have the jurassic park again
and this time we are to use 'flatmap'

jurassicPark and we call this new variable
we do const jurassicParkChaos

const jurassicParkChaos =

and this chaos will have the jurassic park

const jurassicParkChaos = jurassicPark

array that we have above
lets make a little bit bigger
and no we can use flatmap
to do something interesting

const jurassicParkChaos = jurassicPark.flatMap()

I can say that for each item 
that we are gonna to flatten
we are going to create a creature

const jurassicParkChaos = jurassicPark.flatMap(creature)

and this creature using arrow functions
we  are going to create creature + the t-rex

const jurassicParkChaos = jurassicPark.flapMap(creature => creature + '🦖')

so each creature
is going to have a t-rex as neighbour
which is not good 
they are all gonna get ¿? but the t-rex
is the t-rex a kind of carnivore?
I am not sure
you have  to
google that on your own
So
we have the jurassicPark flatMap
so, flat name the jurassic park
and mapping over this flatten array
and doing some short of a map function to it
so lets see what happens
if I now copy this
and paste this in
if I now want to know what jurassicParkChaos is,

const jurassicPark = [['🦂 ', '🦟 '],'⛅ ','🐢 ',['🐍','🦎 '],[[[['🦖 ']]],'😠 '],['🐙 ','🦑 ']]

const jurassicParkChaos = jurassicPark.flatMap(creature => creature + '🦖')

jurassicParkChaos // [ '🦂 ,🦟 🦖', '⛅ 🦖', '🐢 🦖', '🐍,🦎 🦖', '🦖 ,😠 🦖', '🐙 ,🦑 🦖' ]

and I hit enter

[ '🦂 ,🦟 🦖', '⛅ 🦖', '🐢 🦖', '🐍,🦎 🦖', '🦖 ,😠 🦖', '🐙 ,🦑 🦖' ]

oh boy look at that 
we have t-rex
neighbours with all the creatures
well, its absolute chaos in jurassicPark
flatMap allows us to use the basic map function
an then flattens the result to a depth of one

alright lets keep going
next its a very simple one
lets see you get an user email

userEmail

and userEmail is entered a little incorrectly
let say a bunch of space and then we have 
eddytheeagle@gmail.com

userEmail = '       eddytheeagle@gmail.com'

that we received from the user
or maybe we have userEmail2
and tis time around 
jonnydangerous@gmail
enters the information
but then we have again some blank spaces

userEmail = '       eddytheeagle@gmail.com'
userEmail = 'jonnydangerous@gmail.com          '

what can we do?

with the new ES10 feature
we can simply say:
'userEmail.trimStart()'
on a string
and it will trim the beginning.
and
'userEmail2.trimEnd()'
and trim the end of the string

oh, and make sure we declare these variables
lets console..log these and see what happens

const userEmail = '       eddytheeagle@gmail.com'
const userEmail2 = 'jonnydangerous@gmail.com   '

console.log(userEmail.trimStart()) // 'eddytheeagle@gmail.com'
console.log(userEmail2.trimEnd()) // 'jonnydangerous@gmail.com'

'eddytheeagle@gmail.com'
'jonnydangerous@gmail.com'

my strings dont ave any blank spaces in them

if I check userEmail here
'userEmail'
you see the blank space stills there

'       eddytheeagle@gmail.com'

but the new generated string
using :
userEmail.trimStart()
wont have any blank spaces
'eddytheeagle@gmail.com'

alright we are flying through this
whats next?
we only have a few more left
actually two more left

the next one is called

'fromEntries'

it transforms a list of key value pairs
into an object
let me show what I mean
lets clear this
just comment all of this
maybe bring it down to the bottom

and focus on this one

so image we had
some user profiles that we receive
userProfiles
but this userProfiles are formatted in the wrong way
so lets say we have an array
and inside of the array
we have the users profile of a game
we have 
lets call him
commanderTom
as the player game
and he is 23 years old

userProfiles = [['commanderTom', 23], []]

next we have 
lets say an array
derekZlander is lets say 40
and make this a little bit bigger

userProfiles = [['commadertom', '23'], ['derkZlander', '40' ]]

and then finally we have an array
hansel is 18

userProfiles = [['commanderTom', ''23], ['derekZlander', '40'], ['hansel', '18']]

so we have these user profiles
but these arrays ser not really useful right now
wouldn't it be great if we can convert them into an object
when each username is associated with an age
well, this exactly what fromEntries is for
we simply do :

Object.fromEntries(
	// and fromEntries is going  to receive an array like this
	// lets do userProfiles here
	// and see what happens
	userProfiles
)

copy this code
paste it in here

userProfiles = [['commanderTom', ''23], ['derekZlander', '40'], ['hansel', '18']]
Object.fromEntries(userProfiles)

hey look at that

{
  commanderTom: '23',
  derekZlander: '40',
  hansel: '18'
}

We get an object now
with commanderTom 23
derekZlander has a key of derekZlander and value of 40
hansel, has a key of hansel and value of 18

Now the name may trigger something 
depending on while your are watching this
because in ES8
we talked about
something called entries
'Object.entries()'
allows us to do the exact opposite thing
so for example if this was
'Object.fromEntries(userProfiles)'
now an object

const obj = Object.fromEntries(userProfiles)

if I do object entries in this object now

const obj = Object.fromEntries(userProfiles)
Object.entries(obj)

copy and paste this 
refresh this
I have exactly what I  had originally back

[
  [ 'commanderTom', '23' ],
  [ 'derekZlander', '40' ],
  [ 'hansel', '18' ]
]

So the name fromEntries 
simply comes from object dot entries
Object.entries()

Ok, ok,

One last and I promise we are done

the last part is an update to a feature that we have in javascript
which is try and catch block

try {

} catch {

}

like this

Now this try catch block
is something that we are going to talk a lot more
when we get into asynchronous javascript part of the course
but essentially the try and catch block 
allows us to try a piece of code
and if there is any errors
catch them

so for example if do here:
let say 4 + 5
and I run
this piece of code
if I click run

try {
	4 + 5
} catch {

} // 9

I get 9
its the exact same thing as
writing 4 + 5
the only difference is that
is that with this try catch block
we are telling javascript 
Hey, try this, 
and if there is any errors in line 3 here
then do something with
in the catch block
I can for example 
say console.log('you messed up')

try {
	4 + 5
} catch {
	console.log('you messed up')
}

and now if I do lets say
true + 'hi'

try {
	true + 'hi'
} catch {
	console.log('you messed up')
} // 'truehi'

if I copy and paste this code
I get :

'truehi'

Because its something that we have seen before
its type coercion
try this 
injects javascript that is valid javascript
it turns tue into a string
combines it with hi
but if I do lets say a variable 
instead of true we have a bob variable
if I run this

try {
	bob + 'hi'
} catch {
	console.log('you messed up')
} // 'you messed up'

I have the catch block that says

'you messed up'

Because this threw an error
as soon as it throws an error it catches it
and here is the thing
you actually saw a new feature here in ES10
because back in the day
before ES10 this code to actually catch
you have to pass it an error object parameter

try {
	true + 'hi'
} catch (e) {
	console.log('you messed up')
}

so I can call this whatever I want
so I have to do error
so I can perhaps do error

try {
	bob + 'hi'
} catch (error) {
	console.log('you messed up' + error )
}

so if I copy and paste this
I refresh this
and lets do bob here so that we error out

I get you messed out
but then I also
catch the error
which is a reference error
bob is not defined
'you messed upReferenceError: bob is not defined'

So before we pass it a parameter
otherwise this whole block of code
even it was working for us
we actually error
because we passed the parameter 'error'
with ES10 we have a n update
because we are not force to use that parameter
if you dont want to
again this is something we will cover later on
when we will talk about asynchronous javascript

oh boy, that looked like a lot
but I mean it wasn't that much
nice and easy,
nice and simple

I see you in the next video
bye bye 

*/
