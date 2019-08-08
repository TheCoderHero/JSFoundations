'use strict';

//QUESTION -> What are Objects?
//ANSWER   -> Objects are representations of real world objects.

let hero = {
    name: 'The Coder Hero',
    language: 'JavaScript',
};

//QUESTION -> What are Object Methods?
//ANSWER   -> Object Methods are the actions that an Object performs.

//QUESTION -> How do you create an Object Method?
//ANSWER   -> Using Function Expressions.

hero.catchPhrase = function() {
    console.log( `We'll stamp out the CoderBugz using ${ hero.language }!` );
};

//QUESTION -> How do you call an Object Method?
//ANSWER   -> Using the Object Property name.

hero.catchPhrase();

//QUESTION -> Can Object Methods be defined inside of the object?
//ANSWER   -> Yes! Object Methods can be defined as Object Properties.

let bugz = {
    name: 'CoderBugz',
    laguage: 'Malicious',
    createBug() {
        console.log( `Let's see what kind of damage I can do!` );
    },
    warning() {
        console.log( `${ this.name } has created malicious code!` );
    },
};

//QUESTION -> What is the ( this ) keyword inside of the Object?
//ANSWER   -> ( this ) refers to the Object that called it.

//QUESTION -> Can ( this ) be used in functions?
//ANSWER   -> Yes! The function will get the ( this ) from the Object Context that calls it.

function catchphrase() {
    console.log( `Never fear! ${ this.name } is here!` );
}

//QUESTION -> Why is that helpful?
//ANSWER   -> You can assign a single function to multiple Objects.

hero.catchphrase = catchphrase;
hero.catchphrase();

bugz.catchphrase = catchphrase;
bugz.catchphrase();

//QUESTION -> What if you call a function with ( this ) without an Object Context?
//ANSWER   -> Uncaught TypeError: Cannot read property 'x' of undefined

/***********************************
 * ERROR CODERBUGZ CONTAINMENT FIELD
 *
 * console.log( catchphrase() );
 *
 * ERROR CODERBUGZ CONTAINMENT FIELD
 **********************************/

//QUESTION -> Do Arrow Functions have their own ( this ) ?
//ANSWER   -> No! Arrow Functions use the outer this and don't have their own.

let captainWebDev = {
    name: 'Captain Web Dev',
    language: 'HTML',
    superPower() {
        let power = () => console.log( `Creating page in ${ this.language }!` );
        power();
    },
};

captainWebDev.superPower();