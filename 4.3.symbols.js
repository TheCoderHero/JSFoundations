'use strict';

//QUESTION -> What data types can be used for object keys?
//ANSWER   -> Strings and Symbols

//QUESTION -> What is a Symbol?
//ANSWER   -> A Symbol is a representation of a unique ID

//QUESTION -> How do you create a Symbol? 

let uniqueId_01 = Symbol();

//QUESTION -> How do we describe our Symbol?
//ANSWER   -> You can give your Symbol a description.

let uniqueID_02 = Symbol( 'ID_02 Description' );

//QUESTION -> Are Symbols with the same description the same?
//ANSWER   -> No! Each Symbol is unique, regardless of the description.

let uniqueID_03 = Symbol( 'ID_02 Description' );

console.log( uniqueID_02 == uniqueID_03 ) ; //-> false;

//QUESTION -> Do Symbols auto-convert to Strings?
//ANSWER   -> No! Unlike other primitives, Symbols do no auto-convert.

/***********************************
 * ERROR CODERBUGZ CONTAINMENT FIELD
 *
 *  console.log( uniqueID_02 );
 *
 * ERROR CODERBUGZ CONTAINMENT FIELD
 **********************************/

//QUESTION -> How do you convert a Symbol to a String?
//ANSWER   -> Using the ( toString ) method or the [ description ] property.

console.log( uniqueID_02.toString() );
console.log( uniqueID_02.description );

//QUESTION -> What are Symbols used for?
//ANSWER   -> Symbols are used to create hidden properties in objects

//QUESTION -> How do you add a Symbol to an Object?
//ANSWER   -> Using bracket notation.

let heroID = Symbol( 'A hero identifier code' );

let hero = {
    name: 'The Coder Hero',
    [heroID]: 'Hero_001',
};

console.log( hero[heroID] ); //-> Hero_001

//QUESTION -> Will Symbols be displayed in a ( for...in ) loop?
//ANSWER   -> No! Symbols are skipped in a ( for...in ) loop.

for ( let key in hero ){
    console.log( key + ' : ' + hero[key] );
}

//QUESTION -> Do Symbols get copied during Object copying?
//ANSWER   -> Yes! But only when using the ( assign ) Object Method

let heroClone = Object.assign( {}, hero );

console.log( 'Symbol Poperty : ' + heroClone[ heroID ] );


//QUESTION -> What if I want to use the same Symbol for different things?
//ANSWER   -> You can create a Global Symbol using the ( for ) Symbol Method.

//QUESTION -> How does the ( for ) Symbol Method work?
//ANSWER   -> If the Symbol exists, it returns the symbol. If the Symbol
//            does not exist, tit creates the Symbol, then returns it.

/******************************************************
 * Symbol.for( key )
 ******************************************************/

let bug = Symbol.for( 'CoderBugz' ); //Created and returned

let newBug_01 = Symbol.for( 'CoderBugz' ); //returns Symbol('CoderBugz')
let newBug_02 = Symbol.for( 'CoderBugz' ); //returns Symbol('CoderBugz')

//QUESTION -> Will both variables equal the same Symbol?
//ANSWER   -> Yes! They will both equal the Global Symbol.

console.log( newBug_01 == newBug_02 ); //-> true

//QUESTION -> What if I know the variable name but not the Symbol description?
//ANSWER   -> You can use the ( keyFor ) Symbol Method

/******************************************************
 * Symbol.keyFor( variable )
 ******************************************************/

let virus_01 = Symbol.for( 'Cryptolocker' );
let virus_02 = Symbol.for( 'ILOVEYOU' );

//Get name from symbol
console.log( '#1 Virus : ' + Symbol.keyFor( virus_01 ) );
console.log( '#2 Virus : ' + Symbol.keyFor( virus_02 ) );

//QUESTION -> Does this work for non-Global Symbols?
//ANSWER   -> No! ( keyFor ) Symbol Method only works for Global Symbols.

//QUESTION -> What if you use it on a non-Global variable?
//ANSWER   -> The code returns undefined.

console.log( Symbol.keyFor( heroID ) ); //-> undefined