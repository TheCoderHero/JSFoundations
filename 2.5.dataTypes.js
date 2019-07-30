'use strict';

//QUESTION -> What kinds of data can we store in variables?
//ANSWER   -> JavaScript variables are dynamically typed meaning they can store any data.

//QUESTION -> How many data types are there?
//ANSWER   -> 7 Basic Data Types: Numbers, Strings, Booleans, Null, Undefined, Objects, Symbols.

//QUESTION -> What is a number data type?
//ANSWER   -> A number data type represents both integers and floating point numbers.

let oneTwoThree = 123;
let onePointSeventyFive = 1.75;

//QUESTION -> What mathematical operations can be performed on number data types?
//ANSWER   -> Many! Multiplication, Division, Addition, Subtraction, Modulo, Etc.

//QUESTION -> Are there special numeric values?
//ANSWER   -> Yes! Infinity and NaN ( Not a Number ).

console.log( 1/0 );  //->  Infinity
console.log( -1/0 ); //-> -Infinity
console.log( 'aString' * 2 ); //-> NaN 

//QUESTION -> Will JavaScript fail from mathmatical errors?
//ANSWER   -> No! JavaScript is a safe math zone!

//QUESTION -> What is a string data type?
//ANSWER   -> A string of characters surrounded by quotes.

//QUESTION -> What quotation marks do you use for a string?
//ANSWER   -> 3 types: single, double, backticks.

let singleQuote = 'This is a string!';
let doubleQuote = "This is also a string!";
let backtickQuote = `This is a third string!`;

//QUESTION -> What is special about backticks?
//ANSWER   -> Allows you to embed code directly into the string.

console.log( `This will print the data stored in oneTwoThree: ${ oneTwoThree }` );

//QUESTION -> Is there a character data type?
//ANSWER   -> No! JavaScript only works with strings!

//QUESTION -> What is a boolean data type?
//ANSWER   -> A data type that stores true or false.

let thisIsTrue = true;
let thisIsFalse = false;

//QUESTION -> Are there other ways to get a boolean value?
//ANSWER   -> Yes! Any logical operation will produce a boolean.

let thisIsAlsoTrue = ( 1 < 10 );

//QUESTION -> What is the null data type?
//ANSWER   -> null represents nothing, empty, or value unknown.

let unknownNumber = null;

//QUESTION -> What is the undefined data type?
//ANSWER   -> undefined represents value not assigned.

let undefinedVariable;
console.log( undefinedVariable );

//QUESTION -> What is an object?
//ANSWER   -> An object is a collection of data representing a real world object.
let sportsCar = {
    engine: 'Fast',
    breaks: 'The Best',
    tires: 'Super Grip',
    otherStuff: 'Other Stuff',
};

//QUESTION -> What are symbols?
//ANSWER   -> A symbol is used to create a unique identifier for an object.

//QUESTION -> How can we see what data type a variable is storing or a value is?
//ANSWER   -> We can use the ( typeof ) operator.

//QUESTION -> How can you use the ( typeof ) operator?
let randomVariable = 1;
console.log( typeof randomVariable );   //-> "number"
console.log( typeof( randomVariable) ); //-> "number"

//QUESTION -> What does the ( typeof ) operator return?
//ANSWER   -> A string describing the type of data.

console.log( typeof 123 );              //-> "number"
console.log( typeof 'Hello World!' );   //-> "string"
console.log( typeof true );             //-> "boolean"
console.log( typeof null );             //-> "object"
console.log( typeof undefined );        //-> "undefined"
console.log( typeof sportsCar );        //-> "object"
console.log( typeof Symbol( 'id' ) );   //-> "symbol"
console.log( typeof console.log );      //-> "function"

//QUESTION -> What is the function data type?
//ANSWER   -> There actually is no function data type. All functions are objects.

//QUESTION -> Why does ( null ) return as an object data type?
//ANSWER   -> An error with the current version of JavaScript.