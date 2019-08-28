'use strict';

let singleQuote = 'single-quotes';
let doubleQuote = "double-quotes";
let backTicks = `backticks`;

//Backticks
function sum(a, b) {
    return a + b;
}

//Allow embeded expressions including function calls
console.log( `1 + 2 = ${sum(1, 2)}.`);

//Allow multi-lined string
let multiLine = 
`We start here:
Then go here ->
And then here ->
And end here.`;

console.log(multiLine);

//Single and Double quotes Multi-line requires \n chracter
let newLine = 'We start here:\nThen go here ->\nAnd then here ->\nAnd end here.';
console.log(newLine);

//The backslash \ is called the escape character
let escapeQuote = 'I\'m The Coder Hero!';
console.log(escapeQuote);

//Escape character is only needed for similar quote styles
let noEscapeNeeded = "I'm also The Coder Hero!";
console.log(noEscapeNeeded);

//To show a backslash, you need to include an escape character
let backSlashed = 'Here is a backslash: \\';
console.log(backSlashed);

//Length of a string
let stringLength = escapeQuote.length;
console.log('The string is ' + stringLength + ' characters long');

//Accessing a character
//Square brackets are used to get character of string
console.log(backSlashed[0]); //-> H

//We can also use charAt(position)
console.log( backSlashed.charAt(0) ); //-> H

//To get the last character use length - 1
console.log( backSlashed.length - 1 ); //-> o

//Square brackets return undefined if no character is at the position
//charAt(position) return an empty string if no character is at the position
console.log( backSlashed[1000] ); //-> undefined
console.log( backSlashed.charAt(1000) ); //-> ''

//Change string case with toUpperCase() and toLowerCase()
console.log( backSlashed.toUpperCase() );
console.log( backSlashed.toLowerCase() );

//Searching for string
let hero = 'There is The Coder Hero';

console.log( hero.indexOf('Coder') ); //-> 13
console.log( hero.indexOf('coder') ); //-> -1 Case-sensitive
console.log( hero.indexOf('er') ); //-> 2 'The(re)

//Second argument is the position to start searching at
console.log( hero.indexOf('er', 5) ); //-> 16 'There is The Cod(er) Hero'

//If we want all occurences of a string we can loop through with indexOf(string, position)
let target = 'er';
let position = 0;

while(true) {
    let foundPos = hero.indexOf( target, position);
    if( foundPos == -1 ) break;
    console.log( `Found at ${foundPos}` );
    position = foundPos + 1;
}

//This can be shortened with the following
let pos = -1;

while( ( pos = hero.indexOf(target, pos + 1) ) != -1 ) {
    console.log('Found at: ' + pos);
}

//lastIndexOf(string, position) does the same thing in reverse

//indexOf() can't be used in an if statement alone
if ( hero.indexOf('The') ) { // 'The' returns the index position of 0 which is false in if statements
    console.log('I found it!');
}

//Add the != -1 which is what is returned when not found
if ( hero.indexOf('The') != -1 ) {
    console.log('I found it!');
}

//Also the ~ can be used as the bitwise NOT will only return 0 on a -1
if ( ~hero.indexOf('The') ) {
    console.log('I found it again!');
}

//Test for match with string.includes()
console.log( hero.includes('Coder') ); //-> true
console.log( hero.includes('Bugz') ); //-> false - Not found

//Second argument of includes() is the position
console.log( hero.includes(target, 5) ); //-> true 'er' is found after position 5

//string.startsWith() and string.endsWith() work as expected
console.log( hero.startsWith('There') ); //-> true
console.log( hero.endsWith('Hero') ); //-> true

//Getting a substring with slice(start, end)
console.log( hero.slice(9, 23) ); //-> The Coder Hero
//end is not included in the sliced substring

//Negative numbers in slice work in reverse
console.log( hero.slice(-10, -1) ); //-> Coder Her

//Comparing A String
//When comparing string, each character is compared using the following order
let compareString = '';

for( let i = 65; i <= 220; i++) {
    compareString += String.fromCodePoint(i);
}

console.log(compareString);

//The most important take away is that uppercase letters are greater than lowercase letters