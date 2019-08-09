'use strict';

//QUESTION -> What are Objects?
//ANSWER   -> Objects are representations of real world objects.

//QUESTION -> What if I want to create many instances of an object?
//ANSWER   -> Use a Constructor Function.

//QUESTION -> What is a Contructor Function?
//ANSWER   -> A Constructor Function is a regular function except:
//            A. It starts with a Capital letter name
//            B. It is called with the ( new ) keyword

function Hero( name ) {
    this.name = name;
    this.isHero = true;
}

let mainHero = new Hero( 'The Coder Hero' );

console.log( mainHero.name );
console.log( mainHero.isHero );

//QUESTION -> What is the benefit of a Constructor Function?
//ANSWER   -> To create reusable object creation code.

let sideKick = new Hero( 'Captain WebDev' );
let butler = new Hero( 'Mr. CleanCode' );
let pet = new Hero( 'GitHub Kitty' );

//QUESTION -> Do Constructor Function always have to be called with parenthesis?
//ANSWER   -> No! Constructor Functions with no arguments can be called without parenthesis.

function Powersource() {
    this.source = 'Gamma Radiation';
}

let gammaRays = new Powersource;

//QUESTION -> Is that a good coding practice?
//ANSWER   -> No! It is generally considered a bad coding practice, but is allowable.

//QUESTION -> Can Constructor Functions create Object Methods?
//ANSWER   -> Yes! Using the ( this ) keyword.

function Bugz( name ) {
    this.name = name;

    this.sayName = function() {
        console.log( `Pathetic heroes! Tremble before the might of ${ this.name } !` );
    };

}

let mainBug =  new Bugz( 'CoderBugz' );
mainBug.sayName();