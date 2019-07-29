'use strict';

//QUESTION -> What is a variable?
//ANSWER   -> A variable is a named storage for data

//QUESTION -> How do we declare a variable?

let hero;

//QUESTION -> How do we assign data to the variable?
//ANSWER   -> With the assignment operator ( = )

hero = `The Coder Hero`;

//QUESTION -> How do we access the stored data?
//ANSWER   -> Using the name of the variable

console.log( hero );

//QUESTION -> Can we declare and assign a variable in 1 line?
//ANSWER   -> Yes!

let bugz = 'CoderBugz';

//QUESTION -> Can we store other data in the same variable?
//ANSWER   -> Yes! You can reassign the variable to store other data.

hero = 100;
bugz = true;

//QUESTION -> What format should variable names be written in?
//ANSWER   -> camelCase

let newCamelCaseVariable;

//QUESTION -> Are there limitations on variable names?
//ANSWER   -> Yes! Names can only contain letters, digits, or the symbols $ and _
//            In addition, names can not start with a digit

//QUESTION -> Does case matter in variable names?
//ANSWER   -> Yes! Variables are case sensitive. Different case names equal different variables

let oneVariable;
let onevariable;
let onevarIABLE;

//QUESTION -> Are there any reserved names we can't use?
//ANSWER   -> Yes! Here is a list: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords

//QUESTION -> Can I change all variables?
//ANSWER   -> No! Some variables don't change and are called constants.

//QUESTION -> How to you declare a constant?

const electronsOfHydrogenAtom = 1;

//QUESTION -> What happens if I try to change a constant variable?
//ANSWER   -> Uncaught TypeError: Assignment to constant variable

/***********************************
 * ERROR CODERBUGZ CONTAINMENT FIELD
 *
 * electronsOfHydrogenAtom = 2;
 *
 * ERROR CODERBUGZ CONTAINMENT FIELD
 **********************************/


//QUESTION -> What format should constant variables be written in?
//ANSWER   -> If the value is known before runtime, UPPERCASE! Otherwise lowerCamelCase is fine.

const COLOR_RED = "#F00";

//QUESTION -> How should variables be named?
//ANSWER   -> Human readable, descriptive, concise

//Good Variable Names
let userName;
let shoppingCart;
let currentUser;

//Bad Variable Names
let a;
let user;
let data;

//QUESTION -> Should I reuse variable names or create a new variable?
//ANSWER   -> It's a better idea to create a new variable rather than reuse an old one

//These might all be super heros
let superHero;
let superHerosFriend;
let sideHerosSideKick;
let superHerosAcquaintance;