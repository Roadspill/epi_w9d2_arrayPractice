Pig Latin
Write a Pig Latin translator or should we say an "igPay atinLay anslatorTray"? Read all instructions carefully before beginning.

How Pig Latin Works
First, here are the rules of Pig Latin:

For words beginning with a vowel, add "way" to the end.

For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".

If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!

For words beginning with "y", treat "y" as a consonant.

Instructions
****Before writing any code, make a list of specs detailing each behavior your program will have. Start with the simplest possible behavior, and slowly move up in complexity. To get you started, the first two specs are provided below.

****Have at least two other pairs check your specs before you begin coding. Ensure that each possible behavior is represented by a spec, and that they are ordered from simplest to most complex.

****Place your specs (and their example inputs and outputs) in your project's README.

****Create a basic user interface that allows your application to accept user input, and display output. This will allow us to manually test each spec.

Slowly add business logic. Begin by focusing on the behavior outlined in your first, most simple spec. Implement the least amount of logic necessary to create this behavior.

Manually test this behaviour by inputting the example input described by the spec into your application, and confirm you receive the correct output.

Once behavior outlined by the first spec is successfully implemented, repeat steps 5 - 7 for each subsequent spec. Do not move onto the next spec until the previous one passes.

Helpful Hints
When you get to consonants, don't try to solve it all at once. Instead, start with an example of a word that only has one consonant; then a word with two consonants; then a word with three; and then tackle the exceptions to the rule, like "qu" and "y". Once your application can successfully translate single words, work on translating entire sentences.

Although you're welcome to solve the problem however you'd like, there are a few methods that would be handy:

String.prototype.slice()
String.prototype.includes()
String.prototype.indexOf()
Take a look at this and other documentation to gather the tools you'll need before you try to fulfill your specs.

Specs
To get you started, below are the first two "plain English" specs:

The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
Example Input: 3
Example Output: 3
The program adds "ay" to single-letter words beginning with a vowel.
Example Input: i
Example Output: iay

------------------------------------------

* Adds 'way' to the end when word begins with a vowel.
  * Input:  Obvious
  * Output: Obviousway

* Move all first consecutive consonants to the end and add 'ay'
  * Input:  Travel
  * Output: Aveltray

  * Input:  hallway
  * Output: allwayhay

* Treat words that start with 'y' treat as a consonant
  * Input:  yellow
  * Output: ellowyay

* First consonants include 'qu', move 'u' as well to end then add 'ay'
  * Input:  quiet
  * Output: ietquay

* If 'qu' follow first consecutive consonant/s, move 'qu' with consonants to end and 'ay'
  * Input:  squeal
  * Output: ealsquay
